import { Asset } from './entities/asset.entity';

export class AssetsPresenter {
  constructor(private readonly asset: Asset) {}

  toJSON() {
    return {
      _id: this.asset._id,
      name: this.asset.name,
      Symbol: this.asset.symbol,
      price: this.asset.price,
      imageUrl: `http://localhost:9000/${this.asset.image}`,
    };
  }
}
