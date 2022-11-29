/*
 * @Author: luo xi
 * @Date: 2022-11-29 17:18:23
 * @LastEditTime: 2022-11-29 17:21:20
 * @LastEditors: luo xi
 * @Description: 
 * @FilePath: /KeepCoding/test1.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
declare global {
  const mockplus: PluginAPI; 
  readonly ui: UIAPI;
  interface PluginAPI {
    currentPage: Page; //
    readonly root: Document; //
    readonly ui: UIAPI;
    findLayerById(id: string): Layer | null; // *** commitUndo():void; //
  }
  interface UIAPI {
    onmessage(message: any): void; //
    postMessage(pluginMessage: any, options?: UIPostMessageOptions); //
  }
  interface UIPostMessageOptions {}
  interface Document {
  readonly appID: string;
  readonly pages: ReadonlyArray<Page>; //
  }
  //
  interface Layer { 
    readonly id: string; 
    removed: boolean; 
    hidden: boolean; //
    locked: boolean; //
    readonly layers?: ReadonlyArray<Layer>; //
    remove(): void; 
  }
  interface Page {
  readonly id: string;
  readonly layers: ReadonlyArray<Layer>; // ***
  } 
}
  
interface IClearLayerOption { 
  menuList: IMenu[]; 
  pageType: EPageType;
}
interface IMessage { 
  type: string;
  data: IClearLayerOption;
}
enum EPageType { 
  currentPage, allPage,
}
enum EMessage { 
  text,
  success,
  fail, }
interface IMenu { 
  checked: boolean; 
  text: string; 
  id: string; // 唯一
}