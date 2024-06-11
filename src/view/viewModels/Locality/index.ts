import { action, makeObservable, runInAction } from "mobx";
import {
  ILocalityEntity,
  ILocalityService,
  IQueries,
} from "../../../data/Locality";
import { BaseVM } from "../BaseVM";
import { ILocalityVM } from "./types";
import debounce from "p-debounce";

export class LocalityVM extends BaseVM implements ILocalityVM {
  _localities: ILocalityEntity[] | null = null;
  private readonly _debouncedGetList;

  get localities(): ILocalityEntity[] | null {
    return this._localities;
  }

  constructor(private service: ILocalityService) {
    super();
    this._debouncedGetList = debounce<[IQueries], ILocalityEntity[]>(
      this.service.getList,
      500,
    );

    makeObservable(this, {
      getList: action,
    });
  }

  getList = async (search: string = ""): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      const list = await this._debouncedGetList({ search });

      runInAction(() => {
        this._localities = list;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  destroy = (): void => {
    this._localities = null;
    this.unsetLoading();
    this.unsetError();
  };
}
