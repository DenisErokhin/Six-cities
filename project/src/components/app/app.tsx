import Main from '../../pages/main/main';

type AppRentProps = {
  rentCount: number;
}

function App({rentCount}: AppRentProps): JSX.Element {
  return <Main rentCount = {rentCount}/>;
}

export default App;
