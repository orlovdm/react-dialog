export interface ModalProps {
  // opened: boolean,
  close: (result: boolean) => void
}

export interface DialogProps {
  opened: boolean,
  component: React.ReactNode,
}

const DialogContainer = ({ opened, component }: DialogProps) => {

  if (!opened) return null

  return (
    <>{component}</>
  )
}

export default DialogContainer