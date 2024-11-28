import _get from "lodash/get";
import { useContext } from 'react';
import { ModalContext } from './ModalContext';
function useModal(id) {
  var dialogContext = useContext(ModalContext);
  var args = _get(dialogContext, ['state', id, 'args'], {});
  var isOpen = _get(dialogContext, ['state', id, 'isOpen'], false);
  return {
    openModal: dialogContext.openModal,
    closeModal: dialogContext.closeModal,
    args: args,
    isOpen: isOpen
  };
}
export { useModal };