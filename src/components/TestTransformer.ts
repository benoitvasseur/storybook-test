export default class TestTransformer {
  static readonly CONSTRUCTOR_NAME_SYMBOL_IDENTIFIER = '___CTOR_NAME___';

  static readonly CONSTRUCTOR_NAME_SYMBOL: unique symbol = Symbol.for(TestTransformer.CONSTRUCTOR_NAME_SYMBOL_IDENTIFIER);

  public static getTypeName<T>(type: Function & { prototype: T }) : string | undefined {
    const typeName = (type as any)[TestTransformer.CONSTRUCTOR_NAME_SYMBOL];
    if (typeName) {
      return typeName;
    }
    return undefined;
  }
}
