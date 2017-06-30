import {
  constantRouterMap,
  privilegeRouterMap
} from '../router/index';

// 获取用户权限匹配路由
function hasPermission(role, route) {
  if (route.meta && route.meta.role) {
    return route.meta.role.indexOf(role) >= 0
  } else {
    return true
  }
}

function filterPrivilegeRouter(privilegeRouterMap, role) {
  const privilegeRouters = privilegeRouterMap.filter(route => {
    if (hasPermission(role, route)) {
      if (route.children && route.children.length) {
        route.children = filterPrivilegeRouter(route.children, role)
      }
      return true
    }
    return false
  })
  return privilegeRouters
}


const permission = {
  state: {
    routers: constantRouterMap,
    addRoutes: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRoutes = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, role) {
      return new Promise(resolve => {

        let accessedRouters
        if (role === 'superAdmin') {
          accessedRouters = privilegeRouterMap
        } else {
          accessedRouters = filterPrivilegeRouter(privilegeRouterMap, role)
        }
       
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    }
  }
};

export default permission;
