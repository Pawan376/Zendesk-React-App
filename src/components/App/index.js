import React from 'react';
import './style.scss';
import zafClient from '../../zafClient';

const App = () => {
  const [requester, setRequester] = React.useState(null)

  React.useEffect(async () => {
    zafClient.invoke('resize', { height: '200px' })

    const data = await zafClient.get('ticket.requester')
    const requester = data['ticket.requester']
    setRequester(requester)
  }, [])

  return (
    <div className="App">
      <p className="Requester-name">Requesters name is {requester ? requester.name : ''}.</p>
    </div>
  )
}

export default App;
