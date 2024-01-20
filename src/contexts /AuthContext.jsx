import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const FAKE_USER = {
  name: "Prakrit",
  email: "prakrit@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  user: null,
  isLoggedIn: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: FAKE_USER, isLoggedIn: true };
    case "logout":
      return { ...state, user: null, isLoggedIn: false };
    default:
      throw new Error("Unknown Action..");
  }
}

function AuthProvider({ children }) {
  const [{ user, isLoggedIn }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: { email, password } });
    } else {
      alert("Invalid Credentials");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Context not defined for this component...");
  }
  return context;
}

export { AuthProvider, useAuth };
