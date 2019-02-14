import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const FRIENDS = [
  {
    id: 'serval',
    nameJa: 'サーバル',
    nameEn: 'Serval Cat',
    family: 'ネコ目ネコ科ネコ属'
  },
  {
    id: 'raccoon',
    nameJa: 'アライグマ',
    nameEn: 'Common raccoon',
    family: 'ネコ目アライグマ科アライグマ属'
  },
  {
    id: 'fennec',
    nameJa: 'フェネック',
    nameEn: 'Fennec',
    family: 'ネコ目イヌ科キツネ属'
  }
];

const friendById = id => FRIENDS.find(friend => friend.id === id);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to Home.</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
);

const FriendList = () => (
  <div>
    {FRIENDS.map(friend => (
      <li key={friend.id}>
        <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
      </li>
    ))}
  </div>
);

const Friend = ({ match }) => {
  const { id } = match.params;
  const friend = friendById(id);
  const backLink = <p><Link to='/friends'>back</Link></p>;
  
  if (!friend) {
    return (
      <div>
        <p>Friends with id '{id}' does not exist.</p>
        {backLink}
      </div>
    );
  }
  return (
    <div>
      <div style={{ border: '1px gray solid', display: 'inline-block', padding: 10 }}>
        <p>{friend.family}</p>
        <h1>{friend.nameJa}</h1>
        <p>{friend.nameEn}</p>
      </div>
      {backLink}
    </div>
  );
}

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <Route exact path='/friends' component={FriendList} />
    <Route path='/friends/:id' component={Friend} ></Route>
  </div>
);



const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/friends">Friends</Link></li>
      </ul>
      <hr/>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </React.Fragment>
  </BrowserRouter>
);


export default App;