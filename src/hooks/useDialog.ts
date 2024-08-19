import { useCallback, useMemo, useState } from "react"

interface DialogState {
  component: React.ReactNode,
  resolve: (result: boolean) => void
}

export const useDialog = (initial = { opened: false, component: null as React.ReactNode }) => {

  const state = useMemo<DialogState>(() => ({ resolve: null as unknown as (result: boolean) => void, component: initial.component }), [])
  const [opened, setOpened] = useState(initial.opened)
  
  const onShow = useCallback((component: React.ReactNode) => {
    
    setOpened(true)
    state.component = component

    return new Promise((resolve) => {
      state.resolve = resolve
    })
  }, [])

  const onClose = (payload: boolean) => {
    setOpened(false)
    state.resolve(payload)
  }

  return {
    show: onShow,
    close: onClose,
    opened,
    component: state.component
  }
}