declare module "@cobuildlab/boost" {
  import React, { PureComponent } from 'react';

  type TagProps = {
    activeClassName?: string;
    children?: React.ReactNode;
    className?: string;
    cols?: number | string;
    component?: string | React.ReactComponentElement;
    exact?: boolean;
    stretch?: boolean;
    for?: string;
    label?: string;
    name?: string;
    onChange?: (event?: React.SyntheticEvent) => void;
    onClick?: (event?: React.SyntheticEvent) => void;
    onDoubleClick?: (event?: React.SyntheticEvent) => void;
    onMouseDown?: (event?: React.SyntheticEvent) => void;
    onMouseEnter?: (event?: React.SyntheticEvent) => void;
    onMouseLeave?: (event?: React.SyntheticEvent) => void;
    onMouseMove?: (event?: React.SyntheticEvent) => void;
    onMouseOut?: (event?: React.SyntheticEvent) => void;
    onMouseOver?: (event?: React.SyntheticEvent) => void;
    onMouseUp?: (event?: React.SyntheticEvent) => void;
    onKeyUp?: (event?: React.SyntheticEvent) => void;
    onKeyDown?: (event?: React.SyntheticEvent) => void;
    onSubmit?: () => void;
    onScroll?: () => void;
    options?: Array<Record<string, unknown>>;
    placeholder?: string;
    rows?: number | string;
    src?: string;
    style?: unknown;
    to?: string;
    type?: string;
    value?: number | string | boolean;
    insideRef?: unknown;
    modifiers?: unknown;
  };

  export class Tag extends React.PureComponent<TagProps> {}

  export type PropSizes =
    | 'noSet'
    | 'none'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl';
  export type PropLayout = 'start' | 'end' | 'between' | 'around' | 'center';
  export type PropLayoutStretch = PropLayout | 'stretch';

  interface PaperProps extends TagProps {
    children?: React.ReactNode;
    /* Possible padding */
    padding?: PropSizes | 'xxl';
    /* When true then stetch container to the parent */
    stretch?: boolean;
    /* Modifier to regulate border radius */
    borderRadius?: 'top' | 'bottom' | 'all';
    /* Custom styles */
    style?: Record<string, unknown>;
  }

  export function Paper(props: PaperProps): React.ComponentElement<PaperProps>;

  interface FlexLayoutCommonProps extends TagProps {
    children: React.ReactNode;
    justifyContent?: PropLayoutStretch;
    alignContent?: PropLayout;
    alignItems?: PropLayoutStretch;
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    gap?: PropSizes;
    offsetX?: PropSizes;
    offsetY?: PropSizes;
    offsetTop?: PropSizes;
    offsetBottom?: PropSizes;
    offsetLeft?: PropSizes;
    offsetRight?: PropSizes;
    cursor?: 'pointer' | 'default' | 'inherit';
    stretch?: boolean;
    selected?: boolean;
    grow?: boolean;
    growChildren?: boolean;
    onClick?: ((event: MouseEvent) => void) | (() => void);
    tagName?: string;
    inline?: boolean;
  }

  interface FlexLayoutProps extends FlexLayoutCommonProps {
    direction?: 'row' | 'column';
  }

  export function FlexLayout(
    props: FlexLayoutProps,
  ): React.ComponentElement<FlexLayoutProps>;

  export function Row(
    props: FlexLayoutCommonProps,
  ): React.ComponentElement<FlexLayoutCommonProps>;

  export function Column(
    props: FlexLayoutCommonProps,
  ): React.ComponentElement<FlexLayoutCommonProps>;

  export interface TextProps extends TagProps {
    /* Text to display in the component */
    children?: React.ReactNode | string | number;
    /* Another way to set displayed text */
    text?: string | number;
    /* Possible text colors */
    color?: unknown;
    /* Disabled text state */
    disabled?: boolean;
    /* Set style to bold or other weights */
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    /* Text align */
    align?: 'left' | 'center' | 'right';
    /* When true then cut text with ellipsis */
    ellipsis?: boolean;
    /* Possible types of the css cursor property */
    cursor?: 'pointer' | 'default' | 'auto';
    /* Modern text kinds */
    kind?:
      | 'overline-2'
      | 'overline-1'
      | 'small-2'
      | 'small-1'
      | 'body'
      | 'subtitle';
  }

  export function Text(props: TextProps): React.ComponentElement<TextProps>;

  interface IconProps extends TagProps {
    /* Icon name */
    name?: string;
    /* Icon color */
    color?: unknown;
    /* Icon size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'stretch';
    /* Custom icon class */
    className?: string;
    /* Title attribute for the icon */
    title?: string;
    /* Possible types of the css cursor property */
    cursor?: 'pointer' | 'default' | 'auto';
    //* * allow pass props to an Icon */
    children?: (Glyph: unknown) => React.ReactNode;
  }

  export function Icon(props: IconProps): React.ComponentElement<IconProps>;

  interface CardPlateProps extends TagProps {
    children:
      | React.ReactNode
      | ((data: Record<string, unknown>) => React.ReactNode);
    paddingOuter?: PropSizes;
    style?: Record<string, unknown>;
    stretch?: boolean;
    borderRadius?: 'top' | 'bottom' | 'all';
  }

  interface CardHeaderProps extends TagProps {
    children: React.ReactNode;
    padding?: PropSizes;
  }

  export function CardHeader(
    props: CardHeaderProps,
  ): React.ComponentElement<CardHeaderProps>;

  interface CardBodyProps extends TagProps {
    children: React.ReactNode;
    padding?: PropSizes;
    scrollable?: boolean;
    stretch?: boolean;
  }

