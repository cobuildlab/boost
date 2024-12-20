// @flow

import React from 'react';
import ReactSelect, { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { withTheme } from '@emotion/react';
import { css } from '@emotion/react';
import { type SerializedStyles } from '@emotion/utils';
import color from 'color';

import { SelectTag } from './Select.theme';
import { type Theme, COLORS, Z_INDEX } from '../../theme';
import { Tooltip } from '../Tooltip';

type SelectProps = {|
  options: Array<{ label: mixed, value: string, options?: Array<Object> }>,
  onChange: (value: mixed, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  inputValue?: string,
  onInputChange ?: (value: string, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: any | any[],
  loading?: boolean,
  disabled?: boolean,
  /* Multiple prop is deprecated */
  multiple?: boolean,
  isMulti?: boolean,
  clearable?: boolean,
  hasError?: boolean,
  withPortal?: boolean,
  menuIsOpen?: boolean,
  autoFocus?: boolean,
  zIndex?: string | number,
  valueComponent?: React$Node,
  components?: Object,
  className?: string,
  formatOptionLabel?: Function,
  filterOption?: Function,
  getOptionValue?: Function,
  getOptionLabel?: Function,
  /** when stretch is true, width is 100% */
  stretch?: boolean,
  isSearchable?: boolean,
  css?: SerializedStyles,
  creatable?: boolean;
|};

type SelectPropsFromHOCs = {|
  theme: Theme
|}

const customStyles = ({ hasError, zIndex = Z_INDEX.DROPDOWN, COLORS }) => ({
  control: (style, { isFocused, isDisabled }) => ({
    ...style,
    minHeight: '36px',
    backgroundColor: isDisabled ? COLORS.DISABLED_COLOR : COLORS.WHITE,
    borderColor: hasError ? COLORS.DANGER : (isFocused ? COLORS.PRIMARY : COLORS.PRIMARY_BORDER_COLOR),
    boxShadow: null,
    '&:hover': {
      borderColor: null,
    },
  }),
  menuPortal: (style) => ({
    ...style,
    zIndex,
  }),
  placeholder: (style) => ({
    ...style,
    color: COLORS.PLACEHOLDER_COLOR,
    whiteSpace: 'nowrap',
  }),
  indicatorSeparator: (style) => ({
    ...style,
    display: 'none',
  }),
  multiValue: (style) => ({
    ...style,
    borderRadius: '12px',
    padding: '0 8px',
    color: COLORS.SECONDARY_TEXT_COLOR,
    border: '1px solid #d0d7dd',
    backgroundColor: COLORS.WHITE,
    height: 26,
    alignItems: 'center',
  }),
  multiValueLabel: (style) => ({
    ...style,
    color: 'inherit',
  }),
  multiValueRemove: (style) => ({
    ...style,
    color: 'inherit',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
    },
  }),
  dropdownIndicator: (style) => ({
    ...style,
    padding: '0 8px',
  }),
  clearIndicator: (style) => ({
    ...style,
    padding: '0 8px',
  }),
  option: (style, { isFocused, isDisabled, isSelected }) => ({
    ...style,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    backgroundColor: isDisabled
      ? null
      : isSelected
        ? COLORS.PRIMARY
        : isFocused
          ? color(COLORS.PRIMARY).alpha(0.1).string()
          : null,
    color: isDisabled
      ? COLORS.DISABLED_TEXT_COLOR
      : isSelected
        ? color(COLORS.PRIMARY).contrast(color(COLORS.WHITE)) > 2
          ? COLORS.WHITE
          : COLORS.BLACK
        : COLORS.PRIMARY_TEXT_COLOR,

    ':active': {
      ...style[':active'],
      backgroundColor: !isDisabled && !isSelected && color(COLORS.PRIMARY).alpha(0.3).string(),
    },
  }),
});

const MultiValueRemove = props => {
  return (
    <Tooltip message="Remove" css={ css`display: flex; align-items: center; height: 14px;` }>
      <components.MultiValueRemove { ...props } />
    </Tooltip>
  );
};

const ClearIndicator = props => {
  return (
    <Tooltip message="Remove All" css={ css`display: flex; align-items: center;` }>
      <components.ClearIndicator { ...props } />
    </Tooltip>
  );
};


const getCreatableOptionByValue = (value) => {
  if (Array.isArray(value)) {
    return value.map(valueItem => getCreatableOptionByValue(valueItem));
  } else {
    return {
      label: value,
      value,
    };
  }
};


const getOptionByValue = (value, options) => {
  if (Array.isArray(value)) {
    return value.map((valueItem) => getOptionByValue(valueItem, options));
  }

  const foundOption = options.reduce((result, option) => {
    if (result === null) {
      if (option.value === value) {
        return option;
      } else if (Array.isArray(option.options)) {
        return getOptionByValue(value, option.options);
      }
    }

    return result;
  }, null);

  return foundOption;
};

class Select extends React.Component<SelectProps & SelectPropsFromHOCs> {
  static components = components;
  static defaultProps = {
    withPortal: true,
    stretch: true,
  };

  onChange = (option: Object) => {
    const { isMulti } = this.props;
    let value = null;

    if (Array.isArray(option) || isMulti) {
      value = (option || []).map(({ value }) => value);
    } else if (option) {
      ({ value } = option);
    }

    this.props.onChange(value);
  };

  render() {
    const {
      value,
      loading,
      clearable,
      disabled,
      multiple,
      isMulti,
      options,
      placeholder,
      valueComponent,
      components,
      onChange,
      withPortal,
      theme,
      formatOptionLabel,
      inputValue,
      onInputChange,
      menuIsOpen,
      autoFocus,
      filterOption,
      getOptionValue,
      getOptionLabel,
      isSearchable,
      creatable,
      ...rest
    } = this.props;

    const selectValue = creatable ? getCreatableOptionByValue(value) : getOptionByValue(value, options || []);

    const SelectComponent = creatable ? CreatableSelect : ReactSelect;

    return (
      <SelectTag { ...rest } aria-busy={ String(loading || false) }>
        <SelectComponent
          isClearable={ clearable }
          isDisabled={ disabled }
          isLoading={ loading }
          isMulti={ multiple || isMulti }
          menuPlacement="auto"
          menuPortalTarget={ withPortal ? document.body : false }
          onChange={ this.onChange }
          options={ options }
          placeholder={ placeholder }
          valueComponent={ valueComponent }
          styles={ customStyles({ ...rest, COLORS: theme.COLORS || COLORS }) }
          value={ selectValue }
          autoFocus={ autoFocus }
          components={{ MultiValueRemove, ClearIndicator, ...components }}
          formatOptionLabel={ formatOptionLabel }
          inputValue={ inputValue }
          onInputChange={ onInputChange }
          menuIsOpen={ menuIsOpen }
          filterOption={ filterOption }
          getOptionValue={ getOptionValue }
          getOptionLabel={ getOptionLabel }
          isSearchable={ isSearchable }
        />
      </SelectTag>
    );
  }
}

Select = withTheme(Select);

export { Select };
