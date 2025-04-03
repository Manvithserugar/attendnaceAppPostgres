let navigate;

export const setNavigate = (nav) => {
  navigate = nav;
};

export const redirectTo = (path) => {
  if (navigate) {
    navigate(path);
  }
};

