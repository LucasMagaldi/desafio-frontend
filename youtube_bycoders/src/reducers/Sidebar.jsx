import { openSidebar, closeSidebar } from "../actions/actions";

const SidebarReducer = (state, action) => {
    if(action.type === openSidebar) {
        return {
            ...state,
            expandBar: true,
            width: '300px'
        }
    }
    if(action.type === closeSidebar) {
        return {
            ...state,
            expandBar: false,
            width: '90px'
        }
    }

    throw new Error(`No such action ${action.type}`);
}


export default SidebarReducer;