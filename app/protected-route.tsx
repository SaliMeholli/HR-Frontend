import React from "react";
import { User } from "./types/user";
import { PropsWithChildren } from "react";
import { useAuth } from "./context/AuthProvider";

type ProtectedRouteTypes = PropsWithChildren<{
  allowedRoles?: User["role"][];
}>;

function ProtectedRoute({ allowedRoles, children }: ProtectedRouteTypes) {
  const { currentUser } = useAuth();

  if (currentUser === undefined) {
    return <div>Loading...</div>;
  }

  if (
    currentUser === null ||
    (allowedRoles && !allowedRoles.includes(currentUser.role))
  ) {
    return <div>This is a protected route, only the admin can see this.</div>;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
