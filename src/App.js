//import some things from "react-router-dom"
// import all components
// figure out how to get the navBar to display on everypage - where do we put it?

function App() {
  return (
    <div>
      <someThing />
      <someThing>
        <someThing exact path="/" element={<someComponent />} />
        {/* create two more of these components with different paths and element attributes which correspond to the remaining components */}
      </someThing>
    </div>
  );
}

export default App;

// BONUS CHALLENGE: This App looks TERRIBLE!!! Make it look awesome with your amazing CSS skills and post a screen for us all. 
// if you want to -- change the content in the components as it is very generic - make it your own!
