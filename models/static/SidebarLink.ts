
export interface ISidebarLink {
  Icon: Function,
  text: string,
  to: string

}

export interface ISidebarAction {
  text: string 
  Icon: Function 
  onClick: () => any
  classes?: string
}