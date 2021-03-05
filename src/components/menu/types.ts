
export interface MenuOption {
    type: "item" | "subitem";
    content: Element | String;
    route?: string;
    render?: Element;
    children?: Array<Element> | null;
    direction?: string;
    index?: number|string|Element
    key: number
    icon?: string | Element
}

