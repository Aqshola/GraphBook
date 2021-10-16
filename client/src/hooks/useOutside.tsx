import { useEffect } from 'react'
interface Props {
  ref: any
  action?: () => void
}

export default function useOutsideAlerter({ ref, action }: Props) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (action) {
          action()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, action])
}
