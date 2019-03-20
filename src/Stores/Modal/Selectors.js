/**
 * Selectors let us factorize logic that queries the state.
 *
 * Selectors can be used in sagas or components to avoid duplicating that logic.
 *
 * Writing selectors is optional as it is not always necessary, we provide a simple example below.
 */

export const getModal = state => state.modal.get('modal')

export const getLoadingAction = state => state.modal.get('isLoadingAction')
