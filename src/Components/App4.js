function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Navbar />
      <Switch>

        
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/signup"> 
         <Signup onSignUp={handleLogin}/>
        </Route>
        <Route exact path="/home"> 
         <Home />
        </Route>
        
        
       
      </Switch>
    </div>
  );
}




export default App;
