/*
 * @Author: luo xi
 * @Date: 2022-11-29 17:15:26
 * @LastEditTime: 2022-11-29 17:30:22
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/test.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
/* eslint-disable */
import { EPageType, EMessage } from "../utils";
import i18n from "../i18n";
mockplus.ui.onmessage = (msg?: IMessage) => {
  if (msg?.type === "clear-layer") {
    new ClearLayer(msg.data);
  }
};
class ClearLayer {
  pages: Page[];
  selectedMenu: string[];
  deleteLayerIds: string[] = [];
  constructor({ menuList, pageType }: IClearLayerOption) {
    // 生成选中菜单
    this.selectedMenu = menuList
      .filter((option: IMenu) => option.checked)
      .map((option: IMenu) => option.text);
    // 设置页码
    this.pages = this.setPages(pageType);
    // 清空布局树
    this.clearLayerTree();
  }
  private setPages(pageType: EPageType): Page[] {
    const pages = [];
    if (pageType == EPageType.currentPage) {
      pages.push(mockplus.currentPage);
    } else if (pageType == EPageType.allPage) {
      pages.push(...mockplus.root.pages);
    }
    return pages;
  }
  private clearLayerTree(): void {
    this.pages.forEach((page: Page) => {
      this.mapLayerTree(page.layers);
    });
    try {
      if (!this.deleteLayerIds.length) {
        this.postMessage(i18n("clear.noClearLayerYet"), EMessage.text);
        return;
      }
      this.deleteLayerIds.forEach((id: string) => {
        mockplus.findLayerById(id).remove();
      });
      this.deleteLayerIds = [];
    } catch (err) {
      this.postMessage(i18n("clear.fail"), EMessage.fail);
      console.error("err", err);
    }
    this.postMessage(i18n("clear.success"), EMessage.success);
    mockplus.commitUndo();
  }
  private mapLayerTree(layers: Layer[]): void {
    layers.forEach((layer: Layer) => {
      if (layer.layers?.length > 0) {
        this.mapLayerTree(layer.layers);
      }
      this.handleLayers(layer);
    });
  }
  private handleLayers(layer: Layer): void {
    if (this.selectedMenu.includes(i18n("options.hidden")) && layer.hidden) {
      this.deleteLayerIds.push(layer.id);
    }
    if (this.selectedMenu.includes(i18n("options.locked")) && layer.locked) {
      this.deleteLayerIds.push(layer.id);
    }
  }
  private postMessage(text: string, type: EMessage): void {}
}
