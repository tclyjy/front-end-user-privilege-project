const getters = {
  role: state => state.user.role,
  token: state => state.user.token,
  routers: state => state.permission.routers
};
export default getters
