import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts /AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isLoggedIn) {
        navigate("/");
      }
    },
    [isLoggedIn, navigate]
  );
  return children;
}

export default ProtectedRoute;
