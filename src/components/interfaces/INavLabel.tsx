export interface INavLabel {
    text: string;
    linkedPanelId: number;
    isSelected: boolean;
    onClickLabel: (params: any) => any
}