  export function CardBody(
    props: CardBodyProps,
  ): React.ComponentElement<CardBodyProps>;

  interface CardSectionProps extends TagProps {
    children: React.ReactNode;
    padding?: PropSizes;
    stretch?: boolean;
    hoverable?: boolean;
  }

  export function CardSection(
    props: CardSectionProps,
  ): React.ComponentElement<CardSectionProps>;

  interface CardFooterProps extends TagProps {
    children: React.ReactNode;
    padding?: PropSizes;
  }

  export function CardFooter(
    props: CardFooterProps,
  ): React.ComponentElement<CardFooterProps>;

  export function Card(
    props: CardPlateProps,
  ): React.ComponentElement<CardPlateProps>;

  Card.Header = CardHeader;
  Card.Body = CardBody;
  Card.Section = CardSection;
  Card.Footer = CardFooter;

  interface DividerProps extends TagProps {
    children?: React.ReactNode;
  }

  export function Divider(
    props: DividerProps,
  ): React.ComponentElement<DividerProps>;

  export interface GridLayoutProps extends TagProps {
    children?: React.ReactNode;
    /* When true then stretch to full width */
    stretch?: boolean;
    /* Possbile spaces between grid items */
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
    /* When true then set inline-grid */
    inline?: boolean;
    /* Possible paddings of the grid layout */
    padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
    /* Justify-content css rule */
    justifyContent?:
      | 'start'
      | 'end'
      | 'center'
      | 'stretch'
      | 'space-around'
      | 'space-between'
      | 'space-evenly';
    /* Align-content css rule */
    alignContent?:
      | 'start'
      | 'end'
      | 'center'
      | 'stretch'
      | 'space-around'
      | 'space-between'
      | 'space-evenly';
    /* Justify-items css rule */
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    /* Align-items css rule */
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    columns?: string;
  }

  function GridLayout(
    props: GridLayoutProps,
  ): React.ComponentElement<GridLayoutProps>;

  export interface GridBoxProps extends TagProps {
    area?: string;
    children?: React.ReactNode;
    /* Grid-box direction */
    direction?: 'column' | 'row';
    /* When true then set box scrollable */
    scrollable?: boolean;
    /* Align-self css rule */
    alignSelf?:
      | 'start'
      | 'end'
      | 'center'
      | 'stretch'
      | 'flex-end'
      | 'flex-start';
    /* Justify-self css rule */
    justifySelf?:
      | 'start'
      | 'end'
      | 'center'
      | 'stretch'
      | 'flex-end'
      | 'flex-start';
    /* Justify-content css rule */
    justifyContent?:
      | 'start'
      | 'end'
      | 'center'
      | 'stretch'
      | 'space-around'
      | 'space-between'
      | 'space-evenly'
      | 'flex-end'
      | 'flex-start';
    /* Justify-content css rule */
    alignItems?:
      | 'start'
      | 'end'
      | 'center'
      | 'stretch'
      | 'space-around'
      | 'space-between'
      | 'space-evenly'
      | 'flex-end'
      | 'flex-start';
    /* Align-content css rule */
    alignContent?:
      | 'start'
      | 'end'
      | 'center'
      | 'stretch'
      | 'space-around'
      | 'space-between'
      | 'space-evenly'
      | 'flex-end'
      | 'flex-start';
    /* Text-align css rule */
    textAlign?: 'left' | 'right' | 'center' | 'justify';
  }

  function BoxLayout(props: GridBoxProps): React.ComponentElement<GridBoxProps>;

  const Grid = { Layout: GridLayout, Box: BoxLayout };
  export { Grid };

