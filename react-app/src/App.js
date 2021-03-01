import logo from './logo.svg';
import './App.css';
import { Footer } from './footer';
import Header from './header';
import StatefulApp from './components/props_states/StatefulApp';
import TextInput from './components/props_states/TextInput';
import ChildParentInvokation from './components/props_states/intercomp/ChildParentInvokation';
import RefsDemo from './components/props_states/intercomp/RefsDemo';
import Button from './components/hooks/Hook2';
import CompLifecycle from './components/CompLifecycle';
import DataLoader from './components/hooks/DataLoader';
import Hook3 from './components/hooks/Hook3';

function App() {
  return (
    <div>
        <h1 className="bg-warning text-center">Welcome to React App !!!</h1>
        <Header company="Wells Fargo pvt. Ltd"></Header>
        
        {/* <TextInput></TextInput>
        //<StatefulApp></StatefulApp><ChildParentInvokation></ChildParentInvokation> */}
       {/*  <RefsDemo></RefsDemo>
        <Button></Button> */}
        {/* <CompLifecycle></CompLifecycle> */}
        {/* <DataLoader></DataLoader> */}
        <Hook3></Hook3>
        <Footer></Footer>
    </div>
  );
}

export default App;
