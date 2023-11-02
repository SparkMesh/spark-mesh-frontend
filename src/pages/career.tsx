import React from 'react'
import { useRouter } from 'next/navigation';
type Props = {}

const career = (props: Props) => {
  const { push } = useRouter();
  React.useEffect(() => {

    window.open("https://www.linkedin.com/company/spark-mesh/jobs", "_blank")
    push('/')
  }, [])
 
}

export default career