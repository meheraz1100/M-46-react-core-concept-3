import "./App.css";
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import Simpleform from './components/SimpleForm/Simpleform'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {
  const handleSignUpSubmit = (data) => {
    console.log('Sign up data', data);
  };

  const handleUpdateProfile = (data) => {
    console.log('Update profile data', data);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={"Sign Up"}
        submitBtnText="Submit"
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2 className="text-2xl">Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2 className="text-2xl">Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