  interface ModalProps extends TagProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: (data: unknown) => void;
    shouldCloseOnOverlayClick?: boolean;
    shouldCloseOnEscPress?: boolean;
    id?: string;
  }

  export class Modal extends React.PureComponent<ModalProps> {
    static openedModals: number;
  }

  interface TablePlateProps extends GridLayoutProps {
    children?: React.ReactNode;
    stretch?: boolean;
  }

  interface TableHeaderProps extends GridLayoutProps {
    children?: React.ReactNode;
    columnGap?: PropSizes;
  }

  interface TableBodyRowProps extends GridLayoutProps {
    children?: React.ReactNode;
    columnGap?: PropSizes;
    columns?: string;
  }

  interface TableFooterProps extends GridBoxProps {
    children?: React.ReactNode;
  }

  type TableBodyProps<T> = {
    children?: (field: T, index: number) => React.ReactNode;
    data?: T[];
    loading?: boolean;
    action?: React.ReactNode;
    onActionClick?: () => void;
    modifiers?: Record<string, unknown>;
    noData?: React.ReactNode;
  } & TagProps;

  interface TableHeaderCellProps extends Omit<FlexLayoutProps, 'children'> {
    children?: React.ReactNode;
    onSort?: (sort: 'ASC' | 'DESC') => void;
    enableSort?: boolean;
    order?: 'ASC' | 'DESC';
    cursor?: 'pointer' | 'default' | 'inherit';
    justifyContent?: PropLayoutStretch;
    alignItems?: PropLayout;
  }

  interface TableBodyCellProps extends Omit<FlexLayoutProps, 'children'> {
    children?: React.ReactNode;
    justifyContent?: PropLayoutStretch;
    alignItems?: PropLayout;
  }

  function TableHeader(
    props: TableHeaderProps,
  ): React.ComponentElement<TableHeaderProps>;

  function TableBody<T>(
    props: TableBodyProps<T>,
  ): React.ComponentElement<TableBodyProps<T>>;

  function TableBodyRow(
    props: TableBodyRowProps,
  ): React.ComponentElement<TableBodyRowProps>;

  function TableFooter(
    props: TableFooterProps,
  ): React.ComponentElement<TableFooterProps>;

  function TableHeaderCell(
    props: TableHeaderCellProps,
  ): React.ComponentElement<TableHeaderCellProps>;

  function TableBodyCell(
    props: TableBodyCellProps,
  ): React.ComponentElement<TableBodyCellProps>;

  function Table(
    props: TablePlateProps,
  ): React.ComponentElement<TablePlateProps>;

  Table.Header = TableHeader;
  Table.Body = TableBody;
  Table.BodyRow = TableBodyRow;
  Table.Footer = TableFooter;
  Table.HeaderCell = TableHeaderCell;
  Table.BodyCell = TableBodyCell;

  export interface ButtonProps extends TagProps {
    /* Callback to handle click */
    onClick?: () => unknown;
    /* Button content */
    children?: React.ReactNode;
    /* Then true when stretch to the parent width */
    stretch?: boolean;
    /* Then true when show loader */
    loading?: boolean;
    /* Then true when disable button */
    disabled?: boolean;
    /* Then button is squared */
    squared?: boolean;
    /* Then button is rounded */
    rounded?: boolean;
    /* Possible button types */
    type?: 'submit' | 'button' | 'reset';
    text?: string;
    /* Possible button colors */
    color?:
      | 'primary'
      | 'default'
      | 'neutral'
      | 'danger'
      | 'success'
      | 'warning';
    /* The type of button */
    variant?: 'outlined' | 'raised' | 'ghost' | 'link';
    /* Posible sizes */
    size?: 'sm' | 'md' | 'lg';
    /* Possible to reassign the button tag */
    tagName?: unknown;
    /* Enable autosize for icons */
    withIconAutosize?: boolean;
  }

  export function Button(
    props: ButtonProps,
  ): React.ComponentElement<ButtonProps>;

  type InputCommonProps = {
    /* Field placeholder */
    placeholder?: string;
    /* Html auto-complete representation */
    autoComplete?: string | boolean;
    /* Html auto-focus representation */
    autoFocus?: boolean;
    /* Disabled */
    disabled?: boolean;
    /* When true then stretch to the maximal width */
    stretch?: boolean;
    /* When true then don't show error indicator  */
    hideErrorIndicator?: boolean;
    /* Align of the input value */
    align?: 'center' | 'left' | 'right';
    /* Left icon componen */
    leftIcon?: React.ReactNode;
    /* Right icon componen */
    rightIcon?: React.ReactNode;
    /* Max symbols in the input value */
    maxLength?: number;
    /* Callback to set input ref */
    insideRef?: (field: typeof HTMLInputElement) => unknown;
    /* Kind of the input */
    kind?: 'bordered' | 'underline';
    /* Readonly */
    readOnly?: boolean;
    /* Clearable */
    clearable?: boolean;
    hideNumberArrows?: boolean;
  };

  interface InputProps extends InputCommonProps {
    /* Input name */
    name?: string;
    /* Input value */
    value?: string | number;
    /* Possible input types */
    type?: 'text' | 'number' | 'password' | 'email' | 'url';
    /* Then true when show error styles */
    hasError?: boolean;
    /* Text of the error */
    errorText?: string;
    /* Mask string in the react-input-mask format */
    mask?: string;
    /* Set custom input width in rem */
    width?: number;
    /* Callback to change input value */
    onChange?: (
      value?: string | number,
      event?: React.SyntheticEvent<HTMLInputElement>,
    ) => void;
    onFocus?: (field: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur?: (field: React.SyntheticEvent<HTMLInputElement>) => void;
    /* Callback which called on clear */
    onClear?: () => void;
    step?: string | number;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    style: Record<string, unknown>;
  }

  export class Input extends React.PureComponent<InputProps> {}

  interface LinkProps extends TagProps {
    children?: React.ReactNode;
    color?: string;
    tagName?: unknown;
    text?: string;
    underline?: boolean;
  }

  export function Link(props: LinkProps): React.ComponentElement<LinkProps>;

  interface ParagraphProps extends TagProps {
    children?: React.ReactNode | string | number;
    text?: string | number;
    color?: unknown;
    align?: 'left' | 'center' | 'right';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    verticalAlign?: string;
  }

  export function Paragraph(
    props: ParagraphProps,
  ): React.ComponentElement<ParagraphProps>;

  export interface AvatarProps extends TagProps {
    src?: string;
    firstName?: string;
    lastName?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    onPick?: () => void;
    pickLabel?: string;
  }

  export function Avatar(
    props: AvatarProps,
  ): React.ComponentElement<AvatarProps>;

  interface DialogProps extends Omit<ModalProps, 'children'> {
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: (data: unknown) => void;
    onOpen?: (data: unknown) => void;
    shouldCloseOnOverlayClick?: boolean;
    shouldCloseOnEscPress?: boolean;
    padding?: PropSizes;
    size?: PropSizes;
    tagName?: string;
    stretch?: boolean;
  }

  interface DialogBodyProps extends Omit<CardBodyProps, 'children'> {
    children?: React.ReactNode;
    padding?: PropSizes;
    scrollable?: boolean;
  }

  export function DialogBody(
    props: DialogBodyProps,
  ): React.ComponentElement<DialogBodyProps>;

  interface DialogHeaderProps extends Omit<CardHeaderProps, 'children'> {
    children?: React.ReactNode;
    title: string;
    padding?: PropSizes;
    onClose?: () => void;
  }

  export function DialogHeader(
    props: DialogHeaderProps,
  ): React.ComponentElement<DialogHeaderProps>;

  interface DialogFooterProps extends Omit<CardFooterProps, 'children'> {
    children?: React.ReactNode;
    padding?: PropSizes;
  }

  export function DialogFooter(
    props: DialogFooterProps,
  ): React.ComponentElement<DialogFooterProps>;

  export function Dialog(
    props: DialogProps,
  ): React.ComponentElement<DialogProps>;

  Dialog.Body = DialogBody;
  Dialog.Header = DialogHeader;
  Dialog.Footer = DialogFooter;

  interface NavigationProps extends TagProps {
    children?: React.ReactNode;
    expandedWidth?: string;
    collapsedWidth: string;
    color?: unknown;
    expanded?: boolean;
  }

  type NavigationState = {
    expandedWidth?: string;
    expanded: boolean;
  };

  export function Navigation(
    props: NavigationProps,
  ): React.ComponentElement<NavigationProps, NavigationState>;

  type RenderProps = {
    isOpen: boolean;
    openTooltip: () => void;
    closeTooltip: () => void;
    toggleTooltip: () => void;
  };

  interface TooltipProps extends TagProps {
    children: React.ReactNode | ((props: RenderProps) => React.ReactNode);
    /* Default content position relative target */
    placement?: 'top' | 'left' | 'bottom' | 'right';
    /* Custom tag of the tooltip target */
    tagName?: string;
    /* Custom style of the cursor */
    cursor?: string;
    /* Tooltip message */
    message: React.ReactNode;
    /* Default state of the opening */
    defaultOpen?: boolean;
    /* Possible tooltip trigger */
    trigger?: 'hover' | 'click';
    /* Replace tooltip message to the dom root by the portal */
    withPortal?: boolean;
    /* Whether events (resize, scroll) are initially enabled */
    eventsEnabled?: boolean;
    /* Popper modifiers */
    modifiers?: Record<string, unknown>;
  }

  type TooltipState = {
    isOpen: boolean;
  };

  export class Tooltip extends React.PureComponent<
    TooltipProps,
    TooltipState
  > {}

  type DropdownControlledProps = {
    /* Open state of the dropdown */
    isOpen: boolean;
    /* When true then  plate */
    stretch?: boolean;
    /* Callback to close dropdown */
    onCloseDropdown?: () => void;
    /* Callback to open dropdown */
    onOpenDropdown?: () => void;
    children: React.ReactNode;
    css?: Record<string, unknown>;
  };

  type DropdownUncontroledProps = {
    /* Default opened state for the uncontorlled mode */
    defaultOpen?: boolean;
    /* When true then  plate */
    stretch?: boolean;
    children: React.ReactNode;
    css?: Record<string, unknown>;
  };

  interface DropdownHeadProps extends TagProps {
    children:
      | React.ReactNode
      | ((props: {
          toggleDropdown: () => void;
          closeDropdown?: () => void;
          openDropdown?: () => void;
          isOpen: boolean;
        }) => React.ReactNode);
    /* When exists then stretch drodown head */
    stretch?: boolean;
    /* Prevent propagation on click */
    stopClickPropagation?: boolean;
    /* OnClick callback. When exists then disalbe auto toogle dropdown on click */
    onClick?: (event: React.MouseEvent) => void;
    /* Prevent toggle action */
    disabled?: boolean;
  }

  interface DropdownBodyProps extends TagProps {
    /* Takes either react dom element or function */
    children:
      | React.ReactNode
      | ((props: {
          toggleDropdown: () => void;
          closeDropdown?: () => void;
          openDropdown?: () => void;
          isOpen: boolean;
        }) => React.ReactNode);

    /* Default content position relative target */
    placement?:
      | 'top'
      | 'left'
      | 'bottom'
      | 'right'
      | 'auto'
      | 'bottom-end'
      | 'bottom-start'
      | 'top-end'
      | 'top-start';
    /* Default content align relative target */
    pin?: 'left' | 'right';
    /* Set body offset relative target */
    offset?: PropSizes;
    /* Use fixed position instead of absolute */
    positionFixed?: boolean;
    /* Manual set width */
    width?: number;
    /* Popper js option https://popper.js.org/popper-documentation.html#modifiers..preventOverflow */
    preventOverflow?: boolean;
    /* Prevent unmount dropdown content on close */
    forceRender?: boolean;
    /* Replace dropdown body to the dom root by the portal */
    withPortal?: boolean;
    /* When true then close dropdown on outside clicking */
    closeOnClickOutside?: boolean;

    /*  */
    modifiers?: Record<string, unknown>;
    /* Options for background color */
    background?: 'white' | 'dark' | 'none';
    /* Options for body padding */
    padding?: PropSizes;
    /* Stretch drodpown body width to the target width */
    stretch?: boolean;
    role?: string;
  }

  export function DropdownHead(
    props: DropdownHeadProps,
  ): React.ComponentElement<DropdownHeadProps>;

  export function DropdownBody(
    props: DropdownBodyProps,
  ): React.ComponentElement<DropdownBodyProps>;

  export function Dropdown(
    props: DropdownControlledProps | DropdownUncontroledProps,
  ): React.ComponentElement<DropdownControlledProps | DropdownUncontroledProps>;

  Dropdown.Head = DropdownHead;
  Dropdown.Body = DropdownBody;

  type Theme = {
    COLORS: unknown;
    SIZES: unknown;
    Z_INDEX: unknown;
    FONTS: unknown;
    components: {
      [key: string]: unknown;
    };
  };

  type BoostProviderProps = {
    theme?: Theme;
    icons?: { [name: string]: React.ReactNode };
    children: React.ReactNode;
  };

  export function BoostProvider(
    props: BoostProviderProps,
  ): React.ComponentElement<BoostProviderProps>;

  export function createTheme(extendTheme: unknown): Theme;

  type LoaderProps = {
    size?: 'sm' | 'md' | 'lg';
    stretch?: boolean;
    color?: unknown;
  } & TagProps;

  export function Loader(
    props: LoaderProps,
  ): React.ComponentElement<LoaderProps>;

  type AsyncContentProps = {
    loading: boolean;
    children: React.ReactNode;
  } & LoaderProps;

  export function AsyncContent(
    props: AsyncContentProps,
  ): React.ComponentElement<AsyncContentProps>;

  type AvatarsProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    users: Array<{
      firstName: string;
      lastName: string;
      avatarUrl: string;
    }>;
  } & TagProps;

  export function Avatars(
    props: AvatarsProps,
  ): React.ComponentElement<AvatarsProps>;

  type BreadcrumbsRoutes = Array<{
    path: string;
    component?: React.ComponentElement;
    label?: string;
    matchOptions?: Record<string, unknown>;
  }>;

  type BreadcrumbsMatchPath = (
    path: string,
    options: Record<string, unknown>,
  ) => boolean;

  type BreadcrumbsProps = {
    /* the location pathname */
    pathname: string;
    /* list of breadcrumbs routes */
    routes: BreadcrumbsRoutes;
    /* custom match path function */
    matchPath?: BreadcrumbsMatchPath;
    /* custom breadcrum's item tag */
    itemTagName?: string | React.ComponentElement;
  } & TagProps;

  export function Breadcrumbs(
    props: BreadcrumbsProps,
  ): React.ComponentElement<BreadcrumbsProps>;

  type ButtonGroupProps = {
    children: React.ReactNode;
    stretch?: boolean;
  } & TagProps;

  export function ButtonGroup(
    props: ButtonGroupProps,
  ): React.ComponentElement<ButtonGroupProps>;

  type CheckboxProps = {
    /* Checked state */
    checked: boolean | string;
    /* Indeterminate state, useful for sub-options */
    indeterminate: boolean;
    /* Checkbox name */
    name?: string;
    /* Checkbox label */
    label?: string;
    /* When error then show error styles */
    hasError?: boolean;
    /* Show disabled styles  */
    disabled?: boolean;
    /* No wrap text  */
    nowrap?: boolean;
  } & TagProps;

  export function Checkbox(
    props: CheckboxProps,
  ): React.ComponentElement<CheckboxProps>;

  export type MetaType = {
    active?: boolean;
    data?: Record<string, unknown>;
    dirty?: boolean;
    dirtySinceLastSubmit?: boolean;
    error?: unknown;
    initial?: unknown;
    invalid?: boolean;
    pristine?: boolean;
    submitError?: unknown;
    submitFailed?: boolean;
    submitSucceeded?: boolean;
    touched?: boolean;
    valid?: boolean;
    visited?: boolean;
  };

  type InputType = {
    name?: string;
    onFocus?: (field: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur?: (field: React.SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (
      value?: string | number | null,
      event?: SyntheticInputEvent<HTMLInputElement>,
    ) => void;
    value?: unknown;
    checked?: boolean;
    type?: string;
  };

  type FormFieldProps = {
    children?: React.ReactNode;
    label?: string;
    note?: string;
    stretch?: boolean;
    hideErrorLabel?: boolean;
    direction?: 'row' | 'column';
    meta?: MetaType;
  } & TagProps;

  export function FormField(
    props: FormFieldProps,
  ): React.ComponentElement<FormFieldProps>;

  type CheckboxFieldProps = {
    /* Field label */
    label?: string;
    /* Form input object */
    input: InputType;
    /* Form meta object */
    meta?: MetaType;
    /* Color of the check */
    color?: 'primary' | 'secondary';
    /* Show disabled styles  */
    disabled?: boolean;
    /* No wrap text  */
    nowrap?: boolean;
    /* When true then stretch to the maximal width */
    stretch?: boolean;
  } & FormFieldProps;

  export function CheckboxField(
    props: CheckboxFieldProps,
  ): React.ComponentElement<CheckboxFieldProps>;

  type CodeProps = {
    children: string | React.ReactNode;
    height?: number;
    withCopyButton?: boolean;
  } & TagProps;

  export function Code(props: CodeProps): React.ComponentElement<CodeProps>;

  type DateInputProps = {
    onChange?: (value: string) => void;
    onBlur?: (event?: React.SyntheticEvent) => void;
    value?: string;
    withTime?: boolean;
    withPortal?: boolean;
    stretch?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    isMonthPicker?: boolean;
    autoFocus?: boolean;
    placeholder?: string;
  } & TagProps;

  export function DateInput(
    props: DateInputProps,
  ): React.ComponentElement<DateInputProps>;

  type FormSectionProps = {
    children: React.ReactNode;
  } & FlexLayoutProps;

  export function FormSection(
    props: FormSectionProps,
  ): React.ComponentElement<FormSectionProps>;

  type DateInputFieldProps = {
    /* Field label */
    label?: string;
    /* Form input object */
    input?: Record<string, unknown>;
    /* Form meta object */
    meta?: Record<string, unknown>;
  } & FormFieldProps;

  export function DateInputField(
    props: DateInputFieldProps,
  ): React.ComponentElement<DateInputFieldProps>;

  type FormSectionTitleProps = {
    children?: React.ReactNode;
    text?: string;
  } & TagProps;

  export function FormSectionTitle(
    props: FormSectionTitleProps,
  ): React.ComponentElement<FormSectionTitleProps>;

  type FormSectionBodyProps = {
    alignItems: PropLayoutStretch;
    children: React.ReactNode;
  } & TagProps;

  export function FormSectionBody(
    props: FormSectionBodyProps,
  ): React.ComponentElement<FormSectionBodyProps>;

  type FormErrorProps = {
    /* Form error */
    error?: string;
    /* Form error */
    children?: React.ReactNode;
  } & TagProps;

  export function FormError(
    props: FormErrorProps,
  ): React.ComponentElement<FormErrorProps>;

  type FormPlateProps = {
    /* When true then stretch form by the parent */
    stretch?: boolean;
    /* Form content */
    children?: React.ReactNode;
    /* Component to use instead of form tag */
    component?: React.ReactNode;
    /* Custom class name */
    className?: string;
  } & FlexLayoutProps;

  export function Form(
    props: FormPlateProps,
  ): React.ComponentElement<FormPlateProps>;

  Form.Field = FormField;
  Form.Section = FormSection;
  Form.SectionBody = FormSectionBody;
  Form.SectionTitle = FormSectionTitle;
  Form.Error = FormError;

  type HeadingProps = {
    children?: React.ReactNode;
    kind?: 'primary' | 'secondary' | 'disabled' | 'white';
    text?: string;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    ellipsis?: boolean;
  } & TagProps;

  export function Heading(
    props: HeadingProps,
  ): React.ComponentElement<HeadingProps>;

  type IndicatorProps = {
    status: 'enabled' | 'disabled';
    children: React.ReactNode;
  } & TagProps;

  export function Indicator(
    props: IndicatorProps,
  ): React.ComponentElement<IndicatorProps>;

  export type InputFieldProps = {
    /* Field label */
    label?: string;
    /* When true then stretch to the maximal width */
    stretch?: boolean;
    /* Direction of the input with label */
    direction?: 'row' | 'column';
    /* Set custom input width */
    width?: number;
    /* Max symbols in the input value */
    maxLength?: number;
    /* When true then don't show error label */
    hideErrorLabel?: boolean;
    /* When true then don't show error indicator */
    hideErrorIndicator?: boolean;
    /* Align of the input value */
    align?: 'center' | 'left' | 'right';
    /* Input placeholder */
    placeholder?: string;
    /* Form input object */
    input?: InputType;
    /* Form meta object */
    meta?: MetaType;
    /* Callback to set input ref */
    insideRef?: (element: unknown) => void;
    /* Readonly */
    readOnly?: boolean;
    /* Clearable */
    clearable?: boolean;
    /* Html auto-complete representation */
    autoComplete?: boolean;
    /* Disabled */
    disabled?: boolean;
    /* Callback which called on clear */
    onClear?: () => void;
    /* Html auto-focus representation */
    autoFocus?: boolean;
    step?: string | number;
    min?: string | number;
    max?: string | number;
    mask?: string;
  } & FormFieldProps;

  export function InputField(
    props: InputFieldProps,
  ): React.ComponentElement<InputFieldProps>;

  export type LabelProps = {
    kind?: 'primary' | 'secondary' | 'disabled';
    for?: string;
    children?: string;
    text?: string;
  } & TagProps;

  export function Label(props: LabelProps): React.ComponentElement<LabelProps>;

  type LogsProps = {
    messages: React.ReactNode[];
    stretch?: boolean;
  } & TagProps;

  export function Logs(props: LogsProps): React.ComponentElement<LogsProps>;

  type MenuProps = {
    children?: React.ReactNode;
  } & TagProps;

  export function Menu(props: MenuProps): React.ComponentElement<MenuProps>;

  type MenuItemProps = {
    children?: React.ReactNode;
    disabled?: boolean;
  } & TagProps;

  function MenuItem(
    props: MenuItemProps,
  ): React.ComponentElement<MenuItemProps>;

  Menu.Item = MenuItem;

  export function NoData(props: unknown): React.ComponentElement;

  type PaginationProps = {
    page?: number;
    pageSize?: number;
    defaultPage: number;
    defaultPageSize: number;
    total: number;
    showSizeChanger?: boolean;
    pageSizeOptions?: number[];
    onChange?: (page: number, pageSize: number) => unknown;
  };

  export function Pagination(
    props: PaginationProps,
  ): React.ComponentElement<PaginationProps>;

  type ProgressProps = {
    value: number;
    label?: string;
    valueText?: React.ReactNode;
    valueWidth?: number | string;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    backgroundColor?: string;
    showSeparator?: boolean;
  } & TagProps;

  export function Progress(
    props: ProgressProps,
  ): React.ComponentElement<ProgressProps>;

  type EqualsFuncArgument = {
    selectedValue?: string | number;
    value: string | number;
  };

  type RadioClonedProps = {
    /* Private cloned props */
    name?: string;
    /* Private cloned props */
    onChange?: (value: string | number, event: React.SyntheticEvent) => void;
    /* Private cloned props */
    selectedValue?: string | number;
    /* Then true when show error styles */
    hasError?: boolean;
  };

  type RadioItemProps = {
    /* Text of the label */
    label?: string;
    /* Radio value */
    value: string | number;
    /* Possible colors */
    color?: 'primary' | 'secondary';
    /* When true then disable radio */
    disabled?: boolean;
    /* Custom function to check the equals */
    equalsFunc?: (arg: EqualsFuncArgument) => boolean;
  } & TagProps;

  export function RadioItem(
    props: RadioItemProps & RadioClonedProps,
  ): React.ComponentElement<RadioItemProps & RadioClonedProps>;

  type RadioButtonProps = {
    /* Text of the label */
    label?: string;
    /* Radio value */
    value: string | number;
    /* When true then disable radio */
    disabled?: boolean;
    /* Custom function to check the equals */
    equalsFunc?: (arg: EqualsFuncArgument) => boolean;
  } & TagProps;

  export function RadioButton(
    props: RadioButtonProps & RadioClonedProps,
  ): React.ComponentElement<RadioButtonProps & RadioClonedProps>;

  type RadioProps = {
    children?: React.ReactNode;
    /* Optional name of the group */
    name?: string;
    /* Selected value */
    value?: string | number;
    /* Offset between radio items */
    gap?: PropSizes;
    /* Direction of the radio items */
    direction?: 'row' | 'column';
    /* Callback to change the radio state */
    onChange?: (value: string | number, event: React.SyntheticEvent) => void;
    /* Then true when show error styles */
    hasError?: boolean;
    /* Options to define radio items */
    options?: Array<{ value: unknown; label: string; disabled?: boolean }>;
    /* Disabled */
    disabled?: boolean;
    /* Stretch */
    stretch?: boolean;
  } & FlexLayoutProps;

  export function RadioGroup(
    props: RadioProps,
  ): React.ComponentElement<RadioProps>;

  const Radio = {
    Button: RadioButton,
    Item: RadioItem,
    Group: RadioGroup,
  };
  export { Radio };

  type RadioGroupFieldProps = {
    /* Grop.Item components */
    children?: React.ReactNode;
    /* When true then don't show error label */
    hideErrorLabel?: boolean;
    /* Form input object */
    input: InputType;
    /* Form meta object */
    meta?: MetaType;
    /* Offset between radio items */
    gap?: PropSizes;
    /* Direction of the radio items */
    direction?: 'row' | 'column';
    /* Options to define radio items */
    options?: Array<{ value: unknown; label: string; disabled?: boolean }>;
    /* Disabled */
    disabled?: boolean;
    /* Stretch */
    stretch?: boolean;
  } & FormFieldProps;

  export function RadioGroupField(
    props: RadioGroupFieldProps,
  ): React.ComponentElement<RadioGroupFieldProps>;

  type ScrollableProps = {
    children: React.ReactNode;
  } & TagProps;

  export function Scrollable(
    props: ScrollableProps,
  ): React.ComponentElement<ScrollableProps>;

  type SecondaryNavigationProps = {
    children: React.ReactNode;
  } & TagProps;

  export function SecondaryNavigation(
    props: SecondaryNavigationProps,
  ): React.ComponentElement<SecondaryNavigationProps>;

  type SecondaryNavigationItemProps = {
    label?: string;
    active?: boolean;
    actions?: Record<string, unknown>[] | ((...args: unknown) => void);
  } & TagProps;

  function SecondaryNavigationItem(
    props: SecondaryNavigationItemProps,
  ): React.ComponentElement<SecondaryNavigationItemProps>;

  SecondaryNavigation.Item = SecondaryNavigationItem;

  type SelectProps = {
    options: Array<{
      label: unknown;
      value: string;
      options?: Array<Record<string, unknown>>;
    }>;
    onChange?: (value: string, event?: UIEvent) => void;
    inputValue?: string;
    onInputChange?: (value: string, event?: unknown) => void;
    placeholder?: string;
    value?: unknown | unknown[];
    loading?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    clearable?: boolean;
    hasError?: boolean;
    withPortal?: boolean;
    menuIsOpen?: boolean;
    autoFocus?: boolean;
    zIndex?: string | number;
    valueComponent?: React.ReactNode;
    components?: unknown;
    className?: string;
    formatOptionLabel?: (...arg: unknown) => void;
    filterOption?: (...arg: unknown) => void;
    getOptionValue?: (...arg: unknown) => void;
    getOptionLabel?: (...arg: unknown) => void;
    /* When stretch is true, width is 100% */
    stretch?: boolean;
    isSearchable?: boolean;
    css?: unknown;
  } & TagProps;

  export function Select(
    props: SelectProps,
  ): React.ComponentElement<SelectProps>;

  type SelectFieldProps = {
    /* Array of select options */
    options: Array<Record<string, unknown>>;
    /* Placeholder */
    placeholder?: string;
    /* Field label */
    label?: string;
    /* When true then stretch to the maximal width */
    stretch?: boolean;
    /* Form input object */
    input?: InputType;
    /* Form meta object */
    meta?: MetaType;
    /* Custom value component */
    valueComponent?: React.ReactNode;
    /* Controlled search value */
    inputValue?: string;
    /* Callback to control search value */
    onInputChange?: (value: string, event?: unknown) => void;
  } & SelectProps;

  export function SelectField(
    props: SelectFieldProps,
  ): React.ComponentElement<SelectFieldProps>;

  type SwitchProps = {
    label?: string;
    name?: string;
    value: boolean;
    onChange?: (checked: boolean, event: unknown) => void;
    inverted?: boolean;
  } & TagProps;

  export function Switch(
    props: SwitchProps,
  ): React.ComponentElement<SwitchProps>;

  type SwitchFieldProps = {
    label?: string;
    input: InputType;
    meta?: MetaType;
  } & FormFieldProps;

  export function SwitchField(
    props: SwitchFieldProps,
  ): React.ComponentElement<SwitchFieldProps>;

  type TabProps = {
    children: React.ReactNode;
    className?: string;
  } & TagProps;

  export function Tab(props: TabProps): React.ComponentElement<TabProps>;

  type TabsProps = {
    children: React.ReactNode;
    /* Callback when a tab is selected */
    onSelect?: (tabId: string) => void;
    /* TabId of the currently displayed tab */
    selectedTabId: string;
  };

  type WithStateTabsProps = {
    children: React.ReactNode;
    /* TabId of the default selected tab */
    defaultSelectedTabId: string;
  };

  export function Tabs(
    props: WithStateTabsProps | TabsProps,
  ): React.ComponentElement<WithStateTabsProps | TabsProps>;

  type TabPanelProps = {
    children: React.ReactNode;
    /* Id of Tab element */
    tabId: string;
    /* Don't unmount then tab is hidden */
    forceRender?: boolean;
  } & TagProps;

  export function TabPanel(
    props: TabPanelProps,
  ): React.ComponentElement<TabPanelProps>;

  type TabTitleProps = {
    children:
      | React.ReactNode
      | (({
          selected,
          disabled,
        }: {
          selected: boolean;
          disabled: boolean;
        }) => React.ReactNode);
    disabled?: boolean;
    forceRender?: boolean;
    tabId: string;
  } & TagProps;

  export function TabTitle(
    props: TabTitleProps,
  ): React.ComponentElement<TabTitleProps>;

  Tabs.Title = TabTitle;
  Tabs.Panel = TabPanel;

  type TextAreaProps = {
    cols?: number;
    name?: string;
    onChange?: (value: string, event?: unknown) => void;
    placeholder?: string;
    rows?: number;
    value?: string;
    stretch?: boolean;
    hasError?: boolean;
  } & TagProps;

  export function TextArea(
    props: TextAreaProps,
  ): React.ComponentElement<TextAreaProps>;

  type TextAreaFieldProps = {
    /* Number of textarea columns */
    cols?: number;
    /* Number of textarea rows */
    rows?: number;
    /* Placeholder */
    placeholder?: string;
    /* Field label */
    label?: string;
    /* When true then stretch to the maximal width */
    stretch?: boolean;
    /* Form input object */
    input: Record<string, unknown>;
    /* Form meta object */
    meta?: Record<string, unknown>;
  } & TextAreaProps;

  export function TextAreaField(
    props: TextAreaFieldProps,
  ): React.ComponentElement<TextAreaFieldProps>;

  type TopBarProps = {
    isOpen?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    color: string;
  } & TagProps;

  export function TopBar(
    props: TopBarProps,
  ): React.ComponentElement<TopBarProps>;

  type TreeData = {
    label: string;
    value: string;
    checked?: boolean;
    children: Array<TreeData>;
  };

  type TreeNode = {
    label: string;
    value: string;
    checked?: boolean;
    _id?: string;
  };

  type ToggledNode = {
    label: string;
    value: string;
    expanded: boolean;
    _id: string;
  };

  type TreeSelectProps = {
    options: TreeData | TreeData[];
    value: string[];
    onChange: (currentNode: TreeNode, selectedNodes: TreeNode[]) => void;
    onNodeToggle?: (node: ToggledNode) => void;
    stretch: boolean;
    placeholder?: string;
  };

  export function TreeSelect(
    props: TreeSelectProps,
  ): React.ComponentElement<TreeSelectProps>;

  type TreeSelectFieldProps = {
    /* Array of select options option */
    options: Record<string, unknown> | Record<string, unknown>[];
    /* Placeholder */
    placeholder?: string;
    /* Field label */
    label?: string;
    /* When true then stretch to the maximal width */
    stretch?: boolean;
    /* Form input object */
    input: InputType;
    /* Form meta object */
    meta?: MetaType;
  } & TreeSelectProps;

  export function TreeSelectField(
    props: TreeSelectFieldProps,
  ): React.ComponentElement<TreeSelectFieldProps>;

  /* TABLE TYPES */

  function TableHeader(props: TableHeaderProps): React.FC<TableHeaderProps>;

  type TableBodyProps<T> = {
    children?: (T, index: number) => React.ReactNode;
    data?: T[];
    loading?: boolean;
    action?: React$Node;
    onActionClick?: () => void;
    modifiers?: Record<string, unknown>;
    noData?: React$Node;
  };

  class TableBody extends PureComponent<TableBodyProps<*>> {}

  type TableBodyRowProps = {
    children?: React.ReactNode;
    columnGap?: PropSizes;
  };

  function TableBodyRow(
    props: TableBodyRowProps,
  ): React.ComponentElement<TableBodyRowProps>;

  type TableFooterProps = {
    children?: React$Node;
  };

  function TableFooter(
    props: TableFooterProps,
  ): React.ComponentElement<TableFooterProps>;

  type TableHeaderCellProps = {
    children?: React.ReactNode;
    onSort?: (order: 'ASC' | 'DESC') => void;
    enableSort?: boolean;
    order?: 'ASC' | 'DESC';
    cursor?: 'pointer' | 'default' | 'inherit';
    justifyContent?: PropLayoutStretch;
    alignItems?: PropLayout;
  };

  class TableHeaderCell extends PureComponent<TableHeaderCellProps> {}

  type TableBodyCellProps = {
    children?: React.ReactNode;
    justifyContent?: PropLayoutStretch;
    alignItems?: PropLayout;
  };

  function TableBodyCell(
    props: TableBodyCellProps,
  ): React.ComponentElement<TableBodyCellProps>;

  type TablePlateProps = {
    children?: React.ReactNode;
    stretch?: boolean;
    rows?: string;
  };

  function Table(
    props: TablePlateProps,
  ): React.ComponentElement<TablePlateProps>;

  Table.Header = TableHeader;
  Table.Body = TableBody.caller;
  Table.BodyRow = TableBodyRow;
  Table.Footer = TableFooter;
  Table.HeaderCell = TableHeaderCell.caller;
  Table.BodyCell = TableBodyCell;

  export { Table };
}
