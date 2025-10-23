
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model log
 * 
 */
export type log = $Result.DefaultSelection<Prisma.$logPayload>
/**
 * Model code
 * 
 */
export type code = $Result.DefaultSelection<Prisma.$codePayload>
/**
 * Model menu_info
 * 
 */
export type menu_info = $Result.DefaultSelection<Prisma.$menu_infoPayload>
/**
 * Model root_class
 * 
 */
export type root_class = $Result.DefaultSelection<Prisma.$root_classPayload>
/**
 * Model job
 * 
 */
export type job = $Result.DefaultSelection<Prisma.$jobPayload>
/**
 * Model skill
 * 
 */
export type skill = $Result.DefaultSelection<Prisma.$skillPayload>
/**
 * Model tripod
 * 
 */
export type tripod = $Result.DefaultSelection<Prisma.$tripodPayload>
/**
 * Model ark_grid_core
 * 
 */
export type ark_grid_core = $Result.DefaultSelection<Prisma.$ark_grid_corePayload>
/**
 * Model ark_grid_combination
 * 
 */
export type ark_grid_combination = $Result.DefaultSelection<Prisma.$ark_grid_combinationPayload>
/**
 * Model items
 * 
 */
export type items = $Result.DefaultSelection<Prisma.$itemsPayload>
/**
 * Model items_history
 * 
 */
export type items_history = $Result.DefaultSelection<Prisma.$items_historyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Logs
 * const logs = await prisma.log.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Logs
   * const logs = await prisma.log.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.log`: Exposes CRUD operations for the **log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.logDelegate<ExtArgs>;

  /**
   * `prisma.code`: Exposes CRUD operations for the **code** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codes
    * const codes = await prisma.code.findMany()
    * ```
    */
  get code(): Prisma.codeDelegate<ExtArgs>;

  /**
   * `prisma.menu_info`: Exposes CRUD operations for the **menu_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_infos
    * const menu_infos = await prisma.menu_info.findMany()
    * ```
    */
  get menu_info(): Prisma.menu_infoDelegate<ExtArgs>;

  /**
   * `prisma.root_class`: Exposes CRUD operations for the **root_class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Root_classes
    * const root_classes = await prisma.root_class.findMany()
    * ```
    */
  get root_class(): Prisma.root_classDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.jobDelegate<ExtArgs>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.skillDelegate<ExtArgs>;

  /**
   * `prisma.tripod`: Exposes CRUD operations for the **tripod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tripods
    * const tripods = await prisma.tripod.findMany()
    * ```
    */
  get tripod(): Prisma.tripodDelegate<ExtArgs>;

  /**
   * `prisma.ark_grid_core`: Exposes CRUD operations for the **ark_grid_core** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ark_grid_cores
    * const ark_grid_cores = await prisma.ark_grid_core.findMany()
    * ```
    */
  get ark_grid_core(): Prisma.ark_grid_coreDelegate<ExtArgs>;

  /**
   * `prisma.ark_grid_combination`: Exposes CRUD operations for the **ark_grid_combination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ark_grid_combinations
    * const ark_grid_combinations = await prisma.ark_grid_combination.findMany()
    * ```
    */
  get ark_grid_combination(): Prisma.ark_grid_combinationDelegate<ExtArgs>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.itemsDelegate<ExtArgs>;

  /**
   * `prisma.items_history`: Exposes CRUD operations for the **items_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items_histories
    * const items_histories = await prisma.items_history.findMany()
    * ```
    */
  get items_history(): Prisma.items_historyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    log: 'log',
    code: 'code',
    menu_info: 'menu_info',
    root_class: 'root_class',
    job: 'job',
    skill: 'skill',
    tripod: 'tripod',
    ark_grid_core: 'ark_grid_core',
    ark_grid_combination: 'ark_grid_combination',
    items: 'items',
    items_history: 'items_history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "log" | "code" | "menu_info" | "root_class" | "job" | "skill" | "tripod" | "ark_grid_core" | "ark_grid_combination" | "items" | "items_history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      log: {
        payload: Prisma.$logPayload<ExtArgs>
        fields: Prisma.logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          findFirst: {
            args: Prisma.logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          findMany: {
            args: Prisma.logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>[]
          }
          create: {
            args: Prisma.logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          createMany: {
            args: Prisma.logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>[]
          }
          delete: {
            args: Prisma.logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          update: {
            args: Prisma.logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          deleteMany: {
            args: Prisma.logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.logGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.logCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      code: {
        payload: Prisma.$codePayload<ExtArgs>
        fields: Prisma.codeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.codeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.codeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload>
          }
          findFirst: {
            args: Prisma.codeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.codeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload>
          }
          findMany: {
            args: Prisma.codeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload>[]
          }
          create: {
            args: Prisma.codeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload>
          }
          createMany: {
            args: Prisma.codeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.codeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload>[]
          }
          delete: {
            args: Prisma.codeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload>
          }
          update: {
            args: Prisma.codeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload>
          }
          deleteMany: {
            args: Prisma.codeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.codeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.codeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codePayload>
          }
          aggregate: {
            args: Prisma.CodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCode>
          }
          groupBy: {
            args: Prisma.codeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.codeCountArgs<ExtArgs>
            result: $Utils.Optional<CodeCountAggregateOutputType> | number
          }
        }
      }
      menu_info: {
        payload: Prisma.$menu_infoPayload<ExtArgs>
        fields: Prisma.menu_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menu_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menu_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload>
          }
          findFirst: {
            args: Prisma.menu_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menu_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload>
          }
          findMany: {
            args: Prisma.menu_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload>[]
          }
          create: {
            args: Prisma.menu_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload>
          }
          createMany: {
            args: Prisma.menu_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menu_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload>[]
          }
          delete: {
            args: Prisma.menu_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload>
          }
          update: {
            args: Prisma.menu_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload>
          }
          deleteMany: {
            args: Prisma.menu_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menu_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.menu_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_infoPayload>
          }
          aggregate: {
            args: Prisma.Menu_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu_info>
          }
          groupBy: {
            args: Prisma.menu_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Menu_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.menu_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Menu_infoCountAggregateOutputType> | number
          }
        }
      }
      root_class: {
        payload: Prisma.$root_classPayload<ExtArgs>
        fields: Prisma.root_classFieldRefs
        operations: {
          findUnique: {
            args: Prisma.root_classFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.root_classFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload>
          }
          findFirst: {
            args: Prisma.root_classFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.root_classFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload>
          }
          findMany: {
            args: Prisma.root_classFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload>[]
          }
          create: {
            args: Prisma.root_classCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload>
          }
          createMany: {
            args: Prisma.root_classCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.root_classCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload>[]
          }
          delete: {
            args: Prisma.root_classDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload>
          }
          update: {
            args: Prisma.root_classUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload>
          }
          deleteMany: {
            args: Prisma.root_classDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.root_classUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.root_classUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$root_classPayload>
          }
          aggregate: {
            args: Prisma.Root_classAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoot_class>
          }
          groupBy: {
            args: Prisma.root_classGroupByArgs<ExtArgs>
            result: $Utils.Optional<Root_classGroupByOutputType>[]
          }
          count: {
            args: Prisma.root_classCountArgs<ExtArgs>
            result: $Utils.Optional<Root_classCountAggregateOutputType> | number
          }
        }
      }
      job: {
        payload: Prisma.$jobPayload<ExtArgs>
        fields: Prisma.jobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findFirst: {
            args: Prisma.jobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findMany: {
            args: Prisma.jobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[]
          }
          create: {
            args: Prisma.jobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          createMany: {
            args: Prisma.jobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[]
          }
          delete: {
            args: Prisma.jobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          update: {
            args: Prisma.jobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          deleteMany: {
            args: Prisma.jobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.jobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      skill: {
        payload: Prisma.$skillPayload<ExtArgs>
        fields: Prisma.skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findFirst: {
            args: Prisma.skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findMany: {
            args: Prisma.skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          create: {
            args: Prisma.skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          createMany: {
            args: Prisma.skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          delete: {
            args: Prisma.skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          update: {
            args: Prisma.skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          deleteMany: {
            args: Prisma.skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      tripod: {
        payload: Prisma.$tripodPayload<ExtArgs>
        fields: Prisma.tripodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tripodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tripodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload>
          }
          findFirst: {
            args: Prisma.tripodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tripodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload>
          }
          findMany: {
            args: Prisma.tripodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload>[]
          }
          create: {
            args: Prisma.tripodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload>
          }
          createMany: {
            args: Prisma.tripodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tripodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload>[]
          }
          delete: {
            args: Prisma.tripodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload>
          }
          update: {
            args: Prisma.tripodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload>
          }
          deleteMany: {
            args: Prisma.tripodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tripodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tripodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripodPayload>
          }
          aggregate: {
            args: Prisma.TripodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripod>
          }
          groupBy: {
            args: Prisma.tripodGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripodGroupByOutputType>[]
          }
          count: {
            args: Prisma.tripodCountArgs<ExtArgs>
            result: $Utils.Optional<TripodCountAggregateOutputType> | number
          }
        }
      }
      ark_grid_core: {
        payload: Prisma.$ark_grid_corePayload<ExtArgs>
        fields: Prisma.ark_grid_coreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ark_grid_coreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ark_grid_coreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload>
          }
          findFirst: {
            args: Prisma.ark_grid_coreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ark_grid_coreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload>
          }
          findMany: {
            args: Prisma.ark_grid_coreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload>[]
          }
          create: {
            args: Prisma.ark_grid_coreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload>
          }
          createMany: {
            args: Prisma.ark_grid_coreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ark_grid_coreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload>[]
          }
          delete: {
            args: Prisma.ark_grid_coreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload>
          }
          update: {
            args: Prisma.ark_grid_coreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload>
          }
          deleteMany: {
            args: Prisma.ark_grid_coreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ark_grid_coreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ark_grid_coreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_corePayload>
          }
          aggregate: {
            args: Prisma.Ark_grid_coreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArk_grid_core>
          }
          groupBy: {
            args: Prisma.ark_grid_coreGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ark_grid_coreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ark_grid_coreCountArgs<ExtArgs>
            result: $Utils.Optional<Ark_grid_coreCountAggregateOutputType> | number
          }
        }
      }
      ark_grid_combination: {
        payload: Prisma.$ark_grid_combinationPayload<ExtArgs>
        fields: Prisma.ark_grid_combinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ark_grid_combinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ark_grid_combinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload>
          }
          findFirst: {
            args: Prisma.ark_grid_combinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ark_grid_combinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload>
          }
          findMany: {
            args: Prisma.ark_grid_combinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload>[]
          }
          create: {
            args: Prisma.ark_grid_combinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload>
          }
          createMany: {
            args: Prisma.ark_grid_combinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ark_grid_combinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload>[]
          }
          delete: {
            args: Prisma.ark_grid_combinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload>
          }
          update: {
            args: Prisma.ark_grid_combinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload>
          }
          deleteMany: {
            args: Prisma.ark_grid_combinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ark_grid_combinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ark_grid_combinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ark_grid_combinationPayload>
          }
          aggregate: {
            args: Prisma.Ark_grid_combinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArk_grid_combination>
          }
          groupBy: {
            args: Prisma.ark_grid_combinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ark_grid_combinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ark_grid_combinationCountArgs<ExtArgs>
            result: $Utils.Optional<Ark_grid_combinationCountAggregateOutputType> | number
          }
        }
      }
      items: {
        payload: Prisma.$itemsPayload<ExtArgs>
        fields: Prisma.itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findFirst: {
            args: Prisma.itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findMany: {
            args: Prisma.itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          create: {
            args: Prisma.itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          createMany: {
            args: Prisma.itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          delete: {
            args: Prisma.itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          update: {
            args: Prisma.itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          deleteMany: {
            args: Prisma.itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      items_history: {
        payload: Prisma.$items_historyPayload<ExtArgs>
        fields: Prisma.items_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.items_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.items_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload>
          }
          findFirst: {
            args: Prisma.items_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.items_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload>
          }
          findMany: {
            args: Prisma.items_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload>[]
          }
          create: {
            args: Prisma.items_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload>
          }
          createMany: {
            args: Prisma.items_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.items_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload>[]
          }
          delete: {
            args: Prisma.items_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload>
          }
          update: {
            args: Prisma.items_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload>
          }
          deleteMany: {
            args: Prisma.items_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.items_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.items_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$items_historyPayload>
          }
          aggregate: {
            args: Prisma.Items_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems_history>
          }
          groupBy: {
            args: Prisma.items_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Items_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.items_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Items_historyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Root_classCountOutputType
   */

  export type Root_classCountOutputType = {
    jobs: number
  }

  export type Root_classCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | Root_classCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * Root_classCountOutputType without action
   */
  export type Root_classCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root_classCountOutputType
     */
    select?: Root_classCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Root_classCountOutputType without action
   */
  export type Root_classCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    skills: number
    ark_grid_core: number
    ark_grid_combination: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | JobCountOutputTypeCountSkillsArgs
    ark_grid_core?: boolean | JobCountOutputTypeCountArk_grid_coreArgs
    ark_grid_combination?: boolean | JobCountOutputTypeCountArk_grid_combinationArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountArk_grid_coreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ark_grid_coreWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountArk_grid_combinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ark_grid_combinationWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    tripods: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripods?: boolean | SkillCountOutputTypeCountTripodsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountTripodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripodWhereInput
  }


  /**
   * Count Type ItemsCountOutputType
   */

  export type ItemsCountOutputType = {
    history: number
  }

  export type ItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | ItemsCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsCountOutputType
     */
    select?: ItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: items_historyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    message: string | null
    start_time: string | null
    elapsed_time: string | null
    ip_address: string | null
    create_at: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    message: string | null
    start_time: string | null
    elapsed_time: string | null
    ip_address: string | null
    create_at: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    name: number
    status: number
    message: number
    start_time: number
    elapsed_time: number
    ip_address: number
    create_at: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    message?: true
    start_time?: true
    elapsed_time?: true
    ip_address?: true
    create_at?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    message?: true
    start_time?: true
    elapsed_time?: true
    ip_address?: true
    create_at?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    message?: true
    start_time?: true
    elapsed_time?: true
    ip_address?: true
    create_at?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log to aggregate.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logWhereInput
    orderBy?: logOrderByWithAggregationInput | logOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    name: string
    status: string
    message: string
    start_time: string | null
    elapsed_time: string | null
    ip_address: string | null
    create_at: Date
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    message?: boolean
    start_time?: boolean
    elapsed_time?: boolean
    ip_address?: boolean
    create_at?: boolean
  }, ExtArgs["result"]["log"]>

  export type logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    message?: boolean
    start_time?: boolean
    elapsed_time?: boolean
    ip_address?: boolean
    create_at?: boolean
  }, ExtArgs["result"]["log"]>

  export type logSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    message?: boolean
    start_time?: boolean
    elapsed_time?: boolean
    ip_address?: boolean
    create_at?: boolean
  }


  export type $logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: string
      message: string
      start_time: string | null
      elapsed_time: string | null
      ip_address: string | null
      create_at: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type logGetPayload<S extends boolean | null | undefined | logDefaultArgs> = $Result.GetResult<Prisma.$logPayload, S>

  type logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<logFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log'], meta: { name: 'log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {logFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logFindUniqueArgs>(args: SelectSubset<T, logFindUniqueArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {logFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logFindUniqueOrThrowArgs>(args: SelectSubset<T, logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logFindFirstArgs>(args?: SelectSubset<T, logFindFirstArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logFindFirstOrThrowArgs>(args?: SelectSubset<T, logFindFirstOrThrowArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logFindManyArgs>(args?: SelectSubset<T, logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Log.
     * @param {logCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends logCreateArgs>(args: SelectSubset<T, logCreateArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Logs.
     * @param {logCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logCreateManyArgs>(args?: SelectSubset<T, logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {logCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logCreateManyAndReturnArgs>(args?: SelectSubset<T, logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Log.
     * @param {logDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends logDeleteArgs>(args: SelectSubset<T, logDeleteArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Log.
     * @param {logUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logUpdateArgs>(args: SelectSubset<T, logUpdateArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Logs.
     * @param {logDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logDeleteManyArgs>(args?: SelectSubset<T, logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logUpdateManyArgs>(args: SelectSubset<T, logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {logUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends logUpsertArgs>(args: SelectSubset<T, logUpsertArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logCountArgs>(
      args?: Subset<T, logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logGroupByArgs['orderBy'] }
        : { orderBy?: logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log model
   */
  readonly fields: logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the log model
   */ 
  interface logFieldRefs {
    readonly id: FieldRef<"log", 'Int'>
    readonly name: FieldRef<"log", 'String'>
    readonly status: FieldRef<"log", 'String'>
    readonly message: FieldRef<"log", 'String'>
    readonly start_time: FieldRef<"log", 'String'>
    readonly elapsed_time: FieldRef<"log", 'String'>
    readonly ip_address: FieldRef<"log", 'String'>
    readonly create_at: FieldRef<"log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * log findUnique
   */
  export type logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where: logWhereUniqueInput
  }

  /**
   * log findUniqueOrThrow
   */
  export type logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where: logWhereUniqueInput
  }

  /**
   * log findFirst
   */
  export type logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * log findFirstOrThrow
   */
  export type logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * log findMany
   */
  export type logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * log create
   */
  export type logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * The data needed to create a log.
     */
    data: XOR<logCreateInput, logUncheckedCreateInput>
  }

  /**
   * log createMany
   */
  export type logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logCreateManyInput | logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * log createManyAndReturn
   */
  export type logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many logs.
     */
    data: logCreateManyInput | logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * log update
   */
  export type logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * The data needed to update a log.
     */
    data: XOR<logUpdateInput, logUncheckedUpdateInput>
    /**
     * Choose, which log to update.
     */
    where: logWhereUniqueInput
  }

  /**
   * log updateMany
   */
  export type logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logUpdateManyMutationInput, logUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logWhereInput
  }

  /**
   * log upsert
   */
  export type logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * The filter to search for the log to update in case it exists.
     */
    where: logWhereUniqueInput
    /**
     * In case the log found by the `where` argument doesn't exist, create a new log with this data.
     */
    create: XOR<logCreateInput, logUncheckedCreateInput>
    /**
     * In case the log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logUpdateInput, logUncheckedUpdateInput>
  }

  /**
   * log delete
   */
  export type logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Filter which log to delete.
     */
    where: logWhereUniqueInput
  }

  /**
   * log deleteMany
   */
  export type logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logWhereInput
  }

  /**
   * log without action
   */
  export type logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
  }


  /**
   * Model code
   */

  export type AggregateCode = {
    _count: CodeCountAggregateOutputType | null
    _avg: CodeAvgAggregateOutputType | null
    _sum: CodeSumAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  export type CodeAvgAggregateOutputType = {
    id: number | null
    sort: number | null
  }

  export type CodeSumAggregateOutputType = {
    id: number | null
    sort: number | null
  }

  export type CodeMinAggregateOutputType = {
    id: number | null
    parent_code: string | null
    code: string | null
    parent_top_code: string | null
    display_name: string | null
    sort: number | null
    use_yn: boolean | null
    visible_yn: boolean | null
    description: string | null
    is_deleted: boolean | null
    create_at: Date | null
    update_at: Date | null
  }

  export type CodeMaxAggregateOutputType = {
    id: number | null
    parent_code: string | null
    code: string | null
    parent_top_code: string | null
    display_name: string | null
    sort: number | null
    use_yn: boolean | null
    visible_yn: boolean | null
    description: string | null
    is_deleted: boolean | null
    create_at: Date | null
    update_at: Date | null
  }

  export type CodeCountAggregateOutputType = {
    id: number
    parent_code: number
    code: number
    parent_top_code: number
    display_name: number
    sort: number
    use_yn: number
    visible_yn: number
    description: number
    is_deleted: number
    create_at: number
    update_at: number
    _all: number
  }


  export type CodeAvgAggregateInputType = {
    id?: true
    sort?: true
  }

  export type CodeSumAggregateInputType = {
    id?: true
    sort?: true
  }

  export type CodeMinAggregateInputType = {
    id?: true
    parent_code?: true
    code?: true
    parent_top_code?: true
    display_name?: true
    sort?: true
    use_yn?: true
    visible_yn?: true
    description?: true
    is_deleted?: true
    create_at?: true
    update_at?: true
  }

  export type CodeMaxAggregateInputType = {
    id?: true
    parent_code?: true
    code?: true
    parent_top_code?: true
    display_name?: true
    sort?: true
    use_yn?: true
    visible_yn?: true
    description?: true
    is_deleted?: true
    create_at?: true
    update_at?: true
  }

  export type CodeCountAggregateInputType = {
    id?: true
    parent_code?: true
    code?: true
    parent_top_code?: true
    display_name?: true
    sort?: true
    use_yn?: true
    visible_yn?: true
    description?: true
    is_deleted?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type CodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which code to aggregate.
     */
    where?: codeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codes to fetch.
     */
    orderBy?: codeOrderByWithRelationInput | codeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: codeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned codes
    **/
    _count?: true | CodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeMaxAggregateInputType
  }

  export type GetCodeAggregateType<T extends CodeAggregateArgs> = {
        [P in keyof T & keyof AggregateCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCode[P]>
      : GetScalarType<T[P], AggregateCode[P]>
  }




  export type codeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: codeWhereInput
    orderBy?: codeOrderByWithAggregationInput | codeOrderByWithAggregationInput[]
    by: CodeScalarFieldEnum[] | CodeScalarFieldEnum
    having?: codeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeCountAggregateInputType | true
    _avg?: CodeAvgAggregateInputType
    _sum?: CodeSumAggregateInputType
    _min?: CodeMinAggregateInputType
    _max?: CodeMaxAggregateInputType
  }

  export type CodeGroupByOutputType = {
    id: number
    parent_code: string
    code: string
    parent_top_code: string
    display_name: string
    sort: number
    use_yn: boolean
    visible_yn: boolean
    description: string | null
    is_deleted: boolean
    create_at: Date
    update_at: Date
    _count: CodeCountAggregateOutputType | null
    _avg: CodeAvgAggregateOutputType | null
    _sum: CodeSumAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  type GetCodeGroupByPayload<T extends codeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeGroupByOutputType[P]>
            : GetScalarType<T[P], CodeGroupByOutputType[P]>
        }
      >
    >


  export type codeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_code?: boolean
    code?: boolean
    parent_top_code?: boolean
    display_name?: boolean
    sort?: boolean
    use_yn?: boolean
    visible_yn?: boolean
    description?: boolean
    is_deleted?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["code"]>

  export type codeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_code?: boolean
    code?: boolean
    parent_top_code?: boolean
    display_name?: boolean
    sort?: boolean
    use_yn?: boolean
    visible_yn?: boolean
    description?: boolean
    is_deleted?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["code"]>

  export type codeSelectScalar = {
    id?: boolean
    parent_code?: boolean
    code?: boolean
    parent_top_code?: boolean
    display_name?: boolean
    sort?: boolean
    use_yn?: boolean
    visible_yn?: boolean
    description?: boolean
    is_deleted?: boolean
    create_at?: boolean
    update_at?: boolean
  }


  export type $codePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "code"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parent_code: string
      code: string
      parent_top_code: string
      display_name: string
      sort: number
      use_yn: boolean
      visible_yn: boolean
      description: string | null
      is_deleted: boolean
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["code"]>
    composites: {}
  }

  type codeGetPayload<S extends boolean | null | undefined | codeDefaultArgs> = $Result.GetResult<Prisma.$codePayload, S>

  type codeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<codeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CodeCountAggregateInputType | true
    }

  export interface codeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['code'], meta: { name: 'code' } }
    /**
     * Find zero or one Code that matches the filter.
     * @param {codeFindUniqueArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends codeFindUniqueArgs>(args: SelectSubset<T, codeFindUniqueArgs<ExtArgs>>): Prisma__codeClient<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Code that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {codeFindUniqueOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends codeFindUniqueOrThrowArgs>(args: SelectSubset<T, codeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__codeClient<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Code that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeFindFirstArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends codeFindFirstArgs>(args?: SelectSubset<T, codeFindFirstArgs<ExtArgs>>): Prisma__codeClient<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Code that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeFindFirstOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends codeFindFirstOrThrowArgs>(args?: SelectSubset<T, codeFindFirstOrThrowArgs<ExtArgs>>): Prisma__codeClient<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codes
     * const codes = await prisma.code.findMany()
     * 
     * // Get first 10 Codes
     * const codes = await prisma.code.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeWithIdOnly = await prisma.code.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends codeFindManyArgs>(args?: SelectSubset<T, codeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Code.
     * @param {codeCreateArgs} args - Arguments to create a Code.
     * @example
     * // Create one Code
     * const Code = await prisma.code.create({
     *   data: {
     *     // ... data to create a Code
     *   }
     * })
     * 
     */
    create<T extends codeCreateArgs>(args: SelectSubset<T, codeCreateArgs<ExtArgs>>): Prisma__codeClient<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Codes.
     * @param {codeCreateManyArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const code = await prisma.code.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends codeCreateManyArgs>(args?: SelectSubset<T, codeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Codes and returns the data saved in the database.
     * @param {codeCreateManyAndReturnArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const code = await prisma.code.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Codes and only return the `id`
     * const codeWithIdOnly = await prisma.code.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends codeCreateManyAndReturnArgs>(args?: SelectSubset<T, codeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Code.
     * @param {codeDeleteArgs} args - Arguments to delete one Code.
     * @example
     * // Delete one Code
     * const Code = await prisma.code.delete({
     *   where: {
     *     // ... filter to delete one Code
     *   }
     * })
     * 
     */
    delete<T extends codeDeleteArgs>(args: SelectSubset<T, codeDeleteArgs<ExtArgs>>): Prisma__codeClient<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Code.
     * @param {codeUpdateArgs} args - Arguments to update one Code.
     * @example
     * // Update one Code
     * const code = await prisma.code.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends codeUpdateArgs>(args: SelectSubset<T, codeUpdateArgs<ExtArgs>>): Prisma__codeClient<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Codes.
     * @param {codeDeleteManyArgs} args - Arguments to filter Codes to delete.
     * @example
     * // Delete a few Codes
     * const { count } = await prisma.code.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends codeDeleteManyArgs>(args?: SelectSubset<T, codeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codes
     * const code = await prisma.code.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends codeUpdateManyArgs>(args: SelectSubset<T, codeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Code.
     * @param {codeUpsertArgs} args - Arguments to update or create a Code.
     * @example
     * // Update or create a Code
     * const code = await prisma.code.upsert({
     *   create: {
     *     // ... data to create a Code
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Code we want to update
     *   }
     * })
     */
    upsert<T extends codeUpsertArgs>(args: SelectSubset<T, codeUpsertArgs<ExtArgs>>): Prisma__codeClient<$Result.GetResult<Prisma.$codePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeCountArgs} args - Arguments to filter Codes to count.
     * @example
     * // Count the number of Codes
     * const count = await prisma.code.count({
     *   where: {
     *     // ... the filter for the Codes we want to count
     *   }
     * })
    **/
    count<T extends codeCountArgs>(
      args?: Subset<T, codeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CodeAggregateArgs>(args: Subset<T, CodeAggregateArgs>): Prisma.PrismaPromise<GetCodeAggregateType<T>>

    /**
     * Group by Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends codeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: codeGroupByArgs['orderBy'] }
        : { orderBy?: codeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, codeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the code model
   */
  readonly fields: codeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for code.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__codeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the code model
   */ 
  interface codeFieldRefs {
    readonly id: FieldRef<"code", 'Int'>
    readonly parent_code: FieldRef<"code", 'String'>
    readonly code: FieldRef<"code", 'String'>
    readonly parent_top_code: FieldRef<"code", 'String'>
    readonly display_name: FieldRef<"code", 'String'>
    readonly sort: FieldRef<"code", 'Int'>
    readonly use_yn: FieldRef<"code", 'Boolean'>
    readonly visible_yn: FieldRef<"code", 'Boolean'>
    readonly description: FieldRef<"code", 'String'>
    readonly is_deleted: FieldRef<"code", 'Boolean'>
    readonly create_at: FieldRef<"code", 'DateTime'>
    readonly update_at: FieldRef<"code", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * code findUnique
   */
  export type codeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
    /**
     * Filter, which code to fetch.
     */
    where: codeWhereUniqueInput
  }

  /**
   * code findUniqueOrThrow
   */
  export type codeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
    /**
     * Filter, which code to fetch.
     */
    where: codeWhereUniqueInput
  }

  /**
   * code findFirst
   */
  export type codeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
    /**
     * Filter, which code to fetch.
     */
    where?: codeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codes to fetch.
     */
    orderBy?: codeOrderByWithRelationInput | codeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for codes.
     */
    cursor?: codeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * code findFirstOrThrow
   */
  export type codeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
    /**
     * Filter, which code to fetch.
     */
    where?: codeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codes to fetch.
     */
    orderBy?: codeOrderByWithRelationInput | codeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for codes.
     */
    cursor?: codeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * code findMany
   */
  export type codeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
    /**
     * Filter, which codes to fetch.
     */
    where?: codeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codes to fetch.
     */
    orderBy?: codeOrderByWithRelationInput | codeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing codes.
     */
    cursor?: codeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codes.
     */
    skip?: number
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * code create
   */
  export type codeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
    /**
     * The data needed to create a code.
     */
    data: XOR<codeCreateInput, codeUncheckedCreateInput>
  }

  /**
   * code createMany
   */
  export type codeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many codes.
     */
    data: codeCreateManyInput | codeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * code createManyAndReturn
   */
  export type codeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many codes.
     */
    data: codeCreateManyInput | codeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * code update
   */
  export type codeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
    /**
     * The data needed to update a code.
     */
    data: XOR<codeUpdateInput, codeUncheckedUpdateInput>
    /**
     * Choose, which code to update.
     */
    where: codeWhereUniqueInput
  }

  /**
   * code updateMany
   */
  export type codeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update codes.
     */
    data: XOR<codeUpdateManyMutationInput, codeUncheckedUpdateManyInput>
    /**
     * Filter which codes to update
     */
    where?: codeWhereInput
  }

  /**
   * code upsert
   */
  export type codeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
    /**
     * The filter to search for the code to update in case it exists.
     */
    where: codeWhereUniqueInput
    /**
     * In case the code found by the `where` argument doesn't exist, create a new code with this data.
     */
    create: XOR<codeCreateInput, codeUncheckedCreateInput>
    /**
     * In case the code was found with the provided `where` argument, update it with this data.
     */
    update: XOR<codeUpdateInput, codeUncheckedUpdateInput>
  }

  /**
   * code delete
   */
  export type codeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
    /**
     * Filter which code to delete.
     */
    where: codeWhereUniqueInput
  }

  /**
   * code deleteMany
   */
  export type codeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which codes to delete
     */
    where?: codeWhereInput
  }

  /**
   * code without action
   */
  export type codeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the code
     */
    select?: codeSelect<ExtArgs> | null
  }


  /**
   * Model menu_info
   */

  export type AggregateMenu_info = {
    _count: Menu_infoCountAggregateOutputType | null
    _avg: Menu_infoAvgAggregateOutputType | null
    _sum: Menu_infoSumAggregateOutputType | null
    _min: Menu_infoMinAggregateOutputType | null
    _max: Menu_infoMaxAggregateOutputType | null
  }

  export type Menu_infoAvgAggregateOutputType = {
    id: number | null
    sort: number | null
  }

  export type Menu_infoSumAggregateOutputType = {
    id: number | null
    sort: number | null
  }

  export type Menu_infoMinAggregateOutputType = {
    id: number | null
    parent_menu_code: string | null
    menu_code: string | null
    menu_url: string | null
    icon: string | null
    sort: number | null
    use_yn: boolean | null
    visible_yn: boolean | null
    description: string | null
    is_deleted: boolean | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Menu_infoMaxAggregateOutputType = {
    id: number | null
    parent_menu_code: string | null
    menu_code: string | null
    menu_url: string | null
    icon: string | null
    sort: number | null
    use_yn: boolean | null
    visible_yn: boolean | null
    description: string | null
    is_deleted: boolean | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Menu_infoCountAggregateOutputType = {
    id: number
    parent_menu_code: number
    menu_code: number
    menu_url: number
    icon: number
    sort: number
    use_yn: number
    visible_yn: number
    description: number
    is_deleted: number
    create_at: number
    update_at: number
    _all: number
  }


  export type Menu_infoAvgAggregateInputType = {
    id?: true
    sort?: true
  }

  export type Menu_infoSumAggregateInputType = {
    id?: true
    sort?: true
  }

  export type Menu_infoMinAggregateInputType = {
    id?: true
    parent_menu_code?: true
    menu_code?: true
    menu_url?: true
    icon?: true
    sort?: true
    use_yn?: true
    visible_yn?: true
    description?: true
    is_deleted?: true
    create_at?: true
    update_at?: true
  }

  export type Menu_infoMaxAggregateInputType = {
    id?: true
    parent_menu_code?: true
    menu_code?: true
    menu_url?: true
    icon?: true
    sort?: true
    use_yn?: true
    visible_yn?: true
    description?: true
    is_deleted?: true
    create_at?: true
    update_at?: true
  }

  export type Menu_infoCountAggregateInputType = {
    id?: true
    parent_menu_code?: true
    menu_code?: true
    menu_url?: true
    icon?: true
    sort?: true
    use_yn?: true
    visible_yn?: true
    description?: true
    is_deleted?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type Menu_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_info to aggregate.
     */
    where?: menu_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_infos to fetch.
     */
    orderBy?: menu_infoOrderByWithRelationInput | menu_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_infos
    **/
    _count?: true | Menu_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_infoMaxAggregateInputType
  }

  export type GetMenu_infoAggregateType<T extends Menu_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_info[P]>
      : GetScalarType<T[P], AggregateMenu_info[P]>
  }




  export type menu_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_infoWhereInput
    orderBy?: menu_infoOrderByWithAggregationInput | menu_infoOrderByWithAggregationInput[]
    by: Menu_infoScalarFieldEnum[] | Menu_infoScalarFieldEnum
    having?: menu_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_infoCountAggregateInputType | true
    _avg?: Menu_infoAvgAggregateInputType
    _sum?: Menu_infoSumAggregateInputType
    _min?: Menu_infoMinAggregateInputType
    _max?: Menu_infoMaxAggregateInputType
  }

  export type Menu_infoGroupByOutputType = {
    id: number
    parent_menu_code: string
    menu_code: string
    menu_url: string
    icon: string | null
    sort: number
    use_yn: boolean
    visible_yn: boolean
    description: string | null
    is_deleted: boolean
    create_at: Date
    update_at: Date
    _count: Menu_infoCountAggregateOutputType | null
    _avg: Menu_infoAvgAggregateOutputType | null
    _sum: Menu_infoSumAggregateOutputType | null
    _min: Menu_infoMinAggregateOutputType | null
    _max: Menu_infoMaxAggregateOutputType | null
  }

  type GetMenu_infoGroupByPayload<T extends menu_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Menu_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_infoGroupByOutputType[P]>
        }
      >
    >


  export type menu_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_menu_code?: boolean
    menu_code?: boolean
    menu_url?: boolean
    icon?: boolean
    sort?: boolean
    use_yn?: boolean
    visible_yn?: boolean
    description?: boolean
    is_deleted?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["menu_info"]>

  export type menu_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_menu_code?: boolean
    menu_code?: boolean
    menu_url?: boolean
    icon?: boolean
    sort?: boolean
    use_yn?: boolean
    visible_yn?: boolean
    description?: boolean
    is_deleted?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["menu_info"]>

  export type menu_infoSelectScalar = {
    id?: boolean
    parent_menu_code?: boolean
    menu_code?: boolean
    menu_url?: boolean
    icon?: boolean
    sort?: boolean
    use_yn?: boolean
    visible_yn?: boolean
    description?: boolean
    is_deleted?: boolean
    create_at?: boolean
    update_at?: boolean
  }


  export type $menu_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_info"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parent_menu_code: string
      menu_code: string
      menu_url: string
      icon: string | null
      sort: number
      use_yn: boolean
      visible_yn: boolean
      description: string | null
      is_deleted: boolean
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["menu_info"]>
    composites: {}
  }

  type menu_infoGetPayload<S extends boolean | null | undefined | menu_infoDefaultArgs> = $Result.GetResult<Prisma.$menu_infoPayload, S>

  type menu_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<menu_infoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Menu_infoCountAggregateInputType | true
    }

  export interface menu_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu_info'], meta: { name: 'menu_info' } }
    /**
     * Find zero or one Menu_info that matches the filter.
     * @param {menu_infoFindUniqueArgs} args - Arguments to find a Menu_info
     * @example
     * // Get one Menu_info
     * const menu_info = await prisma.menu_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menu_infoFindUniqueArgs>(args: SelectSubset<T, menu_infoFindUniqueArgs<ExtArgs>>): Prisma__menu_infoClient<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Menu_info that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {menu_infoFindUniqueOrThrowArgs} args - Arguments to find a Menu_info
     * @example
     * // Get one Menu_info
     * const menu_info = await prisma.menu_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menu_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, menu_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menu_infoClient<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Menu_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_infoFindFirstArgs} args - Arguments to find a Menu_info
     * @example
     * // Get one Menu_info
     * const menu_info = await prisma.menu_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menu_infoFindFirstArgs>(args?: SelectSubset<T, menu_infoFindFirstArgs<ExtArgs>>): Prisma__menu_infoClient<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Menu_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_infoFindFirstOrThrowArgs} args - Arguments to find a Menu_info
     * @example
     * // Get one Menu_info
     * const menu_info = await prisma.menu_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menu_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, menu_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__menu_infoClient<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Menu_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_infos
     * const menu_infos = await prisma.menu_info.findMany()
     * 
     * // Get first 10 Menu_infos
     * const menu_infos = await prisma.menu_info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menu_infoWithIdOnly = await prisma.menu_info.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menu_infoFindManyArgs>(args?: SelectSubset<T, menu_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Menu_info.
     * @param {menu_infoCreateArgs} args - Arguments to create a Menu_info.
     * @example
     * // Create one Menu_info
     * const Menu_info = await prisma.menu_info.create({
     *   data: {
     *     // ... data to create a Menu_info
     *   }
     * })
     * 
     */
    create<T extends menu_infoCreateArgs>(args: SelectSubset<T, menu_infoCreateArgs<ExtArgs>>): Prisma__menu_infoClient<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Menu_infos.
     * @param {menu_infoCreateManyArgs} args - Arguments to create many Menu_infos.
     * @example
     * // Create many Menu_infos
     * const menu_info = await prisma.menu_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menu_infoCreateManyArgs>(args?: SelectSubset<T, menu_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menu_infos and returns the data saved in the database.
     * @param {menu_infoCreateManyAndReturnArgs} args - Arguments to create many Menu_infos.
     * @example
     * // Create many Menu_infos
     * const menu_info = await prisma.menu_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menu_infos and only return the `id`
     * const menu_infoWithIdOnly = await prisma.menu_info.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menu_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, menu_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Menu_info.
     * @param {menu_infoDeleteArgs} args - Arguments to delete one Menu_info.
     * @example
     * // Delete one Menu_info
     * const Menu_info = await prisma.menu_info.delete({
     *   where: {
     *     // ... filter to delete one Menu_info
     *   }
     * })
     * 
     */
    delete<T extends menu_infoDeleteArgs>(args: SelectSubset<T, menu_infoDeleteArgs<ExtArgs>>): Prisma__menu_infoClient<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Menu_info.
     * @param {menu_infoUpdateArgs} args - Arguments to update one Menu_info.
     * @example
     * // Update one Menu_info
     * const menu_info = await prisma.menu_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menu_infoUpdateArgs>(args: SelectSubset<T, menu_infoUpdateArgs<ExtArgs>>): Prisma__menu_infoClient<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Menu_infos.
     * @param {menu_infoDeleteManyArgs} args - Arguments to filter Menu_infos to delete.
     * @example
     * // Delete a few Menu_infos
     * const { count } = await prisma.menu_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menu_infoDeleteManyArgs>(args?: SelectSubset<T, menu_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_infos
     * const menu_info = await prisma.menu_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menu_infoUpdateManyArgs>(args: SelectSubset<T, menu_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu_info.
     * @param {menu_infoUpsertArgs} args - Arguments to update or create a Menu_info.
     * @example
     * // Update or create a Menu_info
     * const menu_info = await prisma.menu_info.upsert({
     *   create: {
     *     // ... data to create a Menu_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_info we want to update
     *   }
     * })
     */
    upsert<T extends menu_infoUpsertArgs>(args: SelectSubset<T, menu_infoUpsertArgs<ExtArgs>>): Prisma__menu_infoClient<$Result.GetResult<Prisma.$menu_infoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Menu_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_infoCountArgs} args - Arguments to filter Menu_infos to count.
     * @example
     * // Count the number of Menu_infos
     * const count = await prisma.menu_info.count({
     *   where: {
     *     // ... the filter for the Menu_infos we want to count
     *   }
     * })
    **/
    count<T extends menu_infoCountArgs>(
      args?: Subset<T, menu_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Menu_infoAggregateArgs>(args: Subset<T, Menu_infoAggregateArgs>): Prisma.PrismaPromise<GetMenu_infoAggregateType<T>>

    /**
     * Group by Menu_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends menu_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menu_infoGroupByArgs['orderBy'] }
        : { orderBy?: menu_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, menu_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu_info model
   */
  readonly fields: menu_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menu_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the menu_info model
   */ 
  interface menu_infoFieldRefs {
    readonly id: FieldRef<"menu_info", 'Int'>
    readonly parent_menu_code: FieldRef<"menu_info", 'String'>
    readonly menu_code: FieldRef<"menu_info", 'String'>
    readonly menu_url: FieldRef<"menu_info", 'String'>
    readonly icon: FieldRef<"menu_info", 'String'>
    readonly sort: FieldRef<"menu_info", 'Int'>
    readonly use_yn: FieldRef<"menu_info", 'Boolean'>
    readonly visible_yn: FieldRef<"menu_info", 'Boolean'>
    readonly description: FieldRef<"menu_info", 'String'>
    readonly is_deleted: FieldRef<"menu_info", 'Boolean'>
    readonly create_at: FieldRef<"menu_info", 'DateTime'>
    readonly update_at: FieldRef<"menu_info", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * menu_info findUnique
   */
  export type menu_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
    /**
     * Filter, which menu_info to fetch.
     */
    where: menu_infoWhereUniqueInput
  }

  /**
   * menu_info findUniqueOrThrow
   */
  export type menu_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
    /**
     * Filter, which menu_info to fetch.
     */
    where: menu_infoWhereUniqueInput
  }

  /**
   * menu_info findFirst
   */
  export type menu_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
    /**
     * Filter, which menu_info to fetch.
     */
    where?: menu_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_infos to fetch.
     */
    orderBy?: menu_infoOrderByWithRelationInput | menu_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_infos.
     */
    cursor?: menu_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_infos.
     */
    distinct?: Menu_infoScalarFieldEnum | Menu_infoScalarFieldEnum[]
  }

  /**
   * menu_info findFirstOrThrow
   */
  export type menu_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
    /**
     * Filter, which menu_info to fetch.
     */
    where?: menu_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_infos to fetch.
     */
    orderBy?: menu_infoOrderByWithRelationInput | menu_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_infos.
     */
    cursor?: menu_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_infos.
     */
    distinct?: Menu_infoScalarFieldEnum | Menu_infoScalarFieldEnum[]
  }

  /**
   * menu_info findMany
   */
  export type menu_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
    /**
     * Filter, which menu_infos to fetch.
     */
    where?: menu_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_infos to fetch.
     */
    orderBy?: menu_infoOrderByWithRelationInput | menu_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_infos.
     */
    cursor?: menu_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_infos.
     */
    skip?: number
    distinct?: Menu_infoScalarFieldEnum | Menu_infoScalarFieldEnum[]
  }

  /**
   * menu_info create
   */
  export type menu_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
    /**
     * The data needed to create a menu_info.
     */
    data: XOR<menu_infoCreateInput, menu_infoUncheckedCreateInput>
  }

  /**
   * menu_info createMany
   */
  export type menu_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menu_infos.
     */
    data: menu_infoCreateManyInput | menu_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_info createManyAndReturn
   */
  export type menu_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many menu_infos.
     */
    data: menu_infoCreateManyInput | menu_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_info update
   */
  export type menu_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
    /**
     * The data needed to update a menu_info.
     */
    data: XOR<menu_infoUpdateInput, menu_infoUncheckedUpdateInput>
    /**
     * Choose, which menu_info to update.
     */
    where: menu_infoWhereUniqueInput
  }

  /**
   * menu_info updateMany
   */
  export type menu_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menu_infos.
     */
    data: XOR<menu_infoUpdateManyMutationInput, menu_infoUncheckedUpdateManyInput>
    /**
     * Filter which menu_infos to update
     */
    where?: menu_infoWhereInput
  }

  /**
   * menu_info upsert
   */
  export type menu_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
    /**
     * The filter to search for the menu_info to update in case it exists.
     */
    where: menu_infoWhereUniqueInput
    /**
     * In case the menu_info found by the `where` argument doesn't exist, create a new menu_info with this data.
     */
    create: XOR<menu_infoCreateInput, menu_infoUncheckedCreateInput>
    /**
     * In case the menu_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_infoUpdateInput, menu_infoUncheckedUpdateInput>
  }

  /**
   * menu_info delete
   */
  export type menu_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
    /**
     * Filter which menu_info to delete.
     */
    where: menu_infoWhereUniqueInput
  }

  /**
   * menu_info deleteMany
   */
  export type menu_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_infos to delete
     */
    where?: menu_infoWhereInput
  }

  /**
   * menu_info without action
   */
  export type menu_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_info
     */
    select?: menu_infoSelect<ExtArgs> | null
  }


  /**
   * Model root_class
   */

  export type AggregateRoot_class = {
    _count: Root_classCountAggregateOutputType | null
    _avg: Root_classAvgAggregateOutputType | null
    _sum: Root_classSumAggregateOutputType | null
    _min: Root_classMinAggregateOutputType | null
    _max: Root_classMaxAggregateOutputType | null
  }

  export type Root_classAvgAggregateOutputType = {
    id: number | null
  }

  export type Root_classSumAggregateOutputType = {
    id: number | null
  }

  export type Root_classMinAggregateOutputType = {
    id: number | null
    root_class_code: string | null
    name: string | null
  }

  export type Root_classMaxAggregateOutputType = {
    id: number | null
    root_class_code: string | null
    name: string | null
  }

  export type Root_classCountAggregateOutputType = {
    id: number
    root_class_code: number
    name: number
    _all: number
  }


  export type Root_classAvgAggregateInputType = {
    id?: true
  }

  export type Root_classSumAggregateInputType = {
    id?: true
  }

  export type Root_classMinAggregateInputType = {
    id?: true
    root_class_code?: true
    name?: true
  }

  export type Root_classMaxAggregateInputType = {
    id?: true
    root_class_code?: true
    name?: true
  }

  export type Root_classCountAggregateInputType = {
    id?: true
    root_class_code?: true
    name?: true
    _all?: true
  }

  export type Root_classAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which root_class to aggregate.
     */
    where?: root_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of root_classes to fetch.
     */
    orderBy?: root_classOrderByWithRelationInput | root_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: root_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` root_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` root_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned root_classes
    **/
    _count?: true | Root_classCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Root_classAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Root_classSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Root_classMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Root_classMaxAggregateInputType
  }

  export type GetRoot_classAggregateType<T extends Root_classAggregateArgs> = {
        [P in keyof T & keyof AggregateRoot_class]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoot_class[P]>
      : GetScalarType<T[P], AggregateRoot_class[P]>
  }




  export type root_classGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: root_classWhereInput
    orderBy?: root_classOrderByWithAggregationInput | root_classOrderByWithAggregationInput[]
    by: Root_classScalarFieldEnum[] | Root_classScalarFieldEnum
    having?: root_classScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Root_classCountAggregateInputType | true
    _avg?: Root_classAvgAggregateInputType
    _sum?: Root_classSumAggregateInputType
    _min?: Root_classMinAggregateInputType
    _max?: Root_classMaxAggregateInputType
  }

  export type Root_classGroupByOutputType = {
    id: number
    root_class_code: string
    name: string
    _count: Root_classCountAggregateOutputType | null
    _avg: Root_classAvgAggregateOutputType | null
    _sum: Root_classSumAggregateOutputType | null
    _min: Root_classMinAggregateOutputType | null
    _max: Root_classMaxAggregateOutputType | null
  }

  type GetRoot_classGroupByPayload<T extends root_classGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Root_classGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Root_classGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Root_classGroupByOutputType[P]>
            : GetScalarType<T[P], Root_classGroupByOutputType[P]>
        }
      >
    >


  export type root_classSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    root_class_code?: boolean
    name?: boolean
    jobs?: boolean | root_class$jobsArgs<ExtArgs>
    _count?: boolean | Root_classCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["root_class"]>

  export type root_classSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    root_class_code?: boolean
    name?: boolean
  }, ExtArgs["result"]["root_class"]>

  export type root_classSelectScalar = {
    id?: boolean
    root_class_code?: boolean
    name?: boolean
  }

  export type root_classInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | root_class$jobsArgs<ExtArgs>
    _count?: boolean | Root_classCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type root_classIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $root_classPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "root_class"
    objects: {
      jobs: Prisma.$jobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      root_class_code: string
      name: string
    }, ExtArgs["result"]["root_class"]>
    composites: {}
  }

  type root_classGetPayload<S extends boolean | null | undefined | root_classDefaultArgs> = $Result.GetResult<Prisma.$root_classPayload, S>

  type root_classCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<root_classFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Root_classCountAggregateInputType | true
    }

  export interface root_classDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['root_class'], meta: { name: 'root_class' } }
    /**
     * Find zero or one Root_class that matches the filter.
     * @param {root_classFindUniqueArgs} args - Arguments to find a Root_class
     * @example
     * // Get one Root_class
     * const root_class = await prisma.root_class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends root_classFindUniqueArgs>(args: SelectSubset<T, root_classFindUniqueArgs<ExtArgs>>): Prisma__root_classClient<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Root_class that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {root_classFindUniqueOrThrowArgs} args - Arguments to find a Root_class
     * @example
     * // Get one Root_class
     * const root_class = await prisma.root_class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends root_classFindUniqueOrThrowArgs>(args: SelectSubset<T, root_classFindUniqueOrThrowArgs<ExtArgs>>): Prisma__root_classClient<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Root_class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {root_classFindFirstArgs} args - Arguments to find a Root_class
     * @example
     * // Get one Root_class
     * const root_class = await prisma.root_class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends root_classFindFirstArgs>(args?: SelectSubset<T, root_classFindFirstArgs<ExtArgs>>): Prisma__root_classClient<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Root_class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {root_classFindFirstOrThrowArgs} args - Arguments to find a Root_class
     * @example
     * // Get one Root_class
     * const root_class = await prisma.root_class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends root_classFindFirstOrThrowArgs>(args?: SelectSubset<T, root_classFindFirstOrThrowArgs<ExtArgs>>): Prisma__root_classClient<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Root_classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {root_classFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Root_classes
     * const root_classes = await prisma.root_class.findMany()
     * 
     * // Get first 10 Root_classes
     * const root_classes = await prisma.root_class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const root_classWithIdOnly = await prisma.root_class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends root_classFindManyArgs>(args?: SelectSubset<T, root_classFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Root_class.
     * @param {root_classCreateArgs} args - Arguments to create a Root_class.
     * @example
     * // Create one Root_class
     * const Root_class = await prisma.root_class.create({
     *   data: {
     *     // ... data to create a Root_class
     *   }
     * })
     * 
     */
    create<T extends root_classCreateArgs>(args: SelectSubset<T, root_classCreateArgs<ExtArgs>>): Prisma__root_classClient<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Root_classes.
     * @param {root_classCreateManyArgs} args - Arguments to create many Root_classes.
     * @example
     * // Create many Root_classes
     * const root_class = await prisma.root_class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends root_classCreateManyArgs>(args?: SelectSubset<T, root_classCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Root_classes and returns the data saved in the database.
     * @param {root_classCreateManyAndReturnArgs} args - Arguments to create many Root_classes.
     * @example
     * // Create many Root_classes
     * const root_class = await prisma.root_class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Root_classes and only return the `id`
     * const root_classWithIdOnly = await prisma.root_class.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends root_classCreateManyAndReturnArgs>(args?: SelectSubset<T, root_classCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Root_class.
     * @param {root_classDeleteArgs} args - Arguments to delete one Root_class.
     * @example
     * // Delete one Root_class
     * const Root_class = await prisma.root_class.delete({
     *   where: {
     *     // ... filter to delete one Root_class
     *   }
     * })
     * 
     */
    delete<T extends root_classDeleteArgs>(args: SelectSubset<T, root_classDeleteArgs<ExtArgs>>): Prisma__root_classClient<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Root_class.
     * @param {root_classUpdateArgs} args - Arguments to update one Root_class.
     * @example
     * // Update one Root_class
     * const root_class = await prisma.root_class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends root_classUpdateArgs>(args: SelectSubset<T, root_classUpdateArgs<ExtArgs>>): Prisma__root_classClient<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Root_classes.
     * @param {root_classDeleteManyArgs} args - Arguments to filter Root_classes to delete.
     * @example
     * // Delete a few Root_classes
     * const { count } = await prisma.root_class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends root_classDeleteManyArgs>(args?: SelectSubset<T, root_classDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Root_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {root_classUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Root_classes
     * const root_class = await prisma.root_class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends root_classUpdateManyArgs>(args: SelectSubset<T, root_classUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Root_class.
     * @param {root_classUpsertArgs} args - Arguments to update or create a Root_class.
     * @example
     * // Update or create a Root_class
     * const root_class = await prisma.root_class.upsert({
     *   create: {
     *     // ... data to create a Root_class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Root_class we want to update
     *   }
     * })
     */
    upsert<T extends root_classUpsertArgs>(args: SelectSubset<T, root_classUpsertArgs<ExtArgs>>): Prisma__root_classClient<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Root_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {root_classCountArgs} args - Arguments to filter Root_classes to count.
     * @example
     * // Count the number of Root_classes
     * const count = await prisma.root_class.count({
     *   where: {
     *     // ... the filter for the Root_classes we want to count
     *   }
     * })
    **/
    count<T extends root_classCountArgs>(
      args?: Subset<T, root_classCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Root_classCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Root_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Root_classAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Root_classAggregateArgs>(args: Subset<T, Root_classAggregateArgs>): Prisma.PrismaPromise<GetRoot_classAggregateType<T>>

    /**
     * Group by Root_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {root_classGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends root_classGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: root_classGroupByArgs['orderBy'] }
        : { orderBy?: root_classGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, root_classGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoot_classGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the root_class model
   */
  readonly fields: root_classFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for root_class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__root_classClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends root_class$jobsArgs<ExtArgs> = {}>(args?: Subset<T, root_class$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the root_class model
   */ 
  interface root_classFieldRefs {
    readonly id: FieldRef<"root_class", 'Int'>
    readonly root_class_code: FieldRef<"root_class", 'String'>
    readonly name: FieldRef<"root_class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * root_class findUnique
   */
  export type root_classFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
    /**
     * Filter, which root_class to fetch.
     */
    where: root_classWhereUniqueInput
  }

  /**
   * root_class findUniqueOrThrow
   */
  export type root_classFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
    /**
     * Filter, which root_class to fetch.
     */
    where: root_classWhereUniqueInput
  }

  /**
   * root_class findFirst
   */
  export type root_classFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
    /**
     * Filter, which root_class to fetch.
     */
    where?: root_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of root_classes to fetch.
     */
    orderBy?: root_classOrderByWithRelationInput | root_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for root_classes.
     */
    cursor?: root_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` root_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` root_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of root_classes.
     */
    distinct?: Root_classScalarFieldEnum | Root_classScalarFieldEnum[]
  }

  /**
   * root_class findFirstOrThrow
   */
  export type root_classFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
    /**
     * Filter, which root_class to fetch.
     */
    where?: root_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of root_classes to fetch.
     */
    orderBy?: root_classOrderByWithRelationInput | root_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for root_classes.
     */
    cursor?: root_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` root_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` root_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of root_classes.
     */
    distinct?: Root_classScalarFieldEnum | Root_classScalarFieldEnum[]
  }

  /**
   * root_class findMany
   */
  export type root_classFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
    /**
     * Filter, which root_classes to fetch.
     */
    where?: root_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of root_classes to fetch.
     */
    orderBy?: root_classOrderByWithRelationInput | root_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing root_classes.
     */
    cursor?: root_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` root_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` root_classes.
     */
    skip?: number
    distinct?: Root_classScalarFieldEnum | Root_classScalarFieldEnum[]
  }

  /**
   * root_class create
   */
  export type root_classCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
    /**
     * The data needed to create a root_class.
     */
    data: XOR<root_classCreateInput, root_classUncheckedCreateInput>
  }

  /**
   * root_class createMany
   */
  export type root_classCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many root_classes.
     */
    data: root_classCreateManyInput | root_classCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * root_class createManyAndReturn
   */
  export type root_classCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many root_classes.
     */
    data: root_classCreateManyInput | root_classCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * root_class update
   */
  export type root_classUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
    /**
     * The data needed to update a root_class.
     */
    data: XOR<root_classUpdateInput, root_classUncheckedUpdateInput>
    /**
     * Choose, which root_class to update.
     */
    where: root_classWhereUniqueInput
  }

  /**
   * root_class updateMany
   */
  export type root_classUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update root_classes.
     */
    data: XOR<root_classUpdateManyMutationInput, root_classUncheckedUpdateManyInput>
    /**
     * Filter which root_classes to update
     */
    where?: root_classWhereInput
  }

  /**
   * root_class upsert
   */
  export type root_classUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
    /**
     * The filter to search for the root_class to update in case it exists.
     */
    where: root_classWhereUniqueInput
    /**
     * In case the root_class found by the `where` argument doesn't exist, create a new root_class with this data.
     */
    create: XOR<root_classCreateInput, root_classUncheckedCreateInput>
    /**
     * In case the root_class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<root_classUpdateInput, root_classUncheckedUpdateInput>
  }

  /**
   * root_class delete
   */
  export type root_classDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
    /**
     * Filter which root_class to delete.
     */
    where: root_classWhereUniqueInput
  }

  /**
   * root_class deleteMany
   */
  export type root_classDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which root_classes to delete
     */
    where?: root_classWhereInput
  }

  /**
   * root_class.jobs
   */
  export type root_class$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    where?: jobWhereInput
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    cursor?: jobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * root_class without action
   */
  export type root_classDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the root_class
     */
    select?: root_classSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: root_classInclude<ExtArgs> | null
  }


  /**
   * Model job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
    req_job: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    req_job: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    job_code: string | null
    name: string | null
    req_job: number | null
    root_class_code: string | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    job_code: string | null
    name: string | null
    req_job: number | null
    root_class_code: string | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    job_code: number
    name: number
    req_job: number
    root_class_code: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    req_job?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    req_job?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    job_code?: true
    name?: true
    req_job?: true
    root_class_code?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    job_code?: true
    name?: true
    req_job?: true
    root_class_code?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    job_code?: true
    name?: true
    req_job?: true
    root_class_code?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job to aggregate.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type jobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput
    orderBy?: jobOrderByWithAggregationInput | jobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: jobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    job_code: string
    name: string
    req_job: number
    root_class_code: string
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends jobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type jobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_code?: boolean
    name?: boolean
    req_job?: boolean
    root_class_code?: boolean
    root_class?: boolean | root_classDefaultArgs<ExtArgs>
    skills?: boolean | job$skillsArgs<ExtArgs>
    ark_grid_core?: boolean | job$ark_grid_coreArgs<ExtArgs>
    ark_grid_combination?: boolean | job$ark_grid_combinationArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type jobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_code?: boolean
    name?: boolean
    req_job?: boolean
    root_class_code?: boolean
    root_class?: boolean | root_classDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type jobSelectScalar = {
    id?: boolean
    job_code?: boolean
    name?: boolean
    req_job?: boolean
    root_class_code?: boolean
  }

  export type jobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    root_class?: boolean | root_classDefaultArgs<ExtArgs>
    skills?: boolean | job$skillsArgs<ExtArgs>
    ark_grid_core?: boolean | job$ark_grid_coreArgs<ExtArgs>
    ark_grid_combination?: boolean | job$ark_grid_combinationArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type jobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    root_class?: boolean | root_classDefaultArgs<ExtArgs>
  }

  export type $jobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job"
    objects: {
      root_class: Prisma.$root_classPayload<ExtArgs>
      skills: Prisma.$skillPayload<ExtArgs>[]
      ark_grid_core: Prisma.$ark_grid_corePayload<ExtArgs>[]
      ark_grid_combination: Prisma.$ark_grid_combinationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_code: string
      name: string
      req_job: number
      root_class_code: string
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type jobGetPayload<S extends boolean | null | undefined | jobDefaultArgs> = $Result.GetResult<Prisma.$jobPayload, S>

  type jobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface jobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job'], meta: { name: 'job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {jobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobFindUniqueArgs>(args: SelectSubset<T, jobFindUniqueArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {jobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobFindUniqueOrThrowArgs>(args: SelectSubset<T, jobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobFindFirstArgs>(args?: SelectSubset<T, jobFindFirstArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobFindFirstOrThrowArgs>(args?: SelectSubset<T, jobFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobFindManyArgs>(args?: SelectSubset<T, jobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Job.
     * @param {jobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends jobCreateArgs>(args: SelectSubset<T, jobCreateArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jobs.
     * @param {jobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobCreateManyArgs>(args?: SelectSubset<T, jobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {jobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jobCreateManyAndReturnArgs>(args?: SelectSubset<T, jobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Job.
     * @param {jobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends jobDeleteArgs>(args: SelectSubset<T, jobDeleteArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Job.
     * @param {jobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobUpdateArgs>(args: SelectSubset<T, jobUpdateArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {jobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobDeleteManyArgs>(args?: SelectSubset<T, jobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobUpdateManyArgs>(args: SelectSubset<T, jobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {jobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends jobUpsertArgs>(args: SelectSubset<T, jobUpsertArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobCountArgs>(
      args?: Subset<T, jobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobGroupByArgs['orderBy'] }
        : { orderBy?: jobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job model
   */
  readonly fields: jobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    root_class<T extends root_classDefaultArgs<ExtArgs> = {}>(args?: Subset<T, root_classDefaultArgs<ExtArgs>>): Prisma__root_classClient<$Result.GetResult<Prisma.$root_classPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    skills<T extends job$skillsArgs<ExtArgs> = {}>(args?: Subset<T, job$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany"> | Null>
    ark_grid_core<T extends job$ark_grid_coreArgs<ExtArgs> = {}>(args?: Subset<T, job$ark_grid_coreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "findMany"> | Null>
    ark_grid_combination<T extends job$ark_grid_combinationArgs<ExtArgs> = {}>(args?: Subset<T, job$ark_grid_combinationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job model
   */ 
  interface jobFieldRefs {
    readonly id: FieldRef<"job", 'Int'>
    readonly job_code: FieldRef<"job", 'String'>
    readonly name: FieldRef<"job", 'String'>
    readonly req_job: FieldRef<"job", 'Int'>
    readonly root_class_code: FieldRef<"job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * job findUnique
   */
  export type jobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job findUniqueOrThrow
   */
  export type jobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job findFirst
   */
  export type jobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * job findFirstOrThrow
   */
  export type jobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * job findMany
   */
  export type jobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * job create
   */
  export type jobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The data needed to create a job.
     */
    data: XOR<jobCreateInput, jobUncheckedCreateInput>
  }

  /**
   * job createMany
   */
  export type jobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job createManyAndReturn
   */
  export type jobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * job update
   */
  export type jobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The data needed to update a job.
     */
    data: XOR<jobUpdateInput, jobUncheckedUpdateInput>
    /**
     * Choose, which job to update.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job updateMany
   */
  export type jobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobWhereInput
  }

  /**
   * job upsert
   */
  export type jobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The filter to search for the job to update in case it exists.
     */
    where: jobWhereUniqueInput
    /**
     * In case the job found by the `where` argument doesn't exist, create a new job with this data.
     */
    create: XOR<jobCreateInput, jobUncheckedCreateInput>
    /**
     * In case the job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobUpdateInput, jobUncheckedUpdateInput>
  }

  /**
   * job delete
   */
  export type jobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter which job to delete.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job deleteMany
   */
  export type jobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobWhereInput
  }

  /**
   * job.skills
   */
  export type job$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    where?: skillWhereInput
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    cursor?: skillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * job.ark_grid_core
   */
  export type job$ark_grid_coreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    where?: ark_grid_coreWhereInput
    orderBy?: ark_grid_coreOrderByWithRelationInput | ark_grid_coreOrderByWithRelationInput[]
    cursor?: ark_grid_coreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ark_grid_coreScalarFieldEnum | Ark_grid_coreScalarFieldEnum[]
  }

  /**
   * job.ark_grid_combination
   */
  export type job$ark_grid_combinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    where?: ark_grid_combinationWhereInput
    orderBy?: ark_grid_combinationOrderByWithRelationInput | ark_grid_combinationOrderByWithRelationInput[]
    cursor?: ark_grid_combinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ark_grid_combinationScalarFieldEnum | Ark_grid_combinationScalarFieldEnum[]
  }

  /**
   * job without action
   */
  export type jobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobInclude<ExtArgs> | null
  }


  /**
   * Model skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    category: string | null
    icon_url: string | null
    description: string | null
    description_default: string | null
    neutralization: string | null
    attack_type: string | null
    super_armor: string | null
    counter: string | null
    part_destruct: string | null
    tags: string | null
    job_code: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    category: string | null
    icon_url: string | null
    description: string | null
    description_default: string | null
    neutralization: string | null
    attack_type: string | null
    super_armor: string | null
    counter: string | null
    part_destruct: string | null
    tags: string | null
    job_code: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    type: number
    category: number
    icon_url: number
    description: number
    description_default: number
    neutralization: number
    attack_type: number
    super_armor: number
    counter: number
    part_destruct: number
    tags: number
    job_code: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    category?: true
    icon_url?: true
    description?: true
    description_default?: true
    neutralization?: true
    attack_type?: true
    super_armor?: true
    counter?: true
    part_destruct?: true
    tags?: true
    job_code?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    category?: true
    icon_url?: true
    description?: true
    description_default?: true
    neutralization?: true
    attack_type?: true
    super_armor?: true
    counter?: true
    part_destruct?: true
    tags?: true
    job_code?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    category?: true
    icon_url?: true
    description?: true
    description_default?: true
    neutralization?: true
    attack_type?: true
    super_armor?: true
    counter?: true
    part_destruct?: true
    tags?: true
    job_code?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill to aggregate.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
    orderBy?: skillOrderByWithAggregationInput | skillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    type: string
    category: string
    icon_url: string
    description: string
    description_default: string
    neutralization: string | null
    attack_type: string | null
    super_armor: string | null
    counter: string | null
    part_destruct: string | null
    tags: string | null
    job_code: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    icon_url?: boolean
    description?: boolean
    description_default?: boolean
    neutralization?: boolean
    attack_type?: boolean
    super_armor?: boolean
    counter?: boolean
    part_destruct?: boolean
    tags?: boolean
    job_code?: boolean
    job?: boolean | jobDefaultArgs<ExtArgs>
    tripods?: boolean | skill$tripodsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    icon_url?: boolean
    description?: boolean
    description_default?: boolean
    neutralization?: boolean
    attack_type?: boolean
    super_armor?: boolean
    counter?: boolean
    part_destruct?: boolean
    tags?: boolean
    job_code?: boolean
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    icon_url?: boolean
    description?: boolean
    description_default?: boolean
    neutralization?: boolean
    attack_type?: boolean
    super_armor?: boolean
    counter?: boolean
    part_destruct?: boolean
    tags?: boolean
    job_code?: boolean
  }

  export type skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>
    tripods?: boolean | skill$tripodsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type skillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>
  }

  export type $skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill"
    objects: {
      job: Prisma.$jobPayload<ExtArgs>
      tripods: Prisma.$tripodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      category: string
      icon_url: string
      description: string
      description_default: string
      neutralization: string | null
      attack_type: string | null
      super_armor: string | null
      counter: string | null
      part_destruct: string | null
      tags: string | null
      job_code: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type skillGetPayload<S extends boolean | null | undefined | skillDefaultArgs> = $Result.GetResult<Prisma.$skillPayload, S>

  type skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<skillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill'], meta: { name: 'skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {skillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillFindUniqueArgs>(args: SelectSubset<T, skillFindUniqueArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {skillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillFindUniqueOrThrowArgs>(args: SelectSubset<T, skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillFindFirstArgs>(args?: SelectSubset<T, skillFindFirstArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillFindFirstOrThrowArgs>(args?: SelectSubset<T, skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skillFindManyArgs>(args?: SelectSubset<T, skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Skill.
     * @param {skillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends skillCreateArgs>(args: SelectSubset<T, skillCreateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Skills.
     * @param {skillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillCreateManyArgs>(args?: SelectSubset<T, skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {skillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skillCreateManyAndReturnArgs>(args?: SelectSubset<T, skillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Skill.
     * @param {skillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends skillDeleteArgs>(args: SelectSubset<T, skillDeleteArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Skill.
     * @param {skillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillUpdateArgs>(args: SelectSubset<T, skillUpdateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {skillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillDeleteManyArgs>(args?: SelectSubset<T, skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillUpdateManyArgs>(args: SelectSubset<T, skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {skillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends skillUpsertArgs>(args: SelectSubset<T, skillUpsertArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillCountArgs>(
      args?: Subset<T, skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillGroupByArgs['orderBy'] }
        : { orderBy?: skillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill model
   */
  readonly fields: skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tripods<T extends skill$tripodsArgs<ExtArgs> = {}>(args?: Subset<T, skill$tripodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the skill model
   */ 
  interface skillFieldRefs {
    readonly id: FieldRef<"skill", 'Int'>
    readonly name: FieldRef<"skill", 'String'>
    readonly type: FieldRef<"skill", 'String'>
    readonly category: FieldRef<"skill", 'String'>
    readonly icon_url: FieldRef<"skill", 'String'>
    readonly description: FieldRef<"skill", 'String'>
    readonly description_default: FieldRef<"skill", 'String'>
    readonly neutralization: FieldRef<"skill", 'String'>
    readonly attack_type: FieldRef<"skill", 'String'>
    readonly super_armor: FieldRef<"skill", 'String'>
    readonly counter: FieldRef<"skill", 'String'>
    readonly part_destruct: FieldRef<"skill", 'String'>
    readonly tags: FieldRef<"skill", 'String'>
    readonly job_code: FieldRef<"skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * skill findUnique
   */
  export type skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findUniqueOrThrow
   */
  export type skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findFirst
   */
  export type skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findFirstOrThrow
   */
  export type skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findMany
   */
  export type skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill create
   */
  export type skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to create a skill.
     */
    data: XOR<skillCreateInput, skillUncheckedCreateInput>
  }

  /**
   * skill createMany
   */
  export type skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill createManyAndReturn
   */
  export type skillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * skill update
   */
  export type skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to update a skill.
     */
    data: XOR<skillUpdateInput, skillUncheckedUpdateInput>
    /**
     * Choose, which skill to update.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill updateMany
   */
  export type skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
  }

  /**
   * skill upsert
   */
  export type skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The filter to search for the skill to update in case it exists.
     */
    where: skillWhereUniqueInput
    /**
     * In case the skill found by the `where` argument doesn't exist, create a new skill with this data.
     */
    create: XOR<skillCreateInput, skillUncheckedCreateInput>
    /**
     * In case the skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillUpdateInput, skillUncheckedUpdateInput>
  }

  /**
   * skill delete
   */
  export type skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter which skill to delete.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill deleteMany
   */
  export type skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillWhereInput
  }

  /**
   * skill.tripods
   */
  export type skill$tripodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    where?: tripodWhereInput
    orderBy?: tripodOrderByWithRelationInput | tripodOrderByWithRelationInput[]
    cursor?: tripodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripodScalarFieldEnum | TripodScalarFieldEnum[]
  }

  /**
   * skill without action
   */
  export type skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
  }


  /**
   * Model tripod
   */

  export type AggregateTripod = {
    _count: TripodCountAggregateOutputType | null
    _avg: TripodAvgAggregateOutputType | null
    _sum: TripodSumAggregateOutputType | null
    _min: TripodMinAggregateOutputType | null
    _max: TripodMaxAggregateOutputType | null
  }

  export type TripodAvgAggregateOutputType = {
    id: number | null
    tier: number | null
    sort: number | null
    level_limit: number | null
    skill_id: number | null
  }

  export type TripodSumAggregateOutputType = {
    id: number | null
    tier: number | null
    sort: number | null
    level_limit: number | null
    skill_id: number | null
  }

  export type TripodMinAggregateOutputType = {
    id: number | null
    tier: number | null
    sort: number | null
    name: string | null
    icon_url: string | null
    level_limit: number | null
    description: string | null
    skill_id: number | null
  }

  export type TripodMaxAggregateOutputType = {
    id: number | null
    tier: number | null
    sort: number | null
    name: string | null
    icon_url: string | null
    level_limit: number | null
    description: string | null
    skill_id: number | null
  }

  export type TripodCountAggregateOutputType = {
    id: number
    tier: number
    sort: number
    name: number
    icon_url: number
    level_limit: number
    description: number
    skill_id: number
    _all: number
  }


  export type TripodAvgAggregateInputType = {
    id?: true
    tier?: true
    sort?: true
    level_limit?: true
    skill_id?: true
  }

  export type TripodSumAggregateInputType = {
    id?: true
    tier?: true
    sort?: true
    level_limit?: true
    skill_id?: true
  }

  export type TripodMinAggregateInputType = {
    id?: true
    tier?: true
    sort?: true
    name?: true
    icon_url?: true
    level_limit?: true
    description?: true
    skill_id?: true
  }

  export type TripodMaxAggregateInputType = {
    id?: true
    tier?: true
    sort?: true
    name?: true
    icon_url?: true
    level_limit?: true
    description?: true
    skill_id?: true
  }

  export type TripodCountAggregateInputType = {
    id?: true
    tier?: true
    sort?: true
    name?: true
    icon_url?: true
    level_limit?: true
    description?: true
    skill_id?: true
    _all?: true
  }

  export type TripodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tripod to aggregate.
     */
    where?: tripodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tripods to fetch.
     */
    orderBy?: tripodOrderByWithRelationInput | tripodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tripodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tripods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tripods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tripods
    **/
    _count?: true | TripodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripodMaxAggregateInputType
  }

  export type GetTripodAggregateType<T extends TripodAggregateArgs> = {
        [P in keyof T & keyof AggregateTripod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripod[P]>
      : GetScalarType<T[P], AggregateTripod[P]>
  }




  export type tripodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripodWhereInput
    orderBy?: tripodOrderByWithAggregationInput | tripodOrderByWithAggregationInput[]
    by: TripodScalarFieldEnum[] | TripodScalarFieldEnum
    having?: tripodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripodCountAggregateInputType | true
    _avg?: TripodAvgAggregateInputType
    _sum?: TripodSumAggregateInputType
    _min?: TripodMinAggregateInputType
    _max?: TripodMaxAggregateInputType
  }

  export type TripodGroupByOutputType = {
    id: number
    tier: number
    sort: number
    name: string
    icon_url: string
    level_limit: number
    description: string
    skill_id: number
    _count: TripodCountAggregateOutputType | null
    _avg: TripodAvgAggregateOutputType | null
    _sum: TripodSumAggregateOutputType | null
    _min: TripodMinAggregateOutputType | null
    _max: TripodMaxAggregateOutputType | null
  }

  type GetTripodGroupByPayload<T extends tripodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripodGroupByOutputType[P]>
            : GetScalarType<T[P], TripodGroupByOutputType[P]>
        }
      >
    >


  export type tripodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tier?: boolean
    sort?: boolean
    name?: boolean
    icon_url?: boolean
    level_limit?: boolean
    description?: boolean
    skill_id?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripod"]>

  export type tripodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tier?: boolean
    sort?: boolean
    name?: boolean
    icon_url?: boolean
    level_limit?: boolean
    description?: boolean
    skill_id?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripod"]>

  export type tripodSelectScalar = {
    id?: boolean
    tier?: boolean
    sort?: boolean
    name?: boolean
    icon_url?: boolean
    level_limit?: boolean
    description?: boolean
    skill_id?: boolean
  }

  export type tripodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type tripodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }

  export type $tripodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tripod"
    objects: {
      skill: Prisma.$skillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tier: number
      sort: number
      name: string
      icon_url: string
      level_limit: number
      description: string
      skill_id: number
    }, ExtArgs["result"]["tripod"]>
    composites: {}
  }

  type tripodGetPayload<S extends boolean | null | undefined | tripodDefaultArgs> = $Result.GetResult<Prisma.$tripodPayload, S>

  type tripodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tripodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripodCountAggregateInputType | true
    }

  export interface tripodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tripod'], meta: { name: 'tripod' } }
    /**
     * Find zero or one Tripod that matches the filter.
     * @param {tripodFindUniqueArgs} args - Arguments to find a Tripod
     * @example
     * // Get one Tripod
     * const tripod = await prisma.tripod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tripodFindUniqueArgs>(args: SelectSubset<T, tripodFindUniqueArgs<ExtArgs>>): Prisma__tripodClient<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tripod that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tripodFindUniqueOrThrowArgs} args - Arguments to find a Tripod
     * @example
     * // Get one Tripod
     * const tripod = await prisma.tripod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tripodFindUniqueOrThrowArgs>(args: SelectSubset<T, tripodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tripodClient<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tripod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripodFindFirstArgs} args - Arguments to find a Tripod
     * @example
     * // Get one Tripod
     * const tripod = await prisma.tripod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tripodFindFirstArgs>(args?: SelectSubset<T, tripodFindFirstArgs<ExtArgs>>): Prisma__tripodClient<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tripod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripodFindFirstOrThrowArgs} args - Arguments to find a Tripod
     * @example
     * // Get one Tripod
     * const tripod = await prisma.tripod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tripodFindFirstOrThrowArgs>(args?: SelectSubset<T, tripodFindFirstOrThrowArgs<ExtArgs>>): Prisma__tripodClient<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tripods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tripods
     * const tripods = await prisma.tripod.findMany()
     * 
     * // Get first 10 Tripods
     * const tripods = await prisma.tripod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripodWithIdOnly = await prisma.tripod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tripodFindManyArgs>(args?: SelectSubset<T, tripodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tripod.
     * @param {tripodCreateArgs} args - Arguments to create a Tripod.
     * @example
     * // Create one Tripod
     * const Tripod = await prisma.tripod.create({
     *   data: {
     *     // ... data to create a Tripod
     *   }
     * })
     * 
     */
    create<T extends tripodCreateArgs>(args: SelectSubset<T, tripodCreateArgs<ExtArgs>>): Prisma__tripodClient<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tripods.
     * @param {tripodCreateManyArgs} args - Arguments to create many Tripods.
     * @example
     * // Create many Tripods
     * const tripod = await prisma.tripod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tripodCreateManyArgs>(args?: SelectSubset<T, tripodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tripods and returns the data saved in the database.
     * @param {tripodCreateManyAndReturnArgs} args - Arguments to create many Tripods.
     * @example
     * // Create many Tripods
     * const tripod = await prisma.tripod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tripods and only return the `id`
     * const tripodWithIdOnly = await prisma.tripod.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tripodCreateManyAndReturnArgs>(args?: SelectSubset<T, tripodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tripod.
     * @param {tripodDeleteArgs} args - Arguments to delete one Tripod.
     * @example
     * // Delete one Tripod
     * const Tripod = await prisma.tripod.delete({
     *   where: {
     *     // ... filter to delete one Tripod
     *   }
     * })
     * 
     */
    delete<T extends tripodDeleteArgs>(args: SelectSubset<T, tripodDeleteArgs<ExtArgs>>): Prisma__tripodClient<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tripod.
     * @param {tripodUpdateArgs} args - Arguments to update one Tripod.
     * @example
     * // Update one Tripod
     * const tripod = await prisma.tripod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tripodUpdateArgs>(args: SelectSubset<T, tripodUpdateArgs<ExtArgs>>): Prisma__tripodClient<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tripods.
     * @param {tripodDeleteManyArgs} args - Arguments to filter Tripods to delete.
     * @example
     * // Delete a few Tripods
     * const { count } = await prisma.tripod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tripodDeleteManyArgs>(args?: SelectSubset<T, tripodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tripods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tripods
     * const tripod = await prisma.tripod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tripodUpdateManyArgs>(args: SelectSubset<T, tripodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tripod.
     * @param {tripodUpsertArgs} args - Arguments to update or create a Tripod.
     * @example
     * // Update or create a Tripod
     * const tripod = await prisma.tripod.upsert({
     *   create: {
     *     // ... data to create a Tripod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tripod we want to update
     *   }
     * })
     */
    upsert<T extends tripodUpsertArgs>(args: SelectSubset<T, tripodUpsertArgs<ExtArgs>>): Prisma__tripodClient<$Result.GetResult<Prisma.$tripodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tripods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripodCountArgs} args - Arguments to filter Tripods to count.
     * @example
     * // Count the number of Tripods
     * const count = await prisma.tripod.count({
     *   where: {
     *     // ... the filter for the Tripods we want to count
     *   }
     * })
    **/
    count<T extends tripodCountArgs>(
      args?: Subset<T, tripodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tripod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripodAggregateArgs>(args: Subset<T, TripodAggregateArgs>): Prisma.PrismaPromise<GetTripodAggregateType<T>>

    /**
     * Group by Tripod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tripodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tripodGroupByArgs['orderBy'] }
        : { orderBy?: tripodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tripodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tripod model
   */
  readonly fields: tripodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tripod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tripodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tripod model
   */ 
  interface tripodFieldRefs {
    readonly id: FieldRef<"tripod", 'Int'>
    readonly tier: FieldRef<"tripod", 'Int'>
    readonly sort: FieldRef<"tripod", 'Int'>
    readonly name: FieldRef<"tripod", 'String'>
    readonly icon_url: FieldRef<"tripod", 'String'>
    readonly level_limit: FieldRef<"tripod", 'Int'>
    readonly description: FieldRef<"tripod", 'String'>
    readonly skill_id: FieldRef<"tripod", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tripod findUnique
   */
  export type tripodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    /**
     * Filter, which tripod to fetch.
     */
    where: tripodWhereUniqueInput
  }

  /**
   * tripod findUniqueOrThrow
   */
  export type tripodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    /**
     * Filter, which tripod to fetch.
     */
    where: tripodWhereUniqueInput
  }

  /**
   * tripod findFirst
   */
  export type tripodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    /**
     * Filter, which tripod to fetch.
     */
    where?: tripodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tripods to fetch.
     */
    orderBy?: tripodOrderByWithRelationInput | tripodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tripods.
     */
    cursor?: tripodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tripods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tripods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tripods.
     */
    distinct?: TripodScalarFieldEnum | TripodScalarFieldEnum[]
  }

  /**
   * tripod findFirstOrThrow
   */
  export type tripodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    /**
     * Filter, which tripod to fetch.
     */
    where?: tripodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tripods to fetch.
     */
    orderBy?: tripodOrderByWithRelationInput | tripodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tripods.
     */
    cursor?: tripodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tripods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tripods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tripods.
     */
    distinct?: TripodScalarFieldEnum | TripodScalarFieldEnum[]
  }

  /**
   * tripod findMany
   */
  export type tripodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    /**
     * Filter, which tripods to fetch.
     */
    where?: tripodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tripods to fetch.
     */
    orderBy?: tripodOrderByWithRelationInput | tripodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tripods.
     */
    cursor?: tripodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tripods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tripods.
     */
    skip?: number
    distinct?: TripodScalarFieldEnum | TripodScalarFieldEnum[]
  }

  /**
   * tripod create
   */
  export type tripodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    /**
     * The data needed to create a tripod.
     */
    data: XOR<tripodCreateInput, tripodUncheckedCreateInput>
  }

  /**
   * tripod createMany
   */
  export type tripodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tripods.
     */
    data: tripodCreateManyInput | tripodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tripod createManyAndReturn
   */
  export type tripodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many tripods.
     */
    data: tripodCreateManyInput | tripodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tripod update
   */
  export type tripodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    /**
     * The data needed to update a tripod.
     */
    data: XOR<tripodUpdateInput, tripodUncheckedUpdateInput>
    /**
     * Choose, which tripod to update.
     */
    where: tripodWhereUniqueInput
  }

  /**
   * tripod updateMany
   */
  export type tripodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tripods.
     */
    data: XOR<tripodUpdateManyMutationInput, tripodUncheckedUpdateManyInput>
    /**
     * Filter which tripods to update
     */
    where?: tripodWhereInput
  }

  /**
   * tripod upsert
   */
  export type tripodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    /**
     * The filter to search for the tripod to update in case it exists.
     */
    where: tripodWhereUniqueInput
    /**
     * In case the tripod found by the `where` argument doesn't exist, create a new tripod with this data.
     */
    create: XOR<tripodCreateInput, tripodUncheckedCreateInput>
    /**
     * In case the tripod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tripodUpdateInput, tripodUncheckedUpdateInput>
  }

  /**
   * tripod delete
   */
  export type tripodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
    /**
     * Filter which tripod to delete.
     */
    where: tripodWhereUniqueInput
  }

  /**
   * tripod deleteMany
   */
  export type tripodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tripods to delete
     */
    where?: tripodWhereInput
  }

  /**
   * tripod without action
   */
  export type tripodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tripod
     */
    select?: tripodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripodInclude<ExtArgs> | null
  }


  /**
   * Model ark_grid_core
   */

  export type AggregateArk_grid_core = {
    _count: Ark_grid_coreCountAggregateOutputType | null
    _avg: Ark_grid_coreAvgAggregateOutputType | null
    _sum: Ark_grid_coreSumAggregateOutputType | null
    _min: Ark_grid_coreMinAggregateOutputType | null
    _max: Ark_grid_coreMaxAggregateOutputType | null
  }

  export type Ark_grid_coreAvgAggregateOutputType = {
    id: number | null
  }

  export type Ark_grid_coreSumAggregateOutputType = {
    id: number | null
  }

  export type Ark_grid_coreMinAggregateOutputType = {
    id: number | null
    job_code: string | null
    engraving: string | null
    category: string | null
    name: string | null
    skill_effect: string | null
    trigger_effect: string | null
    base_effect: string | null
  }

  export type Ark_grid_coreMaxAggregateOutputType = {
    id: number | null
    job_code: string | null
    engraving: string | null
    category: string | null
    name: string | null
    skill_effect: string | null
    trigger_effect: string | null
    base_effect: string | null
  }

  export type Ark_grid_coreCountAggregateOutputType = {
    id: number
    job_code: number
    engraving: number
    category: number
    name: number
    skill_effect: number
    trigger_effect: number
    base_effect: number
    _all: number
  }


  export type Ark_grid_coreAvgAggregateInputType = {
    id?: true
  }

  export type Ark_grid_coreSumAggregateInputType = {
    id?: true
  }

  export type Ark_grid_coreMinAggregateInputType = {
    id?: true
    job_code?: true
    engraving?: true
    category?: true
    name?: true
    skill_effect?: true
    trigger_effect?: true
    base_effect?: true
  }

  export type Ark_grid_coreMaxAggregateInputType = {
    id?: true
    job_code?: true
    engraving?: true
    category?: true
    name?: true
    skill_effect?: true
    trigger_effect?: true
    base_effect?: true
  }

  export type Ark_grid_coreCountAggregateInputType = {
    id?: true
    job_code?: true
    engraving?: true
    category?: true
    name?: true
    skill_effect?: true
    trigger_effect?: true
    base_effect?: true
    _all?: true
  }

  export type Ark_grid_coreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ark_grid_core to aggregate.
     */
    where?: ark_grid_coreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ark_grid_cores to fetch.
     */
    orderBy?: ark_grid_coreOrderByWithRelationInput | ark_grid_coreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ark_grid_coreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ark_grid_cores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ark_grid_cores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ark_grid_cores
    **/
    _count?: true | Ark_grid_coreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ark_grid_coreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ark_grid_coreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ark_grid_coreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ark_grid_coreMaxAggregateInputType
  }

  export type GetArk_grid_coreAggregateType<T extends Ark_grid_coreAggregateArgs> = {
        [P in keyof T & keyof AggregateArk_grid_core]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArk_grid_core[P]>
      : GetScalarType<T[P], AggregateArk_grid_core[P]>
  }




  export type ark_grid_coreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ark_grid_coreWhereInput
    orderBy?: ark_grid_coreOrderByWithAggregationInput | ark_grid_coreOrderByWithAggregationInput[]
    by: Ark_grid_coreScalarFieldEnum[] | Ark_grid_coreScalarFieldEnum
    having?: ark_grid_coreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ark_grid_coreCountAggregateInputType | true
    _avg?: Ark_grid_coreAvgAggregateInputType
    _sum?: Ark_grid_coreSumAggregateInputType
    _min?: Ark_grid_coreMinAggregateInputType
    _max?: Ark_grid_coreMaxAggregateInputType
  }

  export type Ark_grid_coreGroupByOutputType = {
    id: number
    job_code: string
    engraving: string
    category: string
    name: string
    skill_effect: string | null
    trigger_effect: string | null
    base_effect: string | null
    _count: Ark_grid_coreCountAggregateOutputType | null
    _avg: Ark_grid_coreAvgAggregateOutputType | null
    _sum: Ark_grid_coreSumAggregateOutputType | null
    _min: Ark_grid_coreMinAggregateOutputType | null
    _max: Ark_grid_coreMaxAggregateOutputType | null
  }

  type GetArk_grid_coreGroupByPayload<T extends ark_grid_coreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ark_grid_coreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ark_grid_coreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ark_grid_coreGroupByOutputType[P]>
            : GetScalarType<T[P], Ark_grid_coreGroupByOutputType[P]>
        }
      >
    >


  export type ark_grid_coreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_code?: boolean
    engraving?: boolean
    category?: boolean
    name?: boolean
    skill_effect?: boolean
    trigger_effect?: boolean
    base_effect?: boolean
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ark_grid_core"]>

  export type ark_grid_coreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_code?: boolean
    engraving?: boolean
    category?: boolean
    name?: boolean
    skill_effect?: boolean
    trigger_effect?: boolean
    base_effect?: boolean
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ark_grid_core"]>

  export type ark_grid_coreSelectScalar = {
    id?: boolean
    job_code?: boolean
    engraving?: boolean
    category?: boolean
    name?: boolean
    skill_effect?: boolean
    trigger_effect?: boolean
    base_effect?: boolean
  }

  export type ark_grid_coreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>
  }
  export type ark_grid_coreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>
  }

  export type $ark_grid_corePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ark_grid_core"
    objects: {
      job: Prisma.$jobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_code: string
      engraving: string
      category: string
      name: string
      skill_effect: string | null
      trigger_effect: string | null
      base_effect: string | null
    }, ExtArgs["result"]["ark_grid_core"]>
    composites: {}
  }

  type ark_grid_coreGetPayload<S extends boolean | null | undefined | ark_grid_coreDefaultArgs> = $Result.GetResult<Prisma.$ark_grid_corePayload, S>

  type ark_grid_coreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ark_grid_coreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ark_grid_coreCountAggregateInputType | true
    }

  export interface ark_grid_coreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ark_grid_core'], meta: { name: 'ark_grid_core' } }
    /**
     * Find zero or one Ark_grid_core that matches the filter.
     * @param {ark_grid_coreFindUniqueArgs} args - Arguments to find a Ark_grid_core
     * @example
     * // Get one Ark_grid_core
     * const ark_grid_core = await prisma.ark_grid_core.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ark_grid_coreFindUniqueArgs>(args: SelectSubset<T, ark_grid_coreFindUniqueArgs<ExtArgs>>): Prisma__ark_grid_coreClient<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ark_grid_core that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ark_grid_coreFindUniqueOrThrowArgs} args - Arguments to find a Ark_grid_core
     * @example
     * // Get one Ark_grid_core
     * const ark_grid_core = await prisma.ark_grid_core.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ark_grid_coreFindUniqueOrThrowArgs>(args: SelectSubset<T, ark_grid_coreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ark_grid_coreClient<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ark_grid_core that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_coreFindFirstArgs} args - Arguments to find a Ark_grid_core
     * @example
     * // Get one Ark_grid_core
     * const ark_grid_core = await prisma.ark_grid_core.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ark_grid_coreFindFirstArgs>(args?: SelectSubset<T, ark_grid_coreFindFirstArgs<ExtArgs>>): Prisma__ark_grid_coreClient<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ark_grid_core that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_coreFindFirstOrThrowArgs} args - Arguments to find a Ark_grid_core
     * @example
     * // Get one Ark_grid_core
     * const ark_grid_core = await prisma.ark_grid_core.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ark_grid_coreFindFirstOrThrowArgs>(args?: SelectSubset<T, ark_grid_coreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ark_grid_coreClient<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ark_grid_cores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_coreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ark_grid_cores
     * const ark_grid_cores = await prisma.ark_grid_core.findMany()
     * 
     * // Get first 10 Ark_grid_cores
     * const ark_grid_cores = await prisma.ark_grid_core.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ark_grid_coreWithIdOnly = await prisma.ark_grid_core.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ark_grid_coreFindManyArgs>(args?: SelectSubset<T, ark_grid_coreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ark_grid_core.
     * @param {ark_grid_coreCreateArgs} args - Arguments to create a Ark_grid_core.
     * @example
     * // Create one Ark_grid_core
     * const Ark_grid_core = await prisma.ark_grid_core.create({
     *   data: {
     *     // ... data to create a Ark_grid_core
     *   }
     * })
     * 
     */
    create<T extends ark_grid_coreCreateArgs>(args: SelectSubset<T, ark_grid_coreCreateArgs<ExtArgs>>): Prisma__ark_grid_coreClient<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ark_grid_cores.
     * @param {ark_grid_coreCreateManyArgs} args - Arguments to create many Ark_grid_cores.
     * @example
     * // Create many Ark_grid_cores
     * const ark_grid_core = await prisma.ark_grid_core.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ark_grid_coreCreateManyArgs>(args?: SelectSubset<T, ark_grid_coreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ark_grid_cores and returns the data saved in the database.
     * @param {ark_grid_coreCreateManyAndReturnArgs} args - Arguments to create many Ark_grid_cores.
     * @example
     * // Create many Ark_grid_cores
     * const ark_grid_core = await prisma.ark_grid_core.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ark_grid_cores and only return the `id`
     * const ark_grid_coreWithIdOnly = await prisma.ark_grid_core.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ark_grid_coreCreateManyAndReturnArgs>(args?: SelectSubset<T, ark_grid_coreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ark_grid_core.
     * @param {ark_grid_coreDeleteArgs} args - Arguments to delete one Ark_grid_core.
     * @example
     * // Delete one Ark_grid_core
     * const Ark_grid_core = await prisma.ark_grid_core.delete({
     *   where: {
     *     // ... filter to delete one Ark_grid_core
     *   }
     * })
     * 
     */
    delete<T extends ark_grid_coreDeleteArgs>(args: SelectSubset<T, ark_grid_coreDeleteArgs<ExtArgs>>): Prisma__ark_grid_coreClient<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ark_grid_core.
     * @param {ark_grid_coreUpdateArgs} args - Arguments to update one Ark_grid_core.
     * @example
     * // Update one Ark_grid_core
     * const ark_grid_core = await prisma.ark_grid_core.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ark_grid_coreUpdateArgs>(args: SelectSubset<T, ark_grid_coreUpdateArgs<ExtArgs>>): Prisma__ark_grid_coreClient<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ark_grid_cores.
     * @param {ark_grid_coreDeleteManyArgs} args - Arguments to filter Ark_grid_cores to delete.
     * @example
     * // Delete a few Ark_grid_cores
     * const { count } = await prisma.ark_grid_core.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ark_grid_coreDeleteManyArgs>(args?: SelectSubset<T, ark_grid_coreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ark_grid_cores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_coreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ark_grid_cores
     * const ark_grid_core = await prisma.ark_grid_core.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ark_grid_coreUpdateManyArgs>(args: SelectSubset<T, ark_grid_coreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ark_grid_core.
     * @param {ark_grid_coreUpsertArgs} args - Arguments to update or create a Ark_grid_core.
     * @example
     * // Update or create a Ark_grid_core
     * const ark_grid_core = await prisma.ark_grid_core.upsert({
     *   create: {
     *     // ... data to create a Ark_grid_core
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ark_grid_core we want to update
     *   }
     * })
     */
    upsert<T extends ark_grid_coreUpsertArgs>(args: SelectSubset<T, ark_grid_coreUpsertArgs<ExtArgs>>): Prisma__ark_grid_coreClient<$Result.GetResult<Prisma.$ark_grid_corePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ark_grid_cores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_coreCountArgs} args - Arguments to filter Ark_grid_cores to count.
     * @example
     * // Count the number of Ark_grid_cores
     * const count = await prisma.ark_grid_core.count({
     *   where: {
     *     // ... the filter for the Ark_grid_cores we want to count
     *   }
     * })
    **/
    count<T extends ark_grid_coreCountArgs>(
      args?: Subset<T, ark_grid_coreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ark_grid_coreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ark_grid_core.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ark_grid_coreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ark_grid_coreAggregateArgs>(args: Subset<T, Ark_grid_coreAggregateArgs>): Prisma.PrismaPromise<GetArk_grid_coreAggregateType<T>>

    /**
     * Group by Ark_grid_core.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_coreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ark_grid_coreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ark_grid_coreGroupByArgs['orderBy'] }
        : { orderBy?: ark_grid_coreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ark_grid_coreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArk_grid_coreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ark_grid_core model
   */
  readonly fields: ark_grid_coreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ark_grid_core.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ark_grid_coreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ark_grid_core model
   */ 
  interface ark_grid_coreFieldRefs {
    readonly id: FieldRef<"ark_grid_core", 'Int'>
    readonly job_code: FieldRef<"ark_grid_core", 'String'>
    readonly engraving: FieldRef<"ark_grid_core", 'String'>
    readonly category: FieldRef<"ark_grid_core", 'String'>
    readonly name: FieldRef<"ark_grid_core", 'String'>
    readonly skill_effect: FieldRef<"ark_grid_core", 'String'>
    readonly trigger_effect: FieldRef<"ark_grid_core", 'String'>
    readonly base_effect: FieldRef<"ark_grid_core", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ark_grid_core findUnique
   */
  export type ark_grid_coreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_core to fetch.
     */
    where: ark_grid_coreWhereUniqueInput
  }

  /**
   * ark_grid_core findUniqueOrThrow
   */
  export type ark_grid_coreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_core to fetch.
     */
    where: ark_grid_coreWhereUniqueInput
  }

  /**
   * ark_grid_core findFirst
   */
  export type ark_grid_coreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_core to fetch.
     */
    where?: ark_grid_coreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ark_grid_cores to fetch.
     */
    orderBy?: ark_grid_coreOrderByWithRelationInput | ark_grid_coreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ark_grid_cores.
     */
    cursor?: ark_grid_coreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ark_grid_cores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ark_grid_cores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ark_grid_cores.
     */
    distinct?: Ark_grid_coreScalarFieldEnum | Ark_grid_coreScalarFieldEnum[]
  }

  /**
   * ark_grid_core findFirstOrThrow
   */
  export type ark_grid_coreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_core to fetch.
     */
    where?: ark_grid_coreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ark_grid_cores to fetch.
     */
    orderBy?: ark_grid_coreOrderByWithRelationInput | ark_grid_coreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ark_grid_cores.
     */
    cursor?: ark_grid_coreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ark_grid_cores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ark_grid_cores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ark_grid_cores.
     */
    distinct?: Ark_grid_coreScalarFieldEnum | Ark_grid_coreScalarFieldEnum[]
  }

  /**
   * ark_grid_core findMany
   */
  export type ark_grid_coreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_cores to fetch.
     */
    where?: ark_grid_coreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ark_grid_cores to fetch.
     */
    orderBy?: ark_grid_coreOrderByWithRelationInput | ark_grid_coreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ark_grid_cores.
     */
    cursor?: ark_grid_coreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ark_grid_cores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ark_grid_cores.
     */
    skip?: number
    distinct?: Ark_grid_coreScalarFieldEnum | Ark_grid_coreScalarFieldEnum[]
  }

  /**
   * ark_grid_core create
   */
  export type ark_grid_coreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    /**
     * The data needed to create a ark_grid_core.
     */
    data: XOR<ark_grid_coreCreateInput, ark_grid_coreUncheckedCreateInput>
  }

  /**
   * ark_grid_core createMany
   */
  export type ark_grid_coreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ark_grid_cores.
     */
    data: ark_grid_coreCreateManyInput | ark_grid_coreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ark_grid_core createManyAndReturn
   */
  export type ark_grid_coreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ark_grid_cores.
     */
    data: ark_grid_coreCreateManyInput | ark_grid_coreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ark_grid_core update
   */
  export type ark_grid_coreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    /**
     * The data needed to update a ark_grid_core.
     */
    data: XOR<ark_grid_coreUpdateInput, ark_grid_coreUncheckedUpdateInput>
    /**
     * Choose, which ark_grid_core to update.
     */
    where: ark_grid_coreWhereUniqueInput
  }

  /**
   * ark_grid_core updateMany
   */
  export type ark_grid_coreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ark_grid_cores.
     */
    data: XOR<ark_grid_coreUpdateManyMutationInput, ark_grid_coreUncheckedUpdateManyInput>
    /**
     * Filter which ark_grid_cores to update
     */
    where?: ark_grid_coreWhereInput
  }

  /**
   * ark_grid_core upsert
   */
  export type ark_grid_coreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    /**
     * The filter to search for the ark_grid_core to update in case it exists.
     */
    where: ark_grid_coreWhereUniqueInput
    /**
     * In case the ark_grid_core found by the `where` argument doesn't exist, create a new ark_grid_core with this data.
     */
    create: XOR<ark_grid_coreCreateInput, ark_grid_coreUncheckedCreateInput>
    /**
     * In case the ark_grid_core was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ark_grid_coreUpdateInput, ark_grid_coreUncheckedUpdateInput>
  }

  /**
   * ark_grid_core delete
   */
  export type ark_grid_coreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
    /**
     * Filter which ark_grid_core to delete.
     */
    where: ark_grid_coreWhereUniqueInput
  }

  /**
   * ark_grid_core deleteMany
   */
  export type ark_grid_coreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ark_grid_cores to delete
     */
    where?: ark_grid_coreWhereInput
  }

  /**
   * ark_grid_core without action
   */
  export type ark_grid_coreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_core
     */
    select?: ark_grid_coreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_coreInclude<ExtArgs> | null
  }


  /**
   * Model ark_grid_combination
   */

  export type AggregateArk_grid_combination = {
    _count: Ark_grid_combinationCountAggregateOutputType | null
    _avg: Ark_grid_combinationAvgAggregateOutputType | null
    _sum: Ark_grid_combinationSumAggregateOutputType | null
    _min: Ark_grid_combinationMinAggregateOutputType | null
    _max: Ark_grid_combinationMaxAggregateOutputType | null
  }

  export type Ark_grid_combinationAvgAggregateOutputType = {
    id: number | null
  }

  export type Ark_grid_combinationSumAggregateOutputType = {
    id: number | null
  }

  export type Ark_grid_combinationMinAggregateOutputType = {
    id: number | null
    job_code: string | null
    engraving: string | null
    core_combination: string | null
    key_skills: string | null
    operation: string | null
  }

  export type Ark_grid_combinationMaxAggregateOutputType = {
    id: number | null
    job_code: string | null
    engraving: string | null
    core_combination: string | null
    key_skills: string | null
    operation: string | null
  }

  export type Ark_grid_combinationCountAggregateOutputType = {
    id: number
    job_code: number
    engraving: number
    core_combination: number
    key_skills: number
    operation: number
    _all: number
  }


  export type Ark_grid_combinationAvgAggregateInputType = {
    id?: true
  }

  export type Ark_grid_combinationSumAggregateInputType = {
    id?: true
  }

  export type Ark_grid_combinationMinAggregateInputType = {
    id?: true
    job_code?: true
    engraving?: true
    core_combination?: true
    key_skills?: true
    operation?: true
  }

  export type Ark_grid_combinationMaxAggregateInputType = {
    id?: true
    job_code?: true
    engraving?: true
    core_combination?: true
    key_skills?: true
    operation?: true
  }

  export type Ark_grid_combinationCountAggregateInputType = {
    id?: true
    job_code?: true
    engraving?: true
    core_combination?: true
    key_skills?: true
    operation?: true
    _all?: true
  }

  export type Ark_grid_combinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ark_grid_combination to aggregate.
     */
    where?: ark_grid_combinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ark_grid_combinations to fetch.
     */
    orderBy?: ark_grid_combinationOrderByWithRelationInput | ark_grid_combinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ark_grid_combinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ark_grid_combinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ark_grid_combinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ark_grid_combinations
    **/
    _count?: true | Ark_grid_combinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ark_grid_combinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ark_grid_combinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ark_grid_combinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ark_grid_combinationMaxAggregateInputType
  }

  export type GetArk_grid_combinationAggregateType<T extends Ark_grid_combinationAggregateArgs> = {
        [P in keyof T & keyof AggregateArk_grid_combination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArk_grid_combination[P]>
      : GetScalarType<T[P], AggregateArk_grid_combination[P]>
  }




  export type ark_grid_combinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ark_grid_combinationWhereInput
    orderBy?: ark_grid_combinationOrderByWithAggregationInput | ark_grid_combinationOrderByWithAggregationInput[]
    by: Ark_grid_combinationScalarFieldEnum[] | Ark_grid_combinationScalarFieldEnum
    having?: ark_grid_combinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ark_grid_combinationCountAggregateInputType | true
    _avg?: Ark_grid_combinationAvgAggregateInputType
    _sum?: Ark_grid_combinationSumAggregateInputType
    _min?: Ark_grid_combinationMinAggregateInputType
    _max?: Ark_grid_combinationMaxAggregateInputType
  }

  export type Ark_grid_combinationGroupByOutputType = {
    id: number
    job_code: string
    engraving: string
    core_combination: string
    key_skills: string
    operation: string
    _count: Ark_grid_combinationCountAggregateOutputType | null
    _avg: Ark_grid_combinationAvgAggregateOutputType | null
    _sum: Ark_grid_combinationSumAggregateOutputType | null
    _min: Ark_grid_combinationMinAggregateOutputType | null
    _max: Ark_grid_combinationMaxAggregateOutputType | null
  }

  type GetArk_grid_combinationGroupByPayload<T extends ark_grid_combinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ark_grid_combinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ark_grid_combinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ark_grid_combinationGroupByOutputType[P]>
            : GetScalarType<T[P], Ark_grid_combinationGroupByOutputType[P]>
        }
      >
    >


  export type ark_grid_combinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_code?: boolean
    engraving?: boolean
    core_combination?: boolean
    key_skills?: boolean
    operation?: boolean
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ark_grid_combination"]>

  export type ark_grid_combinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_code?: boolean
    engraving?: boolean
    core_combination?: boolean
    key_skills?: boolean
    operation?: boolean
    job?: boolean | jobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ark_grid_combination"]>

  export type ark_grid_combinationSelectScalar = {
    id?: boolean
    job_code?: boolean
    engraving?: boolean
    core_combination?: boolean
    key_skills?: boolean
    operation?: boolean
  }

  export type ark_grid_combinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>
  }
  export type ark_grid_combinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>
  }

  export type $ark_grid_combinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ark_grid_combination"
    objects: {
      job: Prisma.$jobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_code: string
      engraving: string
      core_combination: string
      key_skills: string
      operation: string
    }, ExtArgs["result"]["ark_grid_combination"]>
    composites: {}
  }

  type ark_grid_combinationGetPayload<S extends boolean | null | undefined | ark_grid_combinationDefaultArgs> = $Result.GetResult<Prisma.$ark_grid_combinationPayload, S>

  type ark_grid_combinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ark_grid_combinationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ark_grid_combinationCountAggregateInputType | true
    }

  export interface ark_grid_combinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ark_grid_combination'], meta: { name: 'ark_grid_combination' } }
    /**
     * Find zero or one Ark_grid_combination that matches the filter.
     * @param {ark_grid_combinationFindUniqueArgs} args - Arguments to find a Ark_grid_combination
     * @example
     * // Get one Ark_grid_combination
     * const ark_grid_combination = await prisma.ark_grid_combination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ark_grid_combinationFindUniqueArgs>(args: SelectSubset<T, ark_grid_combinationFindUniqueArgs<ExtArgs>>): Prisma__ark_grid_combinationClient<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ark_grid_combination that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ark_grid_combinationFindUniqueOrThrowArgs} args - Arguments to find a Ark_grid_combination
     * @example
     * // Get one Ark_grid_combination
     * const ark_grid_combination = await prisma.ark_grid_combination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ark_grid_combinationFindUniqueOrThrowArgs>(args: SelectSubset<T, ark_grid_combinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ark_grid_combinationClient<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ark_grid_combination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_combinationFindFirstArgs} args - Arguments to find a Ark_grid_combination
     * @example
     * // Get one Ark_grid_combination
     * const ark_grid_combination = await prisma.ark_grid_combination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ark_grid_combinationFindFirstArgs>(args?: SelectSubset<T, ark_grid_combinationFindFirstArgs<ExtArgs>>): Prisma__ark_grid_combinationClient<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ark_grid_combination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_combinationFindFirstOrThrowArgs} args - Arguments to find a Ark_grid_combination
     * @example
     * // Get one Ark_grid_combination
     * const ark_grid_combination = await prisma.ark_grid_combination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ark_grid_combinationFindFirstOrThrowArgs>(args?: SelectSubset<T, ark_grid_combinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ark_grid_combinationClient<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ark_grid_combinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_combinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ark_grid_combinations
     * const ark_grid_combinations = await prisma.ark_grid_combination.findMany()
     * 
     * // Get first 10 Ark_grid_combinations
     * const ark_grid_combinations = await prisma.ark_grid_combination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ark_grid_combinationWithIdOnly = await prisma.ark_grid_combination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ark_grid_combinationFindManyArgs>(args?: SelectSubset<T, ark_grid_combinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ark_grid_combination.
     * @param {ark_grid_combinationCreateArgs} args - Arguments to create a Ark_grid_combination.
     * @example
     * // Create one Ark_grid_combination
     * const Ark_grid_combination = await prisma.ark_grid_combination.create({
     *   data: {
     *     // ... data to create a Ark_grid_combination
     *   }
     * })
     * 
     */
    create<T extends ark_grid_combinationCreateArgs>(args: SelectSubset<T, ark_grid_combinationCreateArgs<ExtArgs>>): Prisma__ark_grid_combinationClient<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ark_grid_combinations.
     * @param {ark_grid_combinationCreateManyArgs} args - Arguments to create many Ark_grid_combinations.
     * @example
     * // Create many Ark_grid_combinations
     * const ark_grid_combination = await prisma.ark_grid_combination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ark_grid_combinationCreateManyArgs>(args?: SelectSubset<T, ark_grid_combinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ark_grid_combinations and returns the data saved in the database.
     * @param {ark_grid_combinationCreateManyAndReturnArgs} args - Arguments to create many Ark_grid_combinations.
     * @example
     * // Create many Ark_grid_combinations
     * const ark_grid_combination = await prisma.ark_grid_combination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ark_grid_combinations and only return the `id`
     * const ark_grid_combinationWithIdOnly = await prisma.ark_grid_combination.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ark_grid_combinationCreateManyAndReturnArgs>(args?: SelectSubset<T, ark_grid_combinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ark_grid_combination.
     * @param {ark_grid_combinationDeleteArgs} args - Arguments to delete one Ark_grid_combination.
     * @example
     * // Delete one Ark_grid_combination
     * const Ark_grid_combination = await prisma.ark_grid_combination.delete({
     *   where: {
     *     // ... filter to delete one Ark_grid_combination
     *   }
     * })
     * 
     */
    delete<T extends ark_grid_combinationDeleteArgs>(args: SelectSubset<T, ark_grid_combinationDeleteArgs<ExtArgs>>): Prisma__ark_grid_combinationClient<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ark_grid_combination.
     * @param {ark_grid_combinationUpdateArgs} args - Arguments to update one Ark_grid_combination.
     * @example
     * // Update one Ark_grid_combination
     * const ark_grid_combination = await prisma.ark_grid_combination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ark_grid_combinationUpdateArgs>(args: SelectSubset<T, ark_grid_combinationUpdateArgs<ExtArgs>>): Prisma__ark_grid_combinationClient<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ark_grid_combinations.
     * @param {ark_grid_combinationDeleteManyArgs} args - Arguments to filter Ark_grid_combinations to delete.
     * @example
     * // Delete a few Ark_grid_combinations
     * const { count } = await prisma.ark_grid_combination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ark_grid_combinationDeleteManyArgs>(args?: SelectSubset<T, ark_grid_combinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ark_grid_combinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_combinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ark_grid_combinations
     * const ark_grid_combination = await prisma.ark_grid_combination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ark_grid_combinationUpdateManyArgs>(args: SelectSubset<T, ark_grid_combinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ark_grid_combination.
     * @param {ark_grid_combinationUpsertArgs} args - Arguments to update or create a Ark_grid_combination.
     * @example
     * // Update or create a Ark_grid_combination
     * const ark_grid_combination = await prisma.ark_grid_combination.upsert({
     *   create: {
     *     // ... data to create a Ark_grid_combination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ark_grid_combination we want to update
     *   }
     * })
     */
    upsert<T extends ark_grid_combinationUpsertArgs>(args: SelectSubset<T, ark_grid_combinationUpsertArgs<ExtArgs>>): Prisma__ark_grid_combinationClient<$Result.GetResult<Prisma.$ark_grid_combinationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ark_grid_combinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_combinationCountArgs} args - Arguments to filter Ark_grid_combinations to count.
     * @example
     * // Count the number of Ark_grid_combinations
     * const count = await prisma.ark_grid_combination.count({
     *   where: {
     *     // ... the filter for the Ark_grid_combinations we want to count
     *   }
     * })
    **/
    count<T extends ark_grid_combinationCountArgs>(
      args?: Subset<T, ark_grid_combinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ark_grid_combinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ark_grid_combination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ark_grid_combinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ark_grid_combinationAggregateArgs>(args: Subset<T, Ark_grid_combinationAggregateArgs>): Prisma.PrismaPromise<GetArk_grid_combinationAggregateType<T>>

    /**
     * Group by Ark_grid_combination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ark_grid_combinationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ark_grid_combinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ark_grid_combinationGroupByArgs['orderBy'] }
        : { orderBy?: ark_grid_combinationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ark_grid_combinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArk_grid_combinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ark_grid_combination model
   */
  readonly fields: ark_grid_combinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ark_grid_combination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ark_grid_combinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ark_grid_combination model
   */ 
  interface ark_grid_combinationFieldRefs {
    readonly id: FieldRef<"ark_grid_combination", 'Int'>
    readonly job_code: FieldRef<"ark_grid_combination", 'String'>
    readonly engraving: FieldRef<"ark_grid_combination", 'String'>
    readonly core_combination: FieldRef<"ark_grid_combination", 'String'>
    readonly key_skills: FieldRef<"ark_grid_combination", 'String'>
    readonly operation: FieldRef<"ark_grid_combination", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ark_grid_combination findUnique
   */
  export type ark_grid_combinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_combination to fetch.
     */
    where: ark_grid_combinationWhereUniqueInput
  }

  /**
   * ark_grid_combination findUniqueOrThrow
   */
  export type ark_grid_combinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_combination to fetch.
     */
    where: ark_grid_combinationWhereUniqueInput
  }

  /**
   * ark_grid_combination findFirst
   */
  export type ark_grid_combinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_combination to fetch.
     */
    where?: ark_grid_combinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ark_grid_combinations to fetch.
     */
    orderBy?: ark_grid_combinationOrderByWithRelationInput | ark_grid_combinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ark_grid_combinations.
     */
    cursor?: ark_grid_combinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ark_grid_combinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ark_grid_combinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ark_grid_combinations.
     */
    distinct?: Ark_grid_combinationScalarFieldEnum | Ark_grid_combinationScalarFieldEnum[]
  }

  /**
   * ark_grid_combination findFirstOrThrow
   */
  export type ark_grid_combinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_combination to fetch.
     */
    where?: ark_grid_combinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ark_grid_combinations to fetch.
     */
    orderBy?: ark_grid_combinationOrderByWithRelationInput | ark_grid_combinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ark_grid_combinations.
     */
    cursor?: ark_grid_combinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ark_grid_combinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ark_grid_combinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ark_grid_combinations.
     */
    distinct?: Ark_grid_combinationScalarFieldEnum | Ark_grid_combinationScalarFieldEnum[]
  }

  /**
   * ark_grid_combination findMany
   */
  export type ark_grid_combinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    /**
     * Filter, which ark_grid_combinations to fetch.
     */
    where?: ark_grid_combinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ark_grid_combinations to fetch.
     */
    orderBy?: ark_grid_combinationOrderByWithRelationInput | ark_grid_combinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ark_grid_combinations.
     */
    cursor?: ark_grid_combinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ark_grid_combinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ark_grid_combinations.
     */
    skip?: number
    distinct?: Ark_grid_combinationScalarFieldEnum | Ark_grid_combinationScalarFieldEnum[]
  }

  /**
   * ark_grid_combination create
   */
  export type ark_grid_combinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    /**
     * The data needed to create a ark_grid_combination.
     */
    data: XOR<ark_grid_combinationCreateInput, ark_grid_combinationUncheckedCreateInput>
  }

  /**
   * ark_grid_combination createMany
   */
  export type ark_grid_combinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ark_grid_combinations.
     */
    data: ark_grid_combinationCreateManyInput | ark_grid_combinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ark_grid_combination createManyAndReturn
   */
  export type ark_grid_combinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ark_grid_combinations.
     */
    data: ark_grid_combinationCreateManyInput | ark_grid_combinationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ark_grid_combination update
   */
  export type ark_grid_combinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    /**
     * The data needed to update a ark_grid_combination.
     */
    data: XOR<ark_grid_combinationUpdateInput, ark_grid_combinationUncheckedUpdateInput>
    /**
     * Choose, which ark_grid_combination to update.
     */
    where: ark_grid_combinationWhereUniqueInput
  }

  /**
   * ark_grid_combination updateMany
   */
  export type ark_grid_combinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ark_grid_combinations.
     */
    data: XOR<ark_grid_combinationUpdateManyMutationInput, ark_grid_combinationUncheckedUpdateManyInput>
    /**
     * Filter which ark_grid_combinations to update
     */
    where?: ark_grid_combinationWhereInput
  }

  /**
   * ark_grid_combination upsert
   */
  export type ark_grid_combinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    /**
     * The filter to search for the ark_grid_combination to update in case it exists.
     */
    where: ark_grid_combinationWhereUniqueInput
    /**
     * In case the ark_grid_combination found by the `where` argument doesn't exist, create a new ark_grid_combination with this data.
     */
    create: XOR<ark_grid_combinationCreateInput, ark_grid_combinationUncheckedCreateInput>
    /**
     * In case the ark_grid_combination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ark_grid_combinationUpdateInput, ark_grid_combinationUncheckedUpdateInput>
  }

  /**
   * ark_grid_combination delete
   */
  export type ark_grid_combinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
    /**
     * Filter which ark_grid_combination to delete.
     */
    where: ark_grid_combinationWhereUniqueInput
  }

  /**
   * ark_grid_combination deleteMany
   */
  export type ark_grid_combinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ark_grid_combinations to delete
     */
    where?: ark_grid_combinationWhereInput
  }

  /**
   * ark_grid_combination without action
   */
  export type ark_grid_combinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ark_grid_combination
     */
    select?: ark_grid_combinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ark_grid_combinationInclude<ExtArgs> | null
  }


  /**
   * Model items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    id: number | null
    bundle_count: number | null
    trade_remain_cnt: number | null
    yday_avg_price: number | null
    recent_price: number | null
    current_min_price: number | null
  }

  export type ItemsSumAggregateOutputType = {
    id: number | null
    bundle_count: number | null
    trade_remain_cnt: number | null
    yday_avg_price: number | null
    recent_price: number | null
    current_min_price: number | null
  }

  export type ItemsMinAggregateOutputType = {
    id: number | null
    name: string | null
    grade: string | null
    icon: string | null
    bundle_count: number | null
    trade_remain_cnt: number | null
    yday_avg_price: number | null
    recent_price: number | null
    current_min_price: number | null
  }

  export type ItemsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    grade: string | null
    icon: string | null
    bundle_count: number | null
    trade_remain_cnt: number | null
    yday_avg_price: number | null
    recent_price: number | null
    current_min_price: number | null
  }

  export type ItemsCountAggregateOutputType = {
    id: number
    name: number
    grade: number
    icon: number
    bundle_count: number
    trade_remain_cnt: number
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    id?: true
    bundle_count?: true
    trade_remain_cnt?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
  }

  export type ItemsSumAggregateInputType = {
    id?: true
    bundle_count?: true
    trade_remain_cnt?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
  }

  export type ItemsMinAggregateInputType = {
    id?: true
    name?: true
    grade?: true
    icon?: true
    bundle_count?: true
    trade_remain_cnt?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
  }

  export type ItemsMaxAggregateInputType = {
    id?: true
    name?: true
    grade?: true
    icon?: true
    bundle_count?: true
    trade_remain_cnt?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
  }

  export type ItemsCountAggregateInputType = {
    id?: true
    name?: true
    grade?: true
    icon?: true
    bundle_count?: true
    trade_remain_cnt?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to aggregate.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithAggregationInput | itemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    id: number
    name: string
    grade: string
    icon: string
    bundle_count: number
    trade_remain_cnt: number | null
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    grade?: boolean
    icon?: boolean
    bundle_count?: boolean
    trade_remain_cnt?: boolean
    yday_avg_price?: boolean
    recent_price?: boolean
    current_min_price?: boolean
    history?: boolean | items$historyArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    grade?: boolean
    icon?: boolean
    bundle_count?: boolean
    trade_remain_cnt?: boolean
    yday_avg_price?: boolean
    recent_price?: boolean
    current_min_price?: boolean
  }, ExtArgs["result"]["items"]>

  export type itemsSelectScalar = {
    id?: boolean
    name?: boolean
    grade?: boolean
    icon?: boolean
    bundle_count?: boolean
    trade_remain_cnt?: boolean
    yday_avg_price?: boolean
    recent_price?: boolean
    current_min_price?: boolean
  }

  export type itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | items$historyArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "items"
    objects: {
      history: Prisma.$items_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      grade: string
      icon: string
      bundle_count: number
      trade_remain_cnt: number | null
      yday_avg_price: number
      recent_price: number
      current_min_price: number
    }, ExtArgs["result"]["items"]>
    composites: {}
  }

  type itemsGetPayload<S extends boolean | null | undefined | itemsDefaultArgs> = $Result.GetResult<Prisma.$itemsPayload, S>

  type itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<itemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['items'], meta: { name: 'items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {itemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemsFindUniqueArgs>(args: SelectSubset<T, itemsFindUniqueArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {itemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemsFindFirstArgs>(args?: SelectSubset<T, itemsFindFirstArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemsWithIdOnly = await prisma.items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends itemsFindManyArgs>(args?: SelectSubset<T, itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Items.
     * @param {itemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
     */
    create<T extends itemsCreateArgs>(args: SelectSubset<T, itemsCreateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Items.
     * @param {itemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemsCreateManyArgs>(args?: SelectSubset<T, itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {itemsCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemsWithIdOnly = await prisma.items.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Items.
     * @param {itemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
     */
    delete<T extends itemsDeleteArgs>(args: SelectSubset<T, itemsDeleteArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Items.
     * @param {itemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemsUpdateArgs>(args: SelectSubset<T, itemsUpdateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {itemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemsDeleteManyArgs>(args?: SelectSubset<T, itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemsUpdateManyArgs>(args: SelectSubset<T, itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Items.
     * @param {itemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
     */
    upsert<T extends itemsUpsertArgs>(args: SelectSubset<T, itemsUpsertArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemsCountArgs>(
      args?: Subset<T, itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemsGroupByArgs['orderBy'] }
        : { orderBy?: itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the items model
   */
  readonly fields: itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends items$historyArgs<ExtArgs> = {}>(args?: Subset<T, items$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the items model
   */ 
  interface itemsFieldRefs {
    readonly id: FieldRef<"items", 'Int'>
    readonly name: FieldRef<"items", 'String'>
    readonly grade: FieldRef<"items", 'String'>
    readonly icon: FieldRef<"items", 'String'>
    readonly bundle_count: FieldRef<"items", 'Int'>
    readonly trade_remain_cnt: FieldRef<"items", 'Int'>
    readonly yday_avg_price: FieldRef<"items", 'Float'>
    readonly recent_price: FieldRef<"items", 'Int'>
    readonly current_min_price: FieldRef<"items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * items findUnique
   */
  export type itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findUniqueOrThrow
   */
  export type itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findFirst
   */
  export type itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findFirstOrThrow
   */
  export type itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findMany
   */
  export type itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items create
   */
  export type itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a items.
     */
    data: XOR<itemsCreateInput, itemsUncheckedCreateInput>
  }

  /**
   * items createMany
   */
  export type itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemsCreateManyInput | itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * items createManyAndReturn
   */
  export type itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many items.
     */
    data: itemsCreateManyInput | itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * items update
   */
  export type itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a items.
     */
    data: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
    /**
     * Choose, which items to update.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items updateMany
   */
  export type itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemsWhereInput
  }

  /**
   * items upsert
   */
  export type itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the items to update in case it exists.
     */
    where: itemsWhereUniqueInput
    /**
     * In case the items found by the `where` argument doesn't exist, create a new items with this data.
     */
    create: XOR<itemsCreateInput, itemsUncheckedCreateInput>
    /**
     * In case the items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
  }

  /**
   * items delete
   */
  export type itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter which items to delete.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items deleteMany
   */
  export type itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemsWhereInput
  }

  /**
   * items.history
   */
  export type items$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    where?: items_historyWhereInput
    orderBy?: items_historyOrderByWithRelationInput | items_historyOrderByWithRelationInput[]
    cursor?: items_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Items_historyScalarFieldEnum | Items_historyScalarFieldEnum[]
  }

  /**
   * items without action
   */
  export type itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
  }


  /**
   * Model items_history
   */

  export type AggregateItems_history = {
    _count: Items_historyCountAggregateOutputType | null
    _avg: Items_historyAvgAggregateOutputType | null
    _sum: Items_historySumAggregateOutputType | null
    _min: Items_historyMinAggregateOutputType | null
    _max: Items_historyMaxAggregateOutputType | null
  }

  export type Items_historyAvgAggregateOutputType = {
    id: number | null
    item_id: number | null
    yday_avg_price: number | null
    recent_price: number | null
    current_min_price: number | null
  }

  export type Items_historySumAggregateOutputType = {
    id: number | null
    item_id: number | null
    yday_avg_price: number | null
    recent_price: number | null
    current_min_price: number | null
  }

  export type Items_historyMinAggregateOutputType = {
    id: number | null
    item_id: number | null
    yday_avg_price: number | null
    recent_price: number | null
    current_min_price: number | null
    reg_date: Date | null
  }

  export type Items_historyMaxAggregateOutputType = {
    id: number | null
    item_id: number | null
    yday_avg_price: number | null
    recent_price: number | null
    current_min_price: number | null
    reg_date: Date | null
  }

  export type Items_historyCountAggregateOutputType = {
    id: number
    item_id: number
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    reg_date: number
    _all: number
  }


  export type Items_historyAvgAggregateInputType = {
    id?: true
    item_id?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
  }

  export type Items_historySumAggregateInputType = {
    id?: true
    item_id?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
  }

  export type Items_historyMinAggregateInputType = {
    id?: true
    item_id?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
    reg_date?: true
  }

  export type Items_historyMaxAggregateInputType = {
    id?: true
    item_id?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
    reg_date?: true
  }

  export type Items_historyCountAggregateInputType = {
    id?: true
    item_id?: true
    yday_avg_price?: true
    recent_price?: true
    current_min_price?: true
    reg_date?: true
    _all?: true
  }

  export type Items_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items_history to aggregate.
     */
    where?: items_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items_histories to fetch.
     */
    orderBy?: items_historyOrderByWithRelationInput | items_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: items_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items_histories
    **/
    _count?: true | Items_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Items_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Items_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Items_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Items_historyMaxAggregateInputType
  }

  export type GetItems_historyAggregateType<T extends Items_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateItems_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems_history[P]>
      : GetScalarType<T[P], AggregateItems_history[P]>
  }




  export type items_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: items_historyWhereInput
    orderBy?: items_historyOrderByWithAggregationInput | items_historyOrderByWithAggregationInput[]
    by: Items_historyScalarFieldEnum[] | Items_historyScalarFieldEnum
    having?: items_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Items_historyCountAggregateInputType | true
    _avg?: Items_historyAvgAggregateInputType
    _sum?: Items_historySumAggregateInputType
    _min?: Items_historyMinAggregateInputType
    _max?: Items_historyMaxAggregateInputType
  }

  export type Items_historyGroupByOutputType = {
    id: number
    item_id: number
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    reg_date: Date
    _count: Items_historyCountAggregateOutputType | null
    _avg: Items_historyAvgAggregateOutputType | null
    _sum: Items_historySumAggregateOutputType | null
    _min: Items_historyMinAggregateOutputType | null
    _max: Items_historyMaxAggregateOutputType | null
  }

  type GetItems_historyGroupByPayload<T extends items_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Items_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Items_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Items_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Items_historyGroupByOutputType[P]>
        }
      >
    >


  export type items_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_id?: boolean
    yday_avg_price?: boolean
    recent_price?: boolean
    current_min_price?: boolean
    reg_date?: boolean
    item?: boolean | itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items_history"]>

  export type items_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_id?: boolean
    yday_avg_price?: boolean
    recent_price?: boolean
    current_min_price?: boolean
    reg_date?: boolean
    item?: boolean | itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items_history"]>

  export type items_historySelectScalar = {
    id?: boolean
    item_id?: boolean
    yday_avg_price?: boolean
    recent_price?: boolean
    current_min_price?: boolean
    reg_date?: boolean
  }

  export type items_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | itemsDefaultArgs<ExtArgs>
  }
  export type items_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | itemsDefaultArgs<ExtArgs>
  }

  export type $items_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "items_history"
    objects: {
      item: Prisma.$itemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      item_id: number
      yday_avg_price: number
      recent_price: number
      current_min_price: number
      reg_date: Date
    }, ExtArgs["result"]["items_history"]>
    composites: {}
  }

  type items_historyGetPayload<S extends boolean | null | undefined | items_historyDefaultArgs> = $Result.GetResult<Prisma.$items_historyPayload, S>

  type items_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<items_historyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Items_historyCountAggregateInputType | true
    }

  export interface items_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['items_history'], meta: { name: 'items_history' } }
    /**
     * Find zero or one Items_history that matches the filter.
     * @param {items_historyFindUniqueArgs} args - Arguments to find a Items_history
     * @example
     * // Get one Items_history
     * const items_history = await prisma.items_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends items_historyFindUniqueArgs>(args: SelectSubset<T, items_historyFindUniqueArgs<ExtArgs>>): Prisma__items_historyClient<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Items_history that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {items_historyFindUniqueOrThrowArgs} args - Arguments to find a Items_history
     * @example
     * // Get one Items_history
     * const items_history = await prisma.items_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends items_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, items_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__items_historyClient<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Items_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items_historyFindFirstArgs} args - Arguments to find a Items_history
     * @example
     * // Get one Items_history
     * const items_history = await prisma.items_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends items_historyFindFirstArgs>(args?: SelectSubset<T, items_historyFindFirstArgs<ExtArgs>>): Prisma__items_historyClient<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Items_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items_historyFindFirstOrThrowArgs} args - Arguments to find a Items_history
     * @example
     * // Get one Items_history
     * const items_history = await prisma.items_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends items_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, items_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__items_historyClient<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Items_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items_histories
     * const items_histories = await prisma.items_history.findMany()
     * 
     * // Get first 10 Items_histories
     * const items_histories = await prisma.items_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const items_historyWithIdOnly = await prisma.items_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends items_historyFindManyArgs>(args?: SelectSubset<T, items_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Items_history.
     * @param {items_historyCreateArgs} args - Arguments to create a Items_history.
     * @example
     * // Create one Items_history
     * const Items_history = await prisma.items_history.create({
     *   data: {
     *     // ... data to create a Items_history
     *   }
     * })
     * 
     */
    create<T extends items_historyCreateArgs>(args: SelectSubset<T, items_historyCreateArgs<ExtArgs>>): Prisma__items_historyClient<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Items_histories.
     * @param {items_historyCreateManyArgs} args - Arguments to create many Items_histories.
     * @example
     * // Create many Items_histories
     * const items_history = await prisma.items_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends items_historyCreateManyArgs>(args?: SelectSubset<T, items_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items_histories and returns the data saved in the database.
     * @param {items_historyCreateManyAndReturnArgs} args - Arguments to create many Items_histories.
     * @example
     * // Create many Items_histories
     * const items_history = await prisma.items_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items_histories and only return the `id`
     * const items_historyWithIdOnly = await prisma.items_history.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends items_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, items_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Items_history.
     * @param {items_historyDeleteArgs} args - Arguments to delete one Items_history.
     * @example
     * // Delete one Items_history
     * const Items_history = await prisma.items_history.delete({
     *   where: {
     *     // ... filter to delete one Items_history
     *   }
     * })
     * 
     */
    delete<T extends items_historyDeleteArgs>(args: SelectSubset<T, items_historyDeleteArgs<ExtArgs>>): Prisma__items_historyClient<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Items_history.
     * @param {items_historyUpdateArgs} args - Arguments to update one Items_history.
     * @example
     * // Update one Items_history
     * const items_history = await prisma.items_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends items_historyUpdateArgs>(args: SelectSubset<T, items_historyUpdateArgs<ExtArgs>>): Prisma__items_historyClient<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Items_histories.
     * @param {items_historyDeleteManyArgs} args - Arguments to filter Items_histories to delete.
     * @example
     * // Delete a few Items_histories
     * const { count } = await prisma.items_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends items_historyDeleteManyArgs>(args?: SelectSubset<T, items_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items_histories
     * const items_history = await prisma.items_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends items_historyUpdateManyArgs>(args: SelectSubset<T, items_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Items_history.
     * @param {items_historyUpsertArgs} args - Arguments to update or create a Items_history.
     * @example
     * // Update or create a Items_history
     * const items_history = await prisma.items_history.upsert({
     *   create: {
     *     // ... data to create a Items_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items_history we want to update
     *   }
     * })
     */
    upsert<T extends items_historyUpsertArgs>(args: SelectSubset<T, items_historyUpsertArgs<ExtArgs>>): Prisma__items_historyClient<$Result.GetResult<Prisma.$items_historyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Items_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items_historyCountArgs} args - Arguments to filter Items_histories to count.
     * @example
     * // Count the number of Items_histories
     * const count = await prisma.items_history.count({
     *   where: {
     *     // ... the filter for the Items_histories we want to count
     *   }
     * })
    **/
    count<T extends items_historyCountArgs>(
      args?: Subset<T, items_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Items_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Items_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Items_historyAggregateArgs>(args: Subset<T, Items_historyAggregateArgs>): Prisma.PrismaPromise<GetItems_historyAggregateType<T>>

    /**
     * Group by Items_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {items_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends items_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: items_historyGroupByArgs['orderBy'] }
        : { orderBy?: items_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, items_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItems_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the items_history model
   */
  readonly fields: items_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for items_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__items_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, itemsDefaultArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the items_history model
   */ 
  interface items_historyFieldRefs {
    readonly id: FieldRef<"items_history", 'Int'>
    readonly item_id: FieldRef<"items_history", 'Int'>
    readonly yday_avg_price: FieldRef<"items_history", 'Float'>
    readonly recent_price: FieldRef<"items_history", 'Int'>
    readonly current_min_price: FieldRef<"items_history", 'Int'>
    readonly reg_date: FieldRef<"items_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * items_history findUnique
   */
  export type items_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    /**
     * Filter, which items_history to fetch.
     */
    where: items_historyWhereUniqueInput
  }

  /**
   * items_history findUniqueOrThrow
   */
  export type items_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    /**
     * Filter, which items_history to fetch.
     */
    where: items_historyWhereUniqueInput
  }

  /**
   * items_history findFirst
   */
  export type items_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    /**
     * Filter, which items_history to fetch.
     */
    where?: items_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items_histories to fetch.
     */
    orderBy?: items_historyOrderByWithRelationInput | items_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items_histories.
     */
    cursor?: items_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items_histories.
     */
    distinct?: Items_historyScalarFieldEnum | Items_historyScalarFieldEnum[]
  }

  /**
   * items_history findFirstOrThrow
   */
  export type items_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    /**
     * Filter, which items_history to fetch.
     */
    where?: items_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items_histories to fetch.
     */
    orderBy?: items_historyOrderByWithRelationInput | items_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items_histories.
     */
    cursor?: items_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items_histories.
     */
    distinct?: Items_historyScalarFieldEnum | Items_historyScalarFieldEnum[]
  }

  /**
   * items_history findMany
   */
  export type items_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    /**
     * Filter, which items_histories to fetch.
     */
    where?: items_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items_histories to fetch.
     */
    orderBy?: items_historyOrderByWithRelationInput | items_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items_histories.
     */
    cursor?: items_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items_histories.
     */
    skip?: number
    distinct?: Items_historyScalarFieldEnum | Items_historyScalarFieldEnum[]
  }

  /**
   * items_history create
   */
  export type items_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a items_history.
     */
    data: XOR<items_historyCreateInput, items_historyUncheckedCreateInput>
  }

  /**
   * items_history createMany
   */
  export type items_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items_histories.
     */
    data: items_historyCreateManyInput | items_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * items_history createManyAndReturn
   */
  export type items_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many items_histories.
     */
    data: items_historyCreateManyInput | items_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * items_history update
   */
  export type items_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a items_history.
     */
    data: XOR<items_historyUpdateInput, items_historyUncheckedUpdateInput>
    /**
     * Choose, which items_history to update.
     */
    where: items_historyWhereUniqueInput
  }

  /**
   * items_history updateMany
   */
  export type items_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items_histories.
     */
    data: XOR<items_historyUpdateManyMutationInput, items_historyUncheckedUpdateManyInput>
    /**
     * Filter which items_histories to update
     */
    where?: items_historyWhereInput
  }

  /**
   * items_history upsert
   */
  export type items_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the items_history to update in case it exists.
     */
    where: items_historyWhereUniqueInput
    /**
     * In case the items_history found by the `where` argument doesn't exist, create a new items_history with this data.
     */
    create: XOR<items_historyCreateInput, items_historyUncheckedCreateInput>
    /**
     * In case the items_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<items_historyUpdateInput, items_historyUncheckedUpdateInput>
  }

  /**
   * items_history delete
   */
  export type items_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
    /**
     * Filter which items_history to delete.
     */
    where: items_historyWhereUniqueInput
  }

  /**
   * items_history deleteMany
   */
  export type items_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items_histories to delete
     */
    where?: items_historyWhereInput
  }

  /**
   * items_history without action
   */
  export type items_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items_history
     */
    select?: items_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: items_historyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LogScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    message: 'message',
    start_time: 'start_time',
    elapsed_time: 'elapsed_time',
    ip_address: 'ip_address',
    create_at: 'create_at'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const CodeScalarFieldEnum: {
    id: 'id',
    parent_code: 'parent_code',
    code: 'code',
    parent_top_code: 'parent_top_code',
    display_name: 'display_name',
    sort: 'sort',
    use_yn: 'use_yn',
    visible_yn: 'visible_yn',
    description: 'description',
    is_deleted: 'is_deleted',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type CodeScalarFieldEnum = (typeof CodeScalarFieldEnum)[keyof typeof CodeScalarFieldEnum]


  export const Menu_infoScalarFieldEnum: {
    id: 'id',
    parent_menu_code: 'parent_menu_code',
    menu_code: 'menu_code',
    menu_url: 'menu_url',
    icon: 'icon',
    sort: 'sort',
    use_yn: 'use_yn',
    visible_yn: 'visible_yn',
    description: 'description',
    is_deleted: 'is_deleted',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type Menu_infoScalarFieldEnum = (typeof Menu_infoScalarFieldEnum)[keyof typeof Menu_infoScalarFieldEnum]


  export const Root_classScalarFieldEnum: {
    id: 'id',
    root_class_code: 'root_class_code',
    name: 'name'
  };

  export type Root_classScalarFieldEnum = (typeof Root_classScalarFieldEnum)[keyof typeof Root_classScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    job_code: 'job_code',
    name: 'name',
    req_job: 'req_job',
    root_class_code: 'root_class_code'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    category: 'category',
    icon_url: 'icon_url',
    description: 'description',
    description_default: 'description_default',
    neutralization: 'neutralization',
    attack_type: 'attack_type',
    super_armor: 'super_armor',
    counter: 'counter',
    part_destruct: 'part_destruct',
    tags: 'tags',
    job_code: 'job_code'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const TripodScalarFieldEnum: {
    id: 'id',
    tier: 'tier',
    sort: 'sort',
    name: 'name',
    icon_url: 'icon_url',
    level_limit: 'level_limit',
    description: 'description',
    skill_id: 'skill_id'
  };

  export type TripodScalarFieldEnum = (typeof TripodScalarFieldEnum)[keyof typeof TripodScalarFieldEnum]


  export const Ark_grid_coreScalarFieldEnum: {
    id: 'id',
    job_code: 'job_code',
    engraving: 'engraving',
    category: 'category',
    name: 'name',
    skill_effect: 'skill_effect',
    trigger_effect: 'trigger_effect',
    base_effect: 'base_effect'
  };

  export type Ark_grid_coreScalarFieldEnum = (typeof Ark_grid_coreScalarFieldEnum)[keyof typeof Ark_grid_coreScalarFieldEnum]


  export const Ark_grid_combinationScalarFieldEnum: {
    id: 'id',
    job_code: 'job_code',
    engraving: 'engraving',
    core_combination: 'core_combination',
    key_skills: 'key_skills',
    operation: 'operation'
  };

  export type Ark_grid_combinationScalarFieldEnum = (typeof Ark_grid_combinationScalarFieldEnum)[keyof typeof Ark_grid_combinationScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    grade: 'grade',
    icon: 'icon',
    bundle_count: 'bundle_count',
    trade_remain_cnt: 'trade_remain_cnt',
    yday_avg_price: 'yday_avg_price',
    recent_price: 'recent_price',
    current_min_price: 'current_min_price'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const Items_historyScalarFieldEnum: {
    id: 'id',
    item_id: 'item_id',
    yday_avg_price: 'yday_avg_price',
    recent_price: 'recent_price',
    current_min_price: 'current_min_price',
    reg_date: 'reg_date'
  };

  export type Items_historyScalarFieldEnum = (typeof Items_historyScalarFieldEnum)[keyof typeof Items_historyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type logWhereInput = {
    AND?: logWhereInput | logWhereInput[]
    OR?: logWhereInput[]
    NOT?: logWhereInput | logWhereInput[]
    id?: IntFilter<"log"> | number
    name?: StringFilter<"log"> | string
    status?: StringFilter<"log"> | string
    message?: StringFilter<"log"> | string
    start_time?: StringNullableFilter<"log"> | string | null
    elapsed_time?: StringNullableFilter<"log"> | string | null
    ip_address?: StringNullableFilter<"log"> | string | null
    create_at?: DateTimeFilter<"log"> | Date | string
  }

  export type logOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    message?: SortOrder
    start_time?: SortOrderInput | SortOrder
    elapsed_time?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    create_at?: SortOrder
  }

  export type logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: logWhereInput | logWhereInput[]
    OR?: logWhereInput[]
    NOT?: logWhereInput | logWhereInput[]
    name?: StringFilter<"log"> | string
    status?: StringFilter<"log"> | string
    message?: StringFilter<"log"> | string
    start_time?: StringNullableFilter<"log"> | string | null
    elapsed_time?: StringNullableFilter<"log"> | string | null
    ip_address?: StringNullableFilter<"log"> | string | null
    create_at?: DateTimeFilter<"log"> | Date | string
  }, "id">

  export type logOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    message?: SortOrder
    start_time?: SortOrderInput | SortOrder
    elapsed_time?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    create_at?: SortOrder
    _count?: logCountOrderByAggregateInput
    _avg?: logAvgOrderByAggregateInput
    _max?: logMaxOrderByAggregateInput
    _min?: logMinOrderByAggregateInput
    _sum?: logSumOrderByAggregateInput
  }

  export type logScalarWhereWithAggregatesInput = {
    AND?: logScalarWhereWithAggregatesInput | logScalarWhereWithAggregatesInput[]
    OR?: logScalarWhereWithAggregatesInput[]
    NOT?: logScalarWhereWithAggregatesInput | logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"log"> | number
    name?: StringWithAggregatesFilter<"log"> | string
    status?: StringWithAggregatesFilter<"log"> | string
    message?: StringWithAggregatesFilter<"log"> | string
    start_time?: StringNullableWithAggregatesFilter<"log"> | string | null
    elapsed_time?: StringNullableWithAggregatesFilter<"log"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"log"> | string | null
    create_at?: DateTimeWithAggregatesFilter<"log"> | Date | string
  }

  export type codeWhereInput = {
    AND?: codeWhereInput | codeWhereInput[]
    OR?: codeWhereInput[]
    NOT?: codeWhereInput | codeWhereInput[]
    id?: IntFilter<"code"> | number
    parent_code?: StringFilter<"code"> | string
    code?: StringFilter<"code"> | string
    parent_top_code?: StringFilter<"code"> | string
    display_name?: StringFilter<"code"> | string
    sort?: IntFilter<"code"> | number
    use_yn?: BoolFilter<"code"> | boolean
    visible_yn?: BoolFilter<"code"> | boolean
    description?: StringNullableFilter<"code"> | string | null
    is_deleted?: BoolFilter<"code"> | boolean
    create_at?: DateTimeFilter<"code"> | Date | string
    update_at?: DateTimeFilter<"code"> | Date | string
  }

  export type codeOrderByWithRelationInput = {
    id?: SortOrder
    parent_code?: SortOrder
    code?: SortOrder
    parent_top_code?: SortOrder
    display_name?: SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type codeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: codeWhereInput | codeWhereInput[]
    OR?: codeWhereInput[]
    NOT?: codeWhereInput | codeWhereInput[]
    parent_code?: StringFilter<"code"> | string
    parent_top_code?: StringFilter<"code"> | string
    display_name?: StringFilter<"code"> | string
    sort?: IntFilter<"code"> | number
    use_yn?: BoolFilter<"code"> | boolean
    visible_yn?: BoolFilter<"code"> | boolean
    description?: StringNullableFilter<"code"> | string | null
    is_deleted?: BoolFilter<"code"> | boolean
    create_at?: DateTimeFilter<"code"> | Date | string
    update_at?: DateTimeFilter<"code"> | Date | string
  }, "id" | "code">

  export type codeOrderByWithAggregationInput = {
    id?: SortOrder
    parent_code?: SortOrder
    code?: SortOrder
    parent_top_code?: SortOrder
    display_name?: SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: codeCountOrderByAggregateInput
    _avg?: codeAvgOrderByAggregateInput
    _max?: codeMaxOrderByAggregateInput
    _min?: codeMinOrderByAggregateInput
    _sum?: codeSumOrderByAggregateInput
  }

  export type codeScalarWhereWithAggregatesInput = {
    AND?: codeScalarWhereWithAggregatesInput | codeScalarWhereWithAggregatesInput[]
    OR?: codeScalarWhereWithAggregatesInput[]
    NOT?: codeScalarWhereWithAggregatesInput | codeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"code"> | number
    parent_code?: StringWithAggregatesFilter<"code"> | string
    code?: StringWithAggregatesFilter<"code"> | string
    parent_top_code?: StringWithAggregatesFilter<"code"> | string
    display_name?: StringWithAggregatesFilter<"code"> | string
    sort?: IntWithAggregatesFilter<"code"> | number
    use_yn?: BoolWithAggregatesFilter<"code"> | boolean
    visible_yn?: BoolWithAggregatesFilter<"code"> | boolean
    description?: StringNullableWithAggregatesFilter<"code"> | string | null
    is_deleted?: BoolWithAggregatesFilter<"code"> | boolean
    create_at?: DateTimeWithAggregatesFilter<"code"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"code"> | Date | string
  }

  export type menu_infoWhereInput = {
    AND?: menu_infoWhereInput | menu_infoWhereInput[]
    OR?: menu_infoWhereInput[]
    NOT?: menu_infoWhereInput | menu_infoWhereInput[]
    id?: IntFilter<"menu_info"> | number
    parent_menu_code?: StringFilter<"menu_info"> | string
    menu_code?: StringFilter<"menu_info"> | string
    menu_url?: StringFilter<"menu_info"> | string
    icon?: StringNullableFilter<"menu_info"> | string | null
    sort?: IntFilter<"menu_info"> | number
    use_yn?: BoolFilter<"menu_info"> | boolean
    visible_yn?: BoolFilter<"menu_info"> | boolean
    description?: StringNullableFilter<"menu_info"> | string | null
    is_deleted?: BoolFilter<"menu_info"> | boolean
    create_at?: DateTimeFilter<"menu_info"> | Date | string
    update_at?: DateTimeFilter<"menu_info"> | Date | string
  }

  export type menu_infoOrderByWithRelationInput = {
    id?: SortOrder
    parent_menu_code?: SortOrder
    menu_code?: SortOrder
    menu_url?: SortOrder
    icon?: SortOrderInput | SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type menu_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    menu_code?: string
    AND?: menu_infoWhereInput | menu_infoWhereInput[]
    OR?: menu_infoWhereInput[]
    NOT?: menu_infoWhereInput | menu_infoWhereInput[]
    parent_menu_code?: StringFilter<"menu_info"> | string
    menu_url?: StringFilter<"menu_info"> | string
    icon?: StringNullableFilter<"menu_info"> | string | null
    sort?: IntFilter<"menu_info"> | number
    use_yn?: BoolFilter<"menu_info"> | boolean
    visible_yn?: BoolFilter<"menu_info"> | boolean
    description?: StringNullableFilter<"menu_info"> | string | null
    is_deleted?: BoolFilter<"menu_info"> | boolean
    create_at?: DateTimeFilter<"menu_info"> | Date | string
    update_at?: DateTimeFilter<"menu_info"> | Date | string
  }, "id" | "menu_code">

  export type menu_infoOrderByWithAggregationInput = {
    id?: SortOrder
    parent_menu_code?: SortOrder
    menu_code?: SortOrder
    menu_url?: SortOrder
    icon?: SortOrderInput | SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: menu_infoCountOrderByAggregateInput
    _avg?: menu_infoAvgOrderByAggregateInput
    _max?: menu_infoMaxOrderByAggregateInput
    _min?: menu_infoMinOrderByAggregateInput
    _sum?: menu_infoSumOrderByAggregateInput
  }

  export type menu_infoScalarWhereWithAggregatesInput = {
    AND?: menu_infoScalarWhereWithAggregatesInput | menu_infoScalarWhereWithAggregatesInput[]
    OR?: menu_infoScalarWhereWithAggregatesInput[]
    NOT?: menu_infoScalarWhereWithAggregatesInput | menu_infoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"menu_info"> | number
    parent_menu_code?: StringWithAggregatesFilter<"menu_info"> | string
    menu_code?: StringWithAggregatesFilter<"menu_info"> | string
    menu_url?: StringWithAggregatesFilter<"menu_info"> | string
    icon?: StringNullableWithAggregatesFilter<"menu_info"> | string | null
    sort?: IntWithAggregatesFilter<"menu_info"> | number
    use_yn?: BoolWithAggregatesFilter<"menu_info"> | boolean
    visible_yn?: BoolWithAggregatesFilter<"menu_info"> | boolean
    description?: StringNullableWithAggregatesFilter<"menu_info"> | string | null
    is_deleted?: BoolWithAggregatesFilter<"menu_info"> | boolean
    create_at?: DateTimeWithAggregatesFilter<"menu_info"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"menu_info"> | Date | string
  }

  export type root_classWhereInput = {
    AND?: root_classWhereInput | root_classWhereInput[]
    OR?: root_classWhereInput[]
    NOT?: root_classWhereInput | root_classWhereInput[]
    id?: IntFilter<"root_class"> | number
    root_class_code?: StringFilter<"root_class"> | string
    name?: StringFilter<"root_class"> | string
    jobs?: JobListRelationFilter
  }

  export type root_classOrderByWithRelationInput = {
    id?: SortOrder
    root_class_code?: SortOrder
    name?: SortOrder
    jobs?: jobOrderByRelationAggregateInput
  }

  export type root_classWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    root_class_code?: string
    AND?: root_classWhereInput | root_classWhereInput[]
    OR?: root_classWhereInput[]
    NOT?: root_classWhereInput | root_classWhereInput[]
    name?: StringFilter<"root_class"> | string
    jobs?: JobListRelationFilter
  }, "id" | "root_class_code">

  export type root_classOrderByWithAggregationInput = {
    id?: SortOrder
    root_class_code?: SortOrder
    name?: SortOrder
    _count?: root_classCountOrderByAggregateInput
    _avg?: root_classAvgOrderByAggregateInput
    _max?: root_classMaxOrderByAggregateInput
    _min?: root_classMinOrderByAggregateInput
    _sum?: root_classSumOrderByAggregateInput
  }

  export type root_classScalarWhereWithAggregatesInput = {
    AND?: root_classScalarWhereWithAggregatesInput | root_classScalarWhereWithAggregatesInput[]
    OR?: root_classScalarWhereWithAggregatesInput[]
    NOT?: root_classScalarWhereWithAggregatesInput | root_classScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"root_class"> | number
    root_class_code?: StringWithAggregatesFilter<"root_class"> | string
    name?: StringWithAggregatesFilter<"root_class"> | string
  }

  export type jobWhereInput = {
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    id?: IntFilter<"job"> | number
    job_code?: StringFilter<"job"> | string
    name?: StringFilter<"job"> | string
    req_job?: IntFilter<"job"> | number
    root_class_code?: StringFilter<"job"> | string
    root_class?: XOR<Root_classRelationFilter, root_classWhereInput>
    skills?: SkillListRelationFilter
    ark_grid_core?: Ark_grid_coreListRelationFilter
    ark_grid_combination?: Ark_grid_combinationListRelationFilter
  }

  export type jobOrderByWithRelationInput = {
    id?: SortOrder
    job_code?: SortOrder
    name?: SortOrder
    req_job?: SortOrder
    root_class_code?: SortOrder
    root_class?: root_classOrderByWithRelationInput
    skills?: skillOrderByRelationAggregateInput
    ark_grid_core?: ark_grid_coreOrderByRelationAggregateInput
    ark_grid_combination?: ark_grid_combinationOrderByRelationAggregateInput
  }

  export type jobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    job_code?: string
    req_job?: number
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    name?: StringFilter<"job"> | string
    root_class_code?: StringFilter<"job"> | string
    root_class?: XOR<Root_classRelationFilter, root_classWhereInput>
    skills?: SkillListRelationFilter
    ark_grid_core?: Ark_grid_coreListRelationFilter
    ark_grid_combination?: Ark_grid_combinationListRelationFilter
  }, "id" | "job_code" | "req_job">

  export type jobOrderByWithAggregationInput = {
    id?: SortOrder
    job_code?: SortOrder
    name?: SortOrder
    req_job?: SortOrder
    root_class_code?: SortOrder
    _count?: jobCountOrderByAggregateInput
    _avg?: jobAvgOrderByAggregateInput
    _max?: jobMaxOrderByAggregateInput
    _min?: jobMinOrderByAggregateInput
    _sum?: jobSumOrderByAggregateInput
  }

  export type jobScalarWhereWithAggregatesInput = {
    AND?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    OR?: jobScalarWhereWithAggregatesInput[]
    NOT?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"job"> | number
    job_code?: StringWithAggregatesFilter<"job"> | string
    name?: StringWithAggregatesFilter<"job"> | string
    req_job?: IntWithAggregatesFilter<"job"> | number
    root_class_code?: StringWithAggregatesFilter<"job"> | string
  }

  export type skillWhereInput = {
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    id?: IntFilter<"skill"> | number
    name?: StringFilter<"skill"> | string
    type?: StringFilter<"skill"> | string
    category?: StringFilter<"skill"> | string
    icon_url?: StringFilter<"skill"> | string
    description?: StringFilter<"skill"> | string
    description_default?: StringFilter<"skill"> | string
    neutralization?: StringNullableFilter<"skill"> | string | null
    attack_type?: StringNullableFilter<"skill"> | string | null
    super_armor?: StringNullableFilter<"skill"> | string | null
    counter?: StringNullableFilter<"skill"> | string | null
    part_destruct?: StringNullableFilter<"skill"> | string | null
    tags?: StringNullableFilter<"skill"> | string | null
    job_code?: StringFilter<"skill"> | string
    job?: XOR<JobRelationFilter, jobWhereInput>
    tripods?: TripodListRelationFilter
  }

  export type skillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    icon_url?: SortOrder
    description?: SortOrder
    description_default?: SortOrder
    neutralization?: SortOrderInput | SortOrder
    attack_type?: SortOrderInput | SortOrder
    super_armor?: SortOrderInput | SortOrder
    counter?: SortOrderInput | SortOrder
    part_destruct?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    job_code?: SortOrder
    job?: jobOrderByWithRelationInput
    tripods?: tripodOrderByRelationAggregateInput
  }

  export type skillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    job_code_name?: skillJob_codeNameCompoundUniqueInput
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    name?: StringFilter<"skill"> | string
    type?: StringFilter<"skill"> | string
    category?: StringFilter<"skill"> | string
    icon_url?: StringFilter<"skill"> | string
    description?: StringFilter<"skill"> | string
    description_default?: StringFilter<"skill"> | string
    neutralization?: StringNullableFilter<"skill"> | string | null
    attack_type?: StringNullableFilter<"skill"> | string | null
    super_armor?: StringNullableFilter<"skill"> | string | null
    counter?: StringNullableFilter<"skill"> | string | null
    part_destruct?: StringNullableFilter<"skill"> | string | null
    tags?: StringNullableFilter<"skill"> | string | null
    job_code?: StringFilter<"skill"> | string
    job?: XOR<JobRelationFilter, jobWhereInput>
    tripods?: TripodListRelationFilter
  }, "id" | "job_code_name">

  export type skillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    icon_url?: SortOrder
    description?: SortOrder
    description_default?: SortOrder
    neutralization?: SortOrderInput | SortOrder
    attack_type?: SortOrderInput | SortOrder
    super_armor?: SortOrderInput | SortOrder
    counter?: SortOrderInput | SortOrder
    part_destruct?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    job_code?: SortOrder
    _count?: skillCountOrderByAggregateInput
    _avg?: skillAvgOrderByAggregateInput
    _max?: skillMaxOrderByAggregateInput
    _min?: skillMinOrderByAggregateInput
    _sum?: skillSumOrderByAggregateInput
  }

  export type skillScalarWhereWithAggregatesInput = {
    AND?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    OR?: skillScalarWhereWithAggregatesInput[]
    NOT?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skill"> | number
    name?: StringWithAggregatesFilter<"skill"> | string
    type?: StringWithAggregatesFilter<"skill"> | string
    category?: StringWithAggregatesFilter<"skill"> | string
    icon_url?: StringWithAggregatesFilter<"skill"> | string
    description?: StringWithAggregatesFilter<"skill"> | string
    description_default?: StringWithAggregatesFilter<"skill"> | string
    neutralization?: StringNullableWithAggregatesFilter<"skill"> | string | null
    attack_type?: StringNullableWithAggregatesFilter<"skill"> | string | null
    super_armor?: StringNullableWithAggregatesFilter<"skill"> | string | null
    counter?: StringNullableWithAggregatesFilter<"skill"> | string | null
    part_destruct?: StringNullableWithAggregatesFilter<"skill"> | string | null
    tags?: StringNullableWithAggregatesFilter<"skill"> | string | null
    job_code?: StringWithAggregatesFilter<"skill"> | string
  }

  export type tripodWhereInput = {
    AND?: tripodWhereInput | tripodWhereInput[]
    OR?: tripodWhereInput[]
    NOT?: tripodWhereInput | tripodWhereInput[]
    id?: IntFilter<"tripod"> | number
    tier?: IntFilter<"tripod"> | number
    sort?: IntFilter<"tripod"> | number
    name?: StringFilter<"tripod"> | string
    icon_url?: StringFilter<"tripod"> | string
    level_limit?: IntFilter<"tripod"> | number
    description?: StringFilter<"tripod"> | string
    skill_id?: IntFilter<"tripod"> | number
    skill?: XOR<SkillRelationFilter, skillWhereInput>
  }

  export type tripodOrderByWithRelationInput = {
    id?: SortOrder
    tier?: SortOrder
    sort?: SortOrder
    name?: SortOrder
    icon_url?: SortOrder
    level_limit?: SortOrder
    description?: SortOrder
    skill_id?: SortOrder
    skill?: skillOrderByWithRelationInput
  }

  export type tripodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tripodWhereInput | tripodWhereInput[]
    OR?: tripodWhereInput[]
    NOT?: tripodWhereInput | tripodWhereInput[]
    tier?: IntFilter<"tripod"> | number
    sort?: IntFilter<"tripod"> | number
    name?: StringFilter<"tripod"> | string
    icon_url?: StringFilter<"tripod"> | string
    level_limit?: IntFilter<"tripod"> | number
    description?: StringFilter<"tripod"> | string
    skill_id?: IntFilter<"tripod"> | number
    skill?: XOR<SkillRelationFilter, skillWhereInput>
  }, "id">

  export type tripodOrderByWithAggregationInput = {
    id?: SortOrder
    tier?: SortOrder
    sort?: SortOrder
    name?: SortOrder
    icon_url?: SortOrder
    level_limit?: SortOrder
    description?: SortOrder
    skill_id?: SortOrder
    _count?: tripodCountOrderByAggregateInput
    _avg?: tripodAvgOrderByAggregateInput
    _max?: tripodMaxOrderByAggregateInput
    _min?: tripodMinOrderByAggregateInput
    _sum?: tripodSumOrderByAggregateInput
  }

  export type tripodScalarWhereWithAggregatesInput = {
    AND?: tripodScalarWhereWithAggregatesInput | tripodScalarWhereWithAggregatesInput[]
    OR?: tripodScalarWhereWithAggregatesInput[]
    NOT?: tripodScalarWhereWithAggregatesInput | tripodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tripod"> | number
    tier?: IntWithAggregatesFilter<"tripod"> | number
    sort?: IntWithAggregatesFilter<"tripod"> | number
    name?: StringWithAggregatesFilter<"tripod"> | string
    icon_url?: StringWithAggregatesFilter<"tripod"> | string
    level_limit?: IntWithAggregatesFilter<"tripod"> | number
    description?: StringWithAggregatesFilter<"tripod"> | string
    skill_id?: IntWithAggregatesFilter<"tripod"> | number
  }

  export type ark_grid_coreWhereInput = {
    AND?: ark_grid_coreWhereInput | ark_grid_coreWhereInput[]
    OR?: ark_grid_coreWhereInput[]
    NOT?: ark_grid_coreWhereInput | ark_grid_coreWhereInput[]
    id?: IntFilter<"ark_grid_core"> | number
    job_code?: StringFilter<"ark_grid_core"> | string
    engraving?: StringFilter<"ark_grid_core"> | string
    category?: StringFilter<"ark_grid_core"> | string
    name?: StringFilter<"ark_grid_core"> | string
    skill_effect?: StringNullableFilter<"ark_grid_core"> | string | null
    trigger_effect?: StringNullableFilter<"ark_grid_core"> | string | null
    base_effect?: StringNullableFilter<"ark_grid_core"> | string | null
    job?: XOR<JobRelationFilter, jobWhereInput>
  }

  export type ark_grid_coreOrderByWithRelationInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    category?: SortOrder
    name?: SortOrder
    skill_effect?: SortOrderInput | SortOrder
    trigger_effect?: SortOrderInput | SortOrder
    base_effect?: SortOrderInput | SortOrder
    job?: jobOrderByWithRelationInput
  }

  export type ark_grid_coreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    job_code_engraving_category_name?: ark_grid_coreJob_codeEngravingCategoryNameCompoundUniqueInput
    AND?: ark_grid_coreWhereInput | ark_grid_coreWhereInput[]
    OR?: ark_grid_coreWhereInput[]
    NOT?: ark_grid_coreWhereInput | ark_grid_coreWhereInput[]
    job_code?: StringFilter<"ark_grid_core"> | string
    engraving?: StringFilter<"ark_grid_core"> | string
    category?: StringFilter<"ark_grid_core"> | string
    name?: StringFilter<"ark_grid_core"> | string
    skill_effect?: StringNullableFilter<"ark_grid_core"> | string | null
    trigger_effect?: StringNullableFilter<"ark_grid_core"> | string | null
    base_effect?: StringNullableFilter<"ark_grid_core"> | string | null
    job?: XOR<JobRelationFilter, jobWhereInput>
  }, "id" | "job_code_engraving_category_name">

  export type ark_grid_coreOrderByWithAggregationInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    category?: SortOrder
    name?: SortOrder
    skill_effect?: SortOrderInput | SortOrder
    trigger_effect?: SortOrderInput | SortOrder
    base_effect?: SortOrderInput | SortOrder
    _count?: ark_grid_coreCountOrderByAggregateInput
    _avg?: ark_grid_coreAvgOrderByAggregateInput
    _max?: ark_grid_coreMaxOrderByAggregateInput
    _min?: ark_grid_coreMinOrderByAggregateInput
    _sum?: ark_grid_coreSumOrderByAggregateInput
  }

  export type ark_grid_coreScalarWhereWithAggregatesInput = {
    AND?: ark_grid_coreScalarWhereWithAggregatesInput | ark_grid_coreScalarWhereWithAggregatesInput[]
    OR?: ark_grid_coreScalarWhereWithAggregatesInput[]
    NOT?: ark_grid_coreScalarWhereWithAggregatesInput | ark_grid_coreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ark_grid_core"> | number
    job_code?: StringWithAggregatesFilter<"ark_grid_core"> | string
    engraving?: StringWithAggregatesFilter<"ark_grid_core"> | string
    category?: StringWithAggregatesFilter<"ark_grid_core"> | string
    name?: StringWithAggregatesFilter<"ark_grid_core"> | string
    skill_effect?: StringNullableWithAggregatesFilter<"ark_grid_core"> | string | null
    trigger_effect?: StringNullableWithAggregatesFilter<"ark_grid_core"> | string | null
    base_effect?: StringNullableWithAggregatesFilter<"ark_grid_core"> | string | null
  }

  export type ark_grid_combinationWhereInput = {
    AND?: ark_grid_combinationWhereInput | ark_grid_combinationWhereInput[]
    OR?: ark_grid_combinationWhereInput[]
    NOT?: ark_grid_combinationWhereInput | ark_grid_combinationWhereInput[]
    id?: IntFilter<"ark_grid_combination"> | number
    job_code?: StringFilter<"ark_grid_combination"> | string
    engraving?: StringFilter<"ark_grid_combination"> | string
    core_combination?: StringFilter<"ark_grid_combination"> | string
    key_skills?: StringFilter<"ark_grid_combination"> | string
    operation?: StringFilter<"ark_grid_combination"> | string
    job?: XOR<JobRelationFilter, jobWhereInput>
  }

  export type ark_grid_combinationOrderByWithRelationInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    core_combination?: SortOrder
    key_skills?: SortOrder
    operation?: SortOrder
    job?: jobOrderByWithRelationInput
  }

  export type ark_grid_combinationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    job_code_engraving_core_combination?: ark_grid_combinationJob_codeEngravingCore_combinationCompoundUniqueInput
    AND?: ark_grid_combinationWhereInput | ark_grid_combinationWhereInput[]
    OR?: ark_grid_combinationWhereInput[]
    NOT?: ark_grid_combinationWhereInput | ark_grid_combinationWhereInput[]
    job_code?: StringFilter<"ark_grid_combination"> | string
    engraving?: StringFilter<"ark_grid_combination"> | string
    core_combination?: StringFilter<"ark_grid_combination"> | string
    key_skills?: StringFilter<"ark_grid_combination"> | string
    operation?: StringFilter<"ark_grid_combination"> | string
    job?: XOR<JobRelationFilter, jobWhereInput>
  }, "id" | "job_code_engraving_core_combination">

  export type ark_grid_combinationOrderByWithAggregationInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    core_combination?: SortOrder
    key_skills?: SortOrder
    operation?: SortOrder
    _count?: ark_grid_combinationCountOrderByAggregateInput
    _avg?: ark_grid_combinationAvgOrderByAggregateInput
    _max?: ark_grid_combinationMaxOrderByAggregateInput
    _min?: ark_grid_combinationMinOrderByAggregateInput
    _sum?: ark_grid_combinationSumOrderByAggregateInput
  }

  export type ark_grid_combinationScalarWhereWithAggregatesInput = {
    AND?: ark_grid_combinationScalarWhereWithAggregatesInput | ark_grid_combinationScalarWhereWithAggregatesInput[]
    OR?: ark_grid_combinationScalarWhereWithAggregatesInput[]
    NOT?: ark_grid_combinationScalarWhereWithAggregatesInput | ark_grid_combinationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ark_grid_combination"> | number
    job_code?: StringWithAggregatesFilter<"ark_grid_combination"> | string
    engraving?: StringWithAggregatesFilter<"ark_grid_combination"> | string
    core_combination?: StringWithAggregatesFilter<"ark_grid_combination"> | string
    key_skills?: StringWithAggregatesFilter<"ark_grid_combination"> | string
    operation?: StringWithAggregatesFilter<"ark_grid_combination"> | string
  }

  export type itemsWhereInput = {
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    id?: IntFilter<"items"> | number
    name?: StringFilter<"items"> | string
    grade?: StringFilter<"items"> | string
    icon?: StringFilter<"items"> | string
    bundle_count?: IntFilter<"items"> | number
    trade_remain_cnt?: IntNullableFilter<"items"> | number | null
    yday_avg_price?: FloatFilter<"items"> | number
    recent_price?: IntFilter<"items"> | number
    current_min_price?: IntFilter<"items"> | number
    history?: Items_historyListRelationFilter
  }

  export type itemsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    icon?: SortOrder
    bundle_count?: SortOrder
    trade_remain_cnt?: SortOrderInput | SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
    history?: items_historyOrderByRelationAggregateInput
  }

  export type itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    name?: StringFilter<"items"> | string
    grade?: StringFilter<"items"> | string
    icon?: StringFilter<"items"> | string
    bundle_count?: IntFilter<"items"> | number
    trade_remain_cnt?: IntNullableFilter<"items"> | number | null
    yday_avg_price?: FloatFilter<"items"> | number
    recent_price?: IntFilter<"items"> | number
    current_min_price?: IntFilter<"items"> | number
    history?: Items_historyListRelationFilter
  }, "id">

  export type itemsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    icon?: SortOrder
    bundle_count?: SortOrder
    trade_remain_cnt?: SortOrderInput | SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
    _count?: itemsCountOrderByAggregateInput
    _avg?: itemsAvgOrderByAggregateInput
    _max?: itemsMaxOrderByAggregateInput
    _min?: itemsMinOrderByAggregateInput
    _sum?: itemsSumOrderByAggregateInput
  }

  export type itemsScalarWhereWithAggregatesInput = {
    AND?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    OR?: itemsScalarWhereWithAggregatesInput[]
    NOT?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"items"> | number
    name?: StringWithAggregatesFilter<"items"> | string
    grade?: StringWithAggregatesFilter<"items"> | string
    icon?: StringWithAggregatesFilter<"items"> | string
    bundle_count?: IntWithAggregatesFilter<"items"> | number
    trade_remain_cnt?: IntNullableWithAggregatesFilter<"items"> | number | null
    yday_avg_price?: FloatWithAggregatesFilter<"items"> | number
    recent_price?: IntWithAggregatesFilter<"items"> | number
    current_min_price?: IntWithAggregatesFilter<"items"> | number
  }

  export type items_historyWhereInput = {
    AND?: items_historyWhereInput | items_historyWhereInput[]
    OR?: items_historyWhereInput[]
    NOT?: items_historyWhereInput | items_historyWhereInput[]
    id?: IntFilter<"items_history"> | number
    item_id?: IntFilter<"items_history"> | number
    yday_avg_price?: FloatFilter<"items_history"> | number
    recent_price?: IntFilter<"items_history"> | number
    current_min_price?: IntFilter<"items_history"> | number
    reg_date?: DateTimeFilter<"items_history"> | Date | string
    item?: XOR<ItemsRelationFilter, itemsWhereInput>
  }

  export type items_historyOrderByWithRelationInput = {
    id?: SortOrder
    item_id?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
    reg_date?: SortOrder
    item?: itemsOrderByWithRelationInput
  }

  export type items_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: items_historyWhereInput | items_historyWhereInput[]
    OR?: items_historyWhereInput[]
    NOT?: items_historyWhereInput | items_historyWhereInput[]
    item_id?: IntFilter<"items_history"> | number
    yday_avg_price?: FloatFilter<"items_history"> | number
    recent_price?: IntFilter<"items_history"> | number
    current_min_price?: IntFilter<"items_history"> | number
    reg_date?: DateTimeFilter<"items_history"> | Date | string
    item?: XOR<ItemsRelationFilter, itemsWhereInput>
  }, "id">

  export type items_historyOrderByWithAggregationInput = {
    id?: SortOrder
    item_id?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
    reg_date?: SortOrder
    _count?: items_historyCountOrderByAggregateInput
    _avg?: items_historyAvgOrderByAggregateInput
    _max?: items_historyMaxOrderByAggregateInput
    _min?: items_historyMinOrderByAggregateInput
    _sum?: items_historySumOrderByAggregateInput
  }

  export type items_historyScalarWhereWithAggregatesInput = {
    AND?: items_historyScalarWhereWithAggregatesInput | items_historyScalarWhereWithAggregatesInput[]
    OR?: items_historyScalarWhereWithAggregatesInput[]
    NOT?: items_historyScalarWhereWithAggregatesInput | items_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"items_history"> | number
    item_id?: IntWithAggregatesFilter<"items_history"> | number
    yday_avg_price?: FloatWithAggregatesFilter<"items_history"> | number
    recent_price?: IntWithAggregatesFilter<"items_history"> | number
    current_min_price?: IntWithAggregatesFilter<"items_history"> | number
    reg_date?: DateTimeWithAggregatesFilter<"items_history"> | Date | string
  }

  export type logCreateInput = {
    name: string
    status: string
    message: string
    start_time?: string | null
    elapsed_time?: string | null
    ip_address?: string | null
    create_at?: Date | string
  }

  export type logUncheckedCreateInput = {
    id?: number
    name: string
    status: string
    message: string
    start_time?: string | null
    elapsed_time?: string | null
    ip_address?: string | null
    create_at?: Date | string
  }

  export type logUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    elapsed_time?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    elapsed_time?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logCreateManyInput = {
    id?: number
    name: string
    status: string
    message: string
    start_time?: string | null
    elapsed_time?: string | null
    ip_address?: string | null
    create_at?: Date | string
  }

  export type logUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    elapsed_time?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    elapsed_time?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type codeCreateInput = {
    parent_code: string
    code: string
    parent_top_code: string
    display_name: string
    sort: number
    use_yn: boolean
    visible_yn: boolean
    description?: string | null
    is_deleted?: boolean
    create_at?: Date | string
    update_at?: Date | string
  }

  export type codeUncheckedCreateInput = {
    id?: number
    parent_code: string
    code: string
    parent_top_code: string
    display_name: string
    sort: number
    use_yn: boolean
    visible_yn: boolean
    description?: string | null
    is_deleted?: boolean
    create_at?: Date | string
    update_at?: Date | string
  }

  export type codeUpdateInput = {
    parent_code?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    parent_top_code?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    use_yn?: BoolFieldUpdateOperationsInput | boolean
    visible_yn?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type codeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_code?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    parent_top_code?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    use_yn?: BoolFieldUpdateOperationsInput | boolean
    visible_yn?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type codeCreateManyInput = {
    id?: number
    parent_code: string
    code: string
    parent_top_code: string
    display_name: string
    sort: number
    use_yn: boolean
    visible_yn: boolean
    description?: string | null
    is_deleted?: boolean
    create_at?: Date | string
    update_at?: Date | string
  }

  export type codeUpdateManyMutationInput = {
    parent_code?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    parent_top_code?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    use_yn?: BoolFieldUpdateOperationsInput | boolean
    visible_yn?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type codeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_code?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    parent_top_code?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    use_yn?: BoolFieldUpdateOperationsInput | boolean
    visible_yn?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menu_infoCreateInput = {
    parent_menu_code: string
    menu_code: string
    menu_url: string
    icon?: string | null
    sort: number
    use_yn: boolean
    visible_yn: boolean
    description?: string | null
    is_deleted?: boolean
    create_at?: Date | string
    update_at?: Date | string
  }

  export type menu_infoUncheckedCreateInput = {
    id?: number
    parent_menu_code: string
    menu_code: string
    menu_url: string
    icon?: string | null
    sort: number
    use_yn: boolean
    visible_yn: boolean
    description?: string | null
    is_deleted?: boolean
    create_at?: Date | string
    update_at?: Date | string
  }

  export type menu_infoUpdateInput = {
    parent_menu_code?: StringFieldUpdateOperationsInput | string
    menu_code?: StringFieldUpdateOperationsInput | string
    menu_url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    use_yn?: BoolFieldUpdateOperationsInput | boolean
    visible_yn?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menu_infoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_menu_code?: StringFieldUpdateOperationsInput | string
    menu_code?: StringFieldUpdateOperationsInput | string
    menu_url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    use_yn?: BoolFieldUpdateOperationsInput | boolean
    visible_yn?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menu_infoCreateManyInput = {
    id?: number
    parent_menu_code: string
    menu_code: string
    menu_url: string
    icon?: string | null
    sort: number
    use_yn: boolean
    visible_yn: boolean
    description?: string | null
    is_deleted?: boolean
    create_at?: Date | string
    update_at?: Date | string
  }

  export type menu_infoUpdateManyMutationInput = {
    parent_menu_code?: StringFieldUpdateOperationsInput | string
    menu_code?: StringFieldUpdateOperationsInput | string
    menu_url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    use_yn?: BoolFieldUpdateOperationsInput | boolean
    visible_yn?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menu_infoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_menu_code?: StringFieldUpdateOperationsInput | string
    menu_code?: StringFieldUpdateOperationsInput | string
    menu_url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    use_yn?: BoolFieldUpdateOperationsInput | boolean
    visible_yn?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type root_classCreateInput = {
    root_class_code: string
    name: string
    jobs?: jobCreateNestedManyWithoutRoot_classInput
  }

  export type root_classUncheckedCreateInput = {
    id?: number
    root_class_code: string
    name: string
    jobs?: jobUncheckedCreateNestedManyWithoutRoot_classInput
  }

  export type root_classUpdateInput = {
    root_class_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobs?: jobUpdateManyWithoutRoot_classNestedInput
  }

  export type root_classUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    root_class_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobs?: jobUncheckedUpdateManyWithoutRoot_classNestedInput
  }

  export type root_classCreateManyInput = {
    id?: number
    root_class_code: string
    name: string
  }

  export type root_classUpdateManyMutationInput = {
    root_class_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type root_classUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    root_class_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type jobCreateInput = {
    job_code: string
    name: string
    req_job: number
    root_class: root_classCreateNestedOneWithoutJobsInput
    skills?: skillCreateNestedManyWithoutJobInput
    ark_grid_core?: ark_grid_coreCreateNestedManyWithoutJobInput
    ark_grid_combination?: ark_grid_combinationCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateInput = {
    id?: number
    job_code: string
    name: string
    req_job: number
    root_class_code: string
    skills?: skillUncheckedCreateNestedManyWithoutJobInput
    ark_grid_core?: ark_grid_coreUncheckedCreateNestedManyWithoutJobInput
    ark_grid_combination?: ark_grid_combinationUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobUpdateInput = {
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    root_class?: root_classUpdateOneRequiredWithoutJobsNestedInput
    skills?: skillUpdateManyWithoutJobNestedInput
    ark_grid_core?: ark_grid_coreUpdateManyWithoutJobNestedInput
    ark_grid_combination?: ark_grid_combinationUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    root_class_code?: StringFieldUpdateOperationsInput | string
    skills?: skillUncheckedUpdateManyWithoutJobNestedInput
    ark_grid_core?: ark_grid_coreUncheckedUpdateManyWithoutJobNestedInput
    ark_grid_combination?: ark_grid_combinationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobCreateManyInput = {
    id?: number
    job_code: string
    name: string
    req_job: number
    root_class_code: string
  }

  export type jobUpdateManyMutationInput = {
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
  }

  export type jobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    root_class_code?: StringFieldUpdateOperationsInput | string
  }

  export type skillCreateInput = {
    id: number
    name: string
    type: string
    category: string
    icon_url: string
    description: string
    description_default: string
    neutralization?: string | null
    attack_type?: string | null
    super_armor?: string | null
    counter?: string | null
    part_destruct?: string | null
    tags?: string | null
    job: jobCreateNestedOneWithoutSkillsInput
    tripods?: tripodCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateInput = {
    id: number
    name: string
    type: string
    category: string
    icon_url: string
    description: string
    description_default: string
    neutralization?: string | null
    attack_type?: string | null
    super_armor?: string | null
    counter?: string | null
    part_destruct?: string | null
    tags?: string | null
    job_code: string
    tripods?: tripodUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_default?: StringFieldUpdateOperationsInput | string
    neutralization?: NullableStringFieldUpdateOperationsInput | string | null
    attack_type?: NullableStringFieldUpdateOperationsInput | string | null
    super_armor?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableStringFieldUpdateOperationsInput | string | null
    part_destruct?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    job?: jobUpdateOneRequiredWithoutSkillsNestedInput
    tripods?: tripodUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_default?: StringFieldUpdateOperationsInput | string
    neutralization?: NullableStringFieldUpdateOperationsInput | string | null
    attack_type?: NullableStringFieldUpdateOperationsInput | string | null
    super_armor?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableStringFieldUpdateOperationsInput | string | null
    part_destruct?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    job_code?: StringFieldUpdateOperationsInput | string
    tripods?: tripodUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillCreateManyInput = {
    id: number
    name: string
    type: string
    category: string
    icon_url: string
    description: string
    description_default: string
    neutralization?: string | null
    attack_type?: string | null
    super_armor?: string | null
    counter?: string | null
    part_destruct?: string | null
    tags?: string | null
    job_code: string
  }

  export type skillUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_default?: StringFieldUpdateOperationsInput | string
    neutralization?: NullableStringFieldUpdateOperationsInput | string | null
    attack_type?: NullableStringFieldUpdateOperationsInput | string | null
    super_armor?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableStringFieldUpdateOperationsInput | string | null
    part_destruct?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_default?: StringFieldUpdateOperationsInput | string
    neutralization?: NullableStringFieldUpdateOperationsInput | string | null
    attack_type?: NullableStringFieldUpdateOperationsInput | string | null
    super_armor?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableStringFieldUpdateOperationsInput | string | null
    part_destruct?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    job_code?: StringFieldUpdateOperationsInput | string
  }

  export type tripodCreateInput = {
    tier: number
    sort: number
    name: string
    icon_url: string
    level_limit: number
    description: string
    skill: skillCreateNestedOneWithoutTripodsInput
  }

  export type tripodUncheckedCreateInput = {
    id?: number
    tier: number
    sort: number
    name: string
    icon_url: string
    level_limit: number
    description: string
    skill_id: number
  }

  export type tripodUpdateInput = {
    tier?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    level_limit?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    skill?: skillUpdateOneRequiredWithoutTripodsNestedInput
  }

  export type tripodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    level_limit?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type tripodCreateManyInput = {
    id?: number
    tier: number
    sort: number
    name: string
    icon_url: string
    level_limit: number
    description: string
    skill_id: number
  }

  export type tripodUpdateManyMutationInput = {
    tier?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    level_limit?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type tripodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    level_limit?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type ark_grid_coreCreateInput = {
    engraving: string
    category: string
    name: string
    skill_effect?: string | null
    trigger_effect?: string | null
    base_effect?: string | null
    job: jobCreateNestedOneWithoutArk_grid_coreInput
  }

  export type ark_grid_coreUncheckedCreateInput = {
    id?: number
    job_code: string
    engraving: string
    category: string
    name: string
    skill_effect?: string | null
    trigger_effect?: string | null
    base_effect?: string | null
  }

  export type ark_grid_coreUpdateInput = {
    engraving?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill_effect?: NullableStringFieldUpdateOperationsInput | string | null
    trigger_effect?: NullableStringFieldUpdateOperationsInput | string | null
    base_effect?: NullableStringFieldUpdateOperationsInput | string | null
    job?: jobUpdateOneRequiredWithoutArk_grid_coreNestedInput
  }

  export type ark_grid_coreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    engraving?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill_effect?: NullableStringFieldUpdateOperationsInput | string | null
    trigger_effect?: NullableStringFieldUpdateOperationsInput | string | null
    base_effect?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ark_grid_coreCreateManyInput = {
    id?: number
    job_code: string
    engraving: string
    category: string
    name: string
    skill_effect?: string | null
    trigger_effect?: string | null
    base_effect?: string | null
  }

  export type ark_grid_coreUpdateManyMutationInput = {
    engraving?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill_effect?: NullableStringFieldUpdateOperationsInput | string | null
    trigger_effect?: NullableStringFieldUpdateOperationsInput | string | null
    base_effect?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ark_grid_coreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    engraving?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill_effect?: NullableStringFieldUpdateOperationsInput | string | null
    trigger_effect?: NullableStringFieldUpdateOperationsInput | string | null
    base_effect?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ark_grid_combinationCreateInput = {
    engraving: string
    core_combination: string
    key_skills: string
    operation: string
    job: jobCreateNestedOneWithoutArk_grid_combinationInput
  }

  export type ark_grid_combinationUncheckedCreateInput = {
    id?: number
    job_code: string
    engraving: string
    core_combination: string
    key_skills: string
    operation: string
  }

  export type ark_grid_combinationUpdateInput = {
    engraving?: StringFieldUpdateOperationsInput | string
    core_combination?: StringFieldUpdateOperationsInput | string
    key_skills?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    job?: jobUpdateOneRequiredWithoutArk_grid_combinationNestedInput
  }

  export type ark_grid_combinationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    engraving?: StringFieldUpdateOperationsInput | string
    core_combination?: StringFieldUpdateOperationsInput | string
    key_skills?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
  }

  export type ark_grid_combinationCreateManyInput = {
    id?: number
    job_code: string
    engraving: string
    core_combination: string
    key_skills: string
    operation: string
  }

  export type ark_grid_combinationUpdateManyMutationInput = {
    engraving?: StringFieldUpdateOperationsInput | string
    core_combination?: StringFieldUpdateOperationsInput | string
    key_skills?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
  }

  export type ark_grid_combinationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    engraving?: StringFieldUpdateOperationsInput | string
    core_combination?: StringFieldUpdateOperationsInput | string
    key_skills?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
  }

  export type itemsCreateInput = {
    id: number
    name: string
    grade: string
    icon: string
    bundle_count: number
    trade_remain_cnt?: number | null
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    history?: items_historyCreateNestedManyWithoutItemInput
  }

  export type itemsUncheckedCreateInput = {
    id: number
    name: string
    grade: string
    icon: string
    bundle_count: number
    trade_remain_cnt?: number | null
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    history?: items_historyUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bundle_count?: IntFieldUpdateOperationsInput | number
    trade_remain_cnt?: NullableIntFieldUpdateOperationsInput | number | null
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
    history?: items_historyUpdateManyWithoutItemNestedInput
  }

  export type itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bundle_count?: IntFieldUpdateOperationsInput | number
    trade_remain_cnt?: NullableIntFieldUpdateOperationsInput | number | null
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
    history?: items_historyUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemsCreateManyInput = {
    id: number
    name: string
    grade: string
    icon: string
    bundle_count: number
    trade_remain_cnt?: number | null
    yday_avg_price: number
    recent_price: number
    current_min_price: number
  }

  export type itemsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bundle_count?: IntFieldUpdateOperationsInput | number
    trade_remain_cnt?: NullableIntFieldUpdateOperationsInput | number | null
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
  }

  export type itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bundle_count?: IntFieldUpdateOperationsInput | number
    trade_remain_cnt?: NullableIntFieldUpdateOperationsInput | number | null
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
  }

  export type items_historyCreateInput = {
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    reg_date?: Date | string
    item: itemsCreateNestedOneWithoutHistoryInput
  }

  export type items_historyUncheckedCreateInput = {
    id?: number
    item_id: number
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    reg_date?: Date | string
  }

  export type items_historyUpdateInput = {
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: itemsUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type items_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type items_historyCreateManyInput = {
    id?: number
    item_id: number
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    reg_date?: Date | string
  }

  export type items_historyUpdateManyMutationInput = {
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type items_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type logCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    message?: SortOrder
    start_time?: SortOrder
    elapsed_time?: SortOrder
    ip_address?: SortOrder
    create_at?: SortOrder
  }

  export type logAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type logMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    message?: SortOrder
    start_time?: SortOrder
    elapsed_time?: SortOrder
    ip_address?: SortOrder
    create_at?: SortOrder
  }

  export type logMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    message?: SortOrder
    start_time?: SortOrder
    elapsed_time?: SortOrder
    ip_address?: SortOrder
    create_at?: SortOrder
  }

  export type logSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type codeCountOrderByAggregateInput = {
    id?: SortOrder
    parent_code?: SortOrder
    code?: SortOrder
    parent_top_code?: SortOrder
    display_name?: SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type codeAvgOrderByAggregateInput = {
    id?: SortOrder
    sort?: SortOrder
  }

  export type codeMaxOrderByAggregateInput = {
    id?: SortOrder
    parent_code?: SortOrder
    code?: SortOrder
    parent_top_code?: SortOrder
    display_name?: SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type codeMinOrderByAggregateInput = {
    id?: SortOrder
    parent_code?: SortOrder
    code?: SortOrder
    parent_top_code?: SortOrder
    display_name?: SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type codeSumOrderByAggregateInput = {
    id?: SortOrder
    sort?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type menu_infoCountOrderByAggregateInput = {
    id?: SortOrder
    parent_menu_code?: SortOrder
    menu_code?: SortOrder
    menu_url?: SortOrder
    icon?: SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type menu_infoAvgOrderByAggregateInput = {
    id?: SortOrder
    sort?: SortOrder
  }

  export type menu_infoMaxOrderByAggregateInput = {
    id?: SortOrder
    parent_menu_code?: SortOrder
    menu_code?: SortOrder
    menu_url?: SortOrder
    icon?: SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type menu_infoMinOrderByAggregateInput = {
    id?: SortOrder
    parent_menu_code?: SortOrder
    menu_code?: SortOrder
    menu_url?: SortOrder
    icon?: SortOrder
    sort?: SortOrder
    use_yn?: SortOrder
    visible_yn?: SortOrder
    description?: SortOrder
    is_deleted?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type menu_infoSumOrderByAggregateInput = {
    id?: SortOrder
    sort?: SortOrder
  }

  export type JobListRelationFilter = {
    every?: jobWhereInput
    some?: jobWhereInput
    none?: jobWhereInput
  }

  export type jobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type root_classCountOrderByAggregateInput = {
    id?: SortOrder
    root_class_code?: SortOrder
    name?: SortOrder
  }

  export type root_classAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type root_classMaxOrderByAggregateInput = {
    id?: SortOrder
    root_class_code?: SortOrder
    name?: SortOrder
  }

  export type root_classMinOrderByAggregateInput = {
    id?: SortOrder
    root_class_code?: SortOrder
    name?: SortOrder
  }

  export type root_classSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Root_classRelationFilter = {
    is?: root_classWhereInput
    isNot?: root_classWhereInput
  }

  export type SkillListRelationFilter = {
    every?: skillWhereInput
    some?: skillWhereInput
    none?: skillWhereInput
  }

  export type Ark_grid_coreListRelationFilter = {
    every?: ark_grid_coreWhereInput
    some?: ark_grid_coreWhereInput
    none?: ark_grid_coreWhereInput
  }

  export type Ark_grid_combinationListRelationFilter = {
    every?: ark_grid_combinationWhereInput
    some?: ark_grid_combinationWhereInput
    none?: ark_grid_combinationWhereInput
  }

  export type skillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ark_grid_coreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ark_grid_combinationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jobCountOrderByAggregateInput = {
    id?: SortOrder
    job_code?: SortOrder
    name?: SortOrder
    req_job?: SortOrder
    root_class_code?: SortOrder
  }

  export type jobAvgOrderByAggregateInput = {
    id?: SortOrder
    req_job?: SortOrder
  }

  export type jobMaxOrderByAggregateInput = {
    id?: SortOrder
    job_code?: SortOrder
    name?: SortOrder
    req_job?: SortOrder
    root_class_code?: SortOrder
  }

  export type jobMinOrderByAggregateInput = {
    id?: SortOrder
    job_code?: SortOrder
    name?: SortOrder
    req_job?: SortOrder
    root_class_code?: SortOrder
  }

  export type jobSumOrderByAggregateInput = {
    id?: SortOrder
    req_job?: SortOrder
  }

  export type JobRelationFilter = {
    is?: jobWhereInput
    isNot?: jobWhereInput
  }

  export type TripodListRelationFilter = {
    every?: tripodWhereInput
    some?: tripodWhereInput
    none?: tripodWhereInput
  }

  export type tripodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type skillJob_codeNameCompoundUniqueInput = {
    job_code: string
    name: string
  }

  export type skillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    icon_url?: SortOrder
    description?: SortOrder
    description_default?: SortOrder
    neutralization?: SortOrder
    attack_type?: SortOrder
    super_armor?: SortOrder
    counter?: SortOrder
    part_destruct?: SortOrder
    tags?: SortOrder
    job_code?: SortOrder
  }

  export type skillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type skillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    icon_url?: SortOrder
    description?: SortOrder
    description_default?: SortOrder
    neutralization?: SortOrder
    attack_type?: SortOrder
    super_armor?: SortOrder
    counter?: SortOrder
    part_destruct?: SortOrder
    tags?: SortOrder
    job_code?: SortOrder
  }

  export type skillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    icon_url?: SortOrder
    description?: SortOrder
    description_default?: SortOrder
    neutralization?: SortOrder
    attack_type?: SortOrder
    super_armor?: SortOrder
    counter?: SortOrder
    part_destruct?: SortOrder
    tags?: SortOrder
    job_code?: SortOrder
  }

  export type skillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillRelationFilter = {
    is?: skillWhereInput
    isNot?: skillWhereInput
  }

  export type tripodCountOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    sort?: SortOrder
    name?: SortOrder
    icon_url?: SortOrder
    level_limit?: SortOrder
    description?: SortOrder
    skill_id?: SortOrder
  }

  export type tripodAvgOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    sort?: SortOrder
    level_limit?: SortOrder
    skill_id?: SortOrder
  }

  export type tripodMaxOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    sort?: SortOrder
    name?: SortOrder
    icon_url?: SortOrder
    level_limit?: SortOrder
    description?: SortOrder
    skill_id?: SortOrder
  }

  export type tripodMinOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    sort?: SortOrder
    name?: SortOrder
    icon_url?: SortOrder
    level_limit?: SortOrder
    description?: SortOrder
    skill_id?: SortOrder
  }

  export type tripodSumOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    sort?: SortOrder
    level_limit?: SortOrder
    skill_id?: SortOrder
  }

  export type ark_grid_coreJob_codeEngravingCategoryNameCompoundUniqueInput = {
    job_code: string
    engraving: string
    category: string
    name: string
  }

  export type ark_grid_coreCountOrderByAggregateInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    category?: SortOrder
    name?: SortOrder
    skill_effect?: SortOrder
    trigger_effect?: SortOrder
    base_effect?: SortOrder
  }

  export type ark_grid_coreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ark_grid_coreMaxOrderByAggregateInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    category?: SortOrder
    name?: SortOrder
    skill_effect?: SortOrder
    trigger_effect?: SortOrder
    base_effect?: SortOrder
  }

  export type ark_grid_coreMinOrderByAggregateInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    category?: SortOrder
    name?: SortOrder
    skill_effect?: SortOrder
    trigger_effect?: SortOrder
    base_effect?: SortOrder
  }

  export type ark_grid_coreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ark_grid_combinationJob_codeEngravingCore_combinationCompoundUniqueInput = {
    job_code: string
    engraving: string
    core_combination: string
  }

  export type ark_grid_combinationCountOrderByAggregateInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    core_combination?: SortOrder
    key_skills?: SortOrder
    operation?: SortOrder
  }

  export type ark_grid_combinationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ark_grid_combinationMaxOrderByAggregateInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    core_combination?: SortOrder
    key_skills?: SortOrder
    operation?: SortOrder
  }

  export type ark_grid_combinationMinOrderByAggregateInput = {
    id?: SortOrder
    job_code?: SortOrder
    engraving?: SortOrder
    core_combination?: SortOrder
    key_skills?: SortOrder
    operation?: SortOrder
  }

  export type ark_grid_combinationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Items_historyListRelationFilter = {
    every?: items_historyWhereInput
    some?: items_historyWhereInput
    none?: items_historyWhereInput
  }

  export type items_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type itemsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    icon?: SortOrder
    bundle_count?: SortOrder
    trade_remain_cnt?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
  }

  export type itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    bundle_count?: SortOrder
    trade_remain_cnt?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
  }

  export type itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    icon?: SortOrder
    bundle_count?: SortOrder
    trade_remain_cnt?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
  }

  export type itemsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    icon?: SortOrder
    bundle_count?: SortOrder
    trade_remain_cnt?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
  }

  export type itemsSumOrderByAggregateInput = {
    id?: SortOrder
    bundle_count?: SortOrder
    trade_remain_cnt?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ItemsRelationFilter = {
    is?: itemsWhereInput
    isNot?: itemsWhereInput
  }

  export type items_historyCountOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
    reg_date?: SortOrder
  }

  export type items_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
  }

  export type items_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
    reg_date?: SortOrder
  }

  export type items_historyMinOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
    reg_date?: SortOrder
  }

  export type items_historySumOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    yday_avg_price?: SortOrder
    recent_price?: SortOrder
    current_min_price?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type jobCreateNestedManyWithoutRoot_classInput = {
    create?: XOR<jobCreateWithoutRoot_classInput, jobUncheckedCreateWithoutRoot_classInput> | jobCreateWithoutRoot_classInput[] | jobUncheckedCreateWithoutRoot_classInput[]
    connectOrCreate?: jobCreateOrConnectWithoutRoot_classInput | jobCreateOrConnectWithoutRoot_classInput[]
    createMany?: jobCreateManyRoot_classInputEnvelope
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
  }

  export type jobUncheckedCreateNestedManyWithoutRoot_classInput = {
    create?: XOR<jobCreateWithoutRoot_classInput, jobUncheckedCreateWithoutRoot_classInput> | jobCreateWithoutRoot_classInput[] | jobUncheckedCreateWithoutRoot_classInput[]
    connectOrCreate?: jobCreateOrConnectWithoutRoot_classInput | jobCreateOrConnectWithoutRoot_classInput[]
    createMany?: jobCreateManyRoot_classInputEnvelope
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
  }

  export type jobUpdateManyWithoutRoot_classNestedInput = {
    create?: XOR<jobCreateWithoutRoot_classInput, jobUncheckedCreateWithoutRoot_classInput> | jobCreateWithoutRoot_classInput[] | jobUncheckedCreateWithoutRoot_classInput[]
    connectOrCreate?: jobCreateOrConnectWithoutRoot_classInput | jobCreateOrConnectWithoutRoot_classInput[]
    upsert?: jobUpsertWithWhereUniqueWithoutRoot_classInput | jobUpsertWithWhereUniqueWithoutRoot_classInput[]
    createMany?: jobCreateManyRoot_classInputEnvelope
    set?: jobWhereUniqueInput | jobWhereUniqueInput[]
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[]
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    update?: jobUpdateWithWhereUniqueWithoutRoot_classInput | jobUpdateWithWhereUniqueWithoutRoot_classInput[]
    updateMany?: jobUpdateManyWithWhereWithoutRoot_classInput | jobUpdateManyWithWhereWithoutRoot_classInput[]
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[]
  }

  export type jobUncheckedUpdateManyWithoutRoot_classNestedInput = {
    create?: XOR<jobCreateWithoutRoot_classInput, jobUncheckedCreateWithoutRoot_classInput> | jobCreateWithoutRoot_classInput[] | jobUncheckedCreateWithoutRoot_classInput[]
    connectOrCreate?: jobCreateOrConnectWithoutRoot_classInput | jobCreateOrConnectWithoutRoot_classInput[]
    upsert?: jobUpsertWithWhereUniqueWithoutRoot_classInput | jobUpsertWithWhereUniqueWithoutRoot_classInput[]
    createMany?: jobCreateManyRoot_classInputEnvelope
    set?: jobWhereUniqueInput | jobWhereUniqueInput[]
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[]
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    update?: jobUpdateWithWhereUniqueWithoutRoot_classInput | jobUpdateWithWhereUniqueWithoutRoot_classInput[]
    updateMany?: jobUpdateManyWithWhereWithoutRoot_classInput | jobUpdateManyWithWhereWithoutRoot_classInput[]
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[]
  }

  export type root_classCreateNestedOneWithoutJobsInput = {
    create?: XOR<root_classCreateWithoutJobsInput, root_classUncheckedCreateWithoutJobsInput>
    connectOrCreate?: root_classCreateOrConnectWithoutJobsInput
    connect?: root_classWhereUniqueInput
  }

  export type skillCreateNestedManyWithoutJobInput = {
    create?: XOR<skillCreateWithoutJobInput, skillUncheckedCreateWithoutJobInput> | skillCreateWithoutJobInput[] | skillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: skillCreateOrConnectWithoutJobInput | skillCreateOrConnectWithoutJobInput[]
    createMany?: skillCreateManyJobInputEnvelope
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
  }

  export type ark_grid_coreCreateNestedManyWithoutJobInput = {
    create?: XOR<ark_grid_coreCreateWithoutJobInput, ark_grid_coreUncheckedCreateWithoutJobInput> | ark_grid_coreCreateWithoutJobInput[] | ark_grid_coreUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ark_grid_coreCreateOrConnectWithoutJobInput | ark_grid_coreCreateOrConnectWithoutJobInput[]
    createMany?: ark_grid_coreCreateManyJobInputEnvelope
    connect?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
  }

  export type ark_grid_combinationCreateNestedManyWithoutJobInput = {
    create?: XOR<ark_grid_combinationCreateWithoutJobInput, ark_grid_combinationUncheckedCreateWithoutJobInput> | ark_grid_combinationCreateWithoutJobInput[] | ark_grid_combinationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ark_grid_combinationCreateOrConnectWithoutJobInput | ark_grid_combinationCreateOrConnectWithoutJobInput[]
    createMany?: ark_grid_combinationCreateManyJobInputEnvelope
    connect?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
  }

  export type skillUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<skillCreateWithoutJobInput, skillUncheckedCreateWithoutJobInput> | skillCreateWithoutJobInput[] | skillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: skillCreateOrConnectWithoutJobInput | skillCreateOrConnectWithoutJobInput[]
    createMany?: skillCreateManyJobInputEnvelope
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
  }

  export type ark_grid_coreUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ark_grid_coreCreateWithoutJobInput, ark_grid_coreUncheckedCreateWithoutJobInput> | ark_grid_coreCreateWithoutJobInput[] | ark_grid_coreUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ark_grid_coreCreateOrConnectWithoutJobInput | ark_grid_coreCreateOrConnectWithoutJobInput[]
    createMany?: ark_grid_coreCreateManyJobInputEnvelope
    connect?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
  }

  export type ark_grid_combinationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ark_grid_combinationCreateWithoutJobInput, ark_grid_combinationUncheckedCreateWithoutJobInput> | ark_grid_combinationCreateWithoutJobInput[] | ark_grid_combinationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ark_grid_combinationCreateOrConnectWithoutJobInput | ark_grid_combinationCreateOrConnectWithoutJobInput[]
    createMany?: ark_grid_combinationCreateManyJobInputEnvelope
    connect?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
  }

  export type root_classUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<root_classCreateWithoutJobsInput, root_classUncheckedCreateWithoutJobsInput>
    connectOrCreate?: root_classCreateOrConnectWithoutJobsInput
    upsert?: root_classUpsertWithoutJobsInput
    connect?: root_classWhereUniqueInput
    update?: XOR<XOR<root_classUpdateToOneWithWhereWithoutJobsInput, root_classUpdateWithoutJobsInput>, root_classUncheckedUpdateWithoutJobsInput>
  }

  export type skillUpdateManyWithoutJobNestedInput = {
    create?: XOR<skillCreateWithoutJobInput, skillUncheckedCreateWithoutJobInput> | skillCreateWithoutJobInput[] | skillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: skillCreateOrConnectWithoutJobInput | skillCreateOrConnectWithoutJobInput[]
    upsert?: skillUpsertWithWhereUniqueWithoutJobInput | skillUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: skillCreateManyJobInputEnvelope
    set?: skillWhereUniqueInput | skillWhereUniqueInput[]
    disconnect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    delete?: skillWhereUniqueInput | skillWhereUniqueInput[]
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    update?: skillUpdateWithWhereUniqueWithoutJobInput | skillUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: skillUpdateManyWithWhereWithoutJobInput | skillUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: skillScalarWhereInput | skillScalarWhereInput[]
  }

  export type ark_grid_coreUpdateManyWithoutJobNestedInput = {
    create?: XOR<ark_grid_coreCreateWithoutJobInput, ark_grid_coreUncheckedCreateWithoutJobInput> | ark_grid_coreCreateWithoutJobInput[] | ark_grid_coreUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ark_grid_coreCreateOrConnectWithoutJobInput | ark_grid_coreCreateOrConnectWithoutJobInput[]
    upsert?: ark_grid_coreUpsertWithWhereUniqueWithoutJobInput | ark_grid_coreUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ark_grid_coreCreateManyJobInputEnvelope
    set?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
    disconnect?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
    delete?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
    connect?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
    update?: ark_grid_coreUpdateWithWhereUniqueWithoutJobInput | ark_grid_coreUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ark_grid_coreUpdateManyWithWhereWithoutJobInput | ark_grid_coreUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ark_grid_coreScalarWhereInput | ark_grid_coreScalarWhereInput[]
  }

  export type ark_grid_combinationUpdateManyWithoutJobNestedInput = {
    create?: XOR<ark_grid_combinationCreateWithoutJobInput, ark_grid_combinationUncheckedCreateWithoutJobInput> | ark_grid_combinationCreateWithoutJobInput[] | ark_grid_combinationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ark_grid_combinationCreateOrConnectWithoutJobInput | ark_grid_combinationCreateOrConnectWithoutJobInput[]
    upsert?: ark_grid_combinationUpsertWithWhereUniqueWithoutJobInput | ark_grid_combinationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ark_grid_combinationCreateManyJobInputEnvelope
    set?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
    disconnect?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
    delete?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
    connect?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
    update?: ark_grid_combinationUpdateWithWhereUniqueWithoutJobInput | ark_grid_combinationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ark_grid_combinationUpdateManyWithWhereWithoutJobInput | ark_grid_combinationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ark_grid_combinationScalarWhereInput | ark_grid_combinationScalarWhereInput[]
  }

  export type skillUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<skillCreateWithoutJobInput, skillUncheckedCreateWithoutJobInput> | skillCreateWithoutJobInput[] | skillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: skillCreateOrConnectWithoutJobInput | skillCreateOrConnectWithoutJobInput[]
    upsert?: skillUpsertWithWhereUniqueWithoutJobInput | skillUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: skillCreateManyJobInputEnvelope
    set?: skillWhereUniqueInput | skillWhereUniqueInput[]
    disconnect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    delete?: skillWhereUniqueInput | skillWhereUniqueInput[]
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    update?: skillUpdateWithWhereUniqueWithoutJobInput | skillUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: skillUpdateManyWithWhereWithoutJobInput | skillUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: skillScalarWhereInput | skillScalarWhereInput[]
  }

  export type ark_grid_coreUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ark_grid_coreCreateWithoutJobInput, ark_grid_coreUncheckedCreateWithoutJobInput> | ark_grid_coreCreateWithoutJobInput[] | ark_grid_coreUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ark_grid_coreCreateOrConnectWithoutJobInput | ark_grid_coreCreateOrConnectWithoutJobInput[]
    upsert?: ark_grid_coreUpsertWithWhereUniqueWithoutJobInput | ark_grid_coreUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ark_grid_coreCreateManyJobInputEnvelope
    set?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
    disconnect?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
    delete?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
    connect?: ark_grid_coreWhereUniqueInput | ark_grid_coreWhereUniqueInput[]
    update?: ark_grid_coreUpdateWithWhereUniqueWithoutJobInput | ark_grid_coreUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ark_grid_coreUpdateManyWithWhereWithoutJobInput | ark_grid_coreUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ark_grid_coreScalarWhereInput | ark_grid_coreScalarWhereInput[]
  }

  export type ark_grid_combinationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ark_grid_combinationCreateWithoutJobInput, ark_grid_combinationUncheckedCreateWithoutJobInput> | ark_grid_combinationCreateWithoutJobInput[] | ark_grid_combinationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ark_grid_combinationCreateOrConnectWithoutJobInput | ark_grid_combinationCreateOrConnectWithoutJobInput[]
    upsert?: ark_grid_combinationUpsertWithWhereUniqueWithoutJobInput | ark_grid_combinationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ark_grid_combinationCreateManyJobInputEnvelope
    set?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
    disconnect?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
    delete?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
    connect?: ark_grid_combinationWhereUniqueInput | ark_grid_combinationWhereUniqueInput[]
    update?: ark_grid_combinationUpdateWithWhereUniqueWithoutJobInput | ark_grid_combinationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ark_grid_combinationUpdateManyWithWhereWithoutJobInput | ark_grid_combinationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ark_grid_combinationScalarWhereInput | ark_grid_combinationScalarWhereInput[]
  }

  export type jobCreateNestedOneWithoutSkillsInput = {
    create?: XOR<jobCreateWithoutSkillsInput, jobUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: jobCreateOrConnectWithoutSkillsInput
    connect?: jobWhereUniqueInput
  }

  export type tripodCreateNestedManyWithoutSkillInput = {
    create?: XOR<tripodCreateWithoutSkillInput, tripodUncheckedCreateWithoutSkillInput> | tripodCreateWithoutSkillInput[] | tripodUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: tripodCreateOrConnectWithoutSkillInput | tripodCreateOrConnectWithoutSkillInput[]
    createMany?: tripodCreateManySkillInputEnvelope
    connect?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
  }

  export type tripodUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<tripodCreateWithoutSkillInput, tripodUncheckedCreateWithoutSkillInput> | tripodCreateWithoutSkillInput[] | tripodUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: tripodCreateOrConnectWithoutSkillInput | tripodCreateOrConnectWithoutSkillInput[]
    createMany?: tripodCreateManySkillInputEnvelope
    connect?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
  }

  export type jobUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<jobCreateWithoutSkillsInput, jobUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: jobCreateOrConnectWithoutSkillsInput
    upsert?: jobUpsertWithoutSkillsInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutSkillsInput, jobUpdateWithoutSkillsInput>, jobUncheckedUpdateWithoutSkillsInput>
  }

  export type tripodUpdateManyWithoutSkillNestedInput = {
    create?: XOR<tripodCreateWithoutSkillInput, tripodUncheckedCreateWithoutSkillInput> | tripodCreateWithoutSkillInput[] | tripodUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: tripodCreateOrConnectWithoutSkillInput | tripodCreateOrConnectWithoutSkillInput[]
    upsert?: tripodUpsertWithWhereUniqueWithoutSkillInput | tripodUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: tripodCreateManySkillInputEnvelope
    set?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
    disconnect?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
    delete?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
    connect?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
    update?: tripodUpdateWithWhereUniqueWithoutSkillInput | tripodUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: tripodUpdateManyWithWhereWithoutSkillInput | tripodUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: tripodScalarWhereInput | tripodScalarWhereInput[]
  }

  export type tripodUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<tripodCreateWithoutSkillInput, tripodUncheckedCreateWithoutSkillInput> | tripodCreateWithoutSkillInput[] | tripodUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: tripodCreateOrConnectWithoutSkillInput | tripodCreateOrConnectWithoutSkillInput[]
    upsert?: tripodUpsertWithWhereUniqueWithoutSkillInput | tripodUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: tripodCreateManySkillInputEnvelope
    set?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
    disconnect?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
    delete?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
    connect?: tripodWhereUniqueInput | tripodWhereUniqueInput[]
    update?: tripodUpdateWithWhereUniqueWithoutSkillInput | tripodUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: tripodUpdateManyWithWhereWithoutSkillInput | tripodUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: tripodScalarWhereInput | tripodScalarWhereInput[]
  }

  export type skillCreateNestedOneWithoutTripodsInput = {
    create?: XOR<skillCreateWithoutTripodsInput, skillUncheckedCreateWithoutTripodsInput>
    connectOrCreate?: skillCreateOrConnectWithoutTripodsInput
    connect?: skillWhereUniqueInput
  }

  export type skillUpdateOneRequiredWithoutTripodsNestedInput = {
    create?: XOR<skillCreateWithoutTripodsInput, skillUncheckedCreateWithoutTripodsInput>
    connectOrCreate?: skillCreateOrConnectWithoutTripodsInput
    upsert?: skillUpsertWithoutTripodsInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutTripodsInput, skillUpdateWithoutTripodsInput>, skillUncheckedUpdateWithoutTripodsInput>
  }

  export type jobCreateNestedOneWithoutArk_grid_coreInput = {
    create?: XOR<jobCreateWithoutArk_grid_coreInput, jobUncheckedCreateWithoutArk_grid_coreInput>
    connectOrCreate?: jobCreateOrConnectWithoutArk_grid_coreInput
    connect?: jobWhereUniqueInput
  }

  export type jobUpdateOneRequiredWithoutArk_grid_coreNestedInput = {
    create?: XOR<jobCreateWithoutArk_grid_coreInput, jobUncheckedCreateWithoutArk_grid_coreInput>
    connectOrCreate?: jobCreateOrConnectWithoutArk_grid_coreInput
    upsert?: jobUpsertWithoutArk_grid_coreInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutArk_grid_coreInput, jobUpdateWithoutArk_grid_coreInput>, jobUncheckedUpdateWithoutArk_grid_coreInput>
  }

  export type jobCreateNestedOneWithoutArk_grid_combinationInput = {
    create?: XOR<jobCreateWithoutArk_grid_combinationInput, jobUncheckedCreateWithoutArk_grid_combinationInput>
    connectOrCreate?: jobCreateOrConnectWithoutArk_grid_combinationInput
    connect?: jobWhereUniqueInput
  }

  export type jobUpdateOneRequiredWithoutArk_grid_combinationNestedInput = {
    create?: XOR<jobCreateWithoutArk_grid_combinationInput, jobUncheckedCreateWithoutArk_grid_combinationInput>
    connectOrCreate?: jobCreateOrConnectWithoutArk_grid_combinationInput
    upsert?: jobUpsertWithoutArk_grid_combinationInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutArk_grid_combinationInput, jobUpdateWithoutArk_grid_combinationInput>, jobUncheckedUpdateWithoutArk_grid_combinationInput>
  }

  export type items_historyCreateNestedManyWithoutItemInput = {
    create?: XOR<items_historyCreateWithoutItemInput, items_historyUncheckedCreateWithoutItemInput> | items_historyCreateWithoutItemInput[] | items_historyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: items_historyCreateOrConnectWithoutItemInput | items_historyCreateOrConnectWithoutItemInput[]
    createMany?: items_historyCreateManyItemInputEnvelope
    connect?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
  }

  export type items_historyUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<items_historyCreateWithoutItemInput, items_historyUncheckedCreateWithoutItemInput> | items_historyCreateWithoutItemInput[] | items_historyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: items_historyCreateOrConnectWithoutItemInput | items_historyCreateOrConnectWithoutItemInput[]
    createMany?: items_historyCreateManyItemInputEnvelope
    connect?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type items_historyUpdateManyWithoutItemNestedInput = {
    create?: XOR<items_historyCreateWithoutItemInput, items_historyUncheckedCreateWithoutItemInput> | items_historyCreateWithoutItemInput[] | items_historyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: items_historyCreateOrConnectWithoutItemInput | items_historyCreateOrConnectWithoutItemInput[]
    upsert?: items_historyUpsertWithWhereUniqueWithoutItemInput | items_historyUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: items_historyCreateManyItemInputEnvelope
    set?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
    disconnect?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
    delete?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
    connect?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
    update?: items_historyUpdateWithWhereUniqueWithoutItemInput | items_historyUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: items_historyUpdateManyWithWhereWithoutItemInput | items_historyUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: items_historyScalarWhereInput | items_historyScalarWhereInput[]
  }

  export type items_historyUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<items_historyCreateWithoutItemInput, items_historyUncheckedCreateWithoutItemInput> | items_historyCreateWithoutItemInput[] | items_historyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: items_historyCreateOrConnectWithoutItemInput | items_historyCreateOrConnectWithoutItemInput[]
    upsert?: items_historyUpsertWithWhereUniqueWithoutItemInput | items_historyUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: items_historyCreateManyItemInputEnvelope
    set?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
    disconnect?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
    delete?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
    connect?: items_historyWhereUniqueInput | items_historyWhereUniqueInput[]
    update?: items_historyUpdateWithWhereUniqueWithoutItemInput | items_historyUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: items_historyUpdateManyWithWhereWithoutItemInput | items_historyUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: items_historyScalarWhereInput | items_historyScalarWhereInput[]
  }

  export type itemsCreateNestedOneWithoutHistoryInput = {
    create?: XOR<itemsCreateWithoutHistoryInput, itemsUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: itemsCreateOrConnectWithoutHistoryInput
    connect?: itemsWhereUniqueInput
  }

  export type itemsUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<itemsCreateWithoutHistoryInput, itemsUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: itemsCreateOrConnectWithoutHistoryInput
    upsert?: itemsUpsertWithoutHistoryInput
    connect?: itemsWhereUniqueInput
    update?: XOR<XOR<itemsUpdateToOneWithWhereWithoutHistoryInput, itemsUpdateWithoutHistoryInput>, itemsUncheckedUpdateWithoutHistoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type jobCreateWithoutRoot_classInput = {
    job_code: string
    name: string
    req_job: number
    skills?: skillCreateNestedManyWithoutJobInput
    ark_grid_core?: ark_grid_coreCreateNestedManyWithoutJobInput
    ark_grid_combination?: ark_grid_combinationCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutRoot_classInput = {
    id?: number
    job_code: string
    name: string
    req_job: number
    skills?: skillUncheckedCreateNestedManyWithoutJobInput
    ark_grid_core?: ark_grid_coreUncheckedCreateNestedManyWithoutJobInput
    ark_grid_combination?: ark_grid_combinationUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutRoot_classInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutRoot_classInput, jobUncheckedCreateWithoutRoot_classInput>
  }

  export type jobCreateManyRoot_classInputEnvelope = {
    data: jobCreateManyRoot_classInput | jobCreateManyRoot_classInput[]
    skipDuplicates?: boolean
  }

  export type jobUpsertWithWhereUniqueWithoutRoot_classInput = {
    where: jobWhereUniqueInput
    update: XOR<jobUpdateWithoutRoot_classInput, jobUncheckedUpdateWithoutRoot_classInput>
    create: XOR<jobCreateWithoutRoot_classInput, jobUncheckedCreateWithoutRoot_classInput>
  }

  export type jobUpdateWithWhereUniqueWithoutRoot_classInput = {
    where: jobWhereUniqueInput
    data: XOR<jobUpdateWithoutRoot_classInput, jobUncheckedUpdateWithoutRoot_classInput>
  }

  export type jobUpdateManyWithWhereWithoutRoot_classInput = {
    where: jobScalarWhereInput
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyWithoutRoot_classInput>
  }

  export type jobScalarWhereInput = {
    AND?: jobScalarWhereInput | jobScalarWhereInput[]
    OR?: jobScalarWhereInput[]
    NOT?: jobScalarWhereInput | jobScalarWhereInput[]
    id?: IntFilter<"job"> | number
    job_code?: StringFilter<"job"> | string
    name?: StringFilter<"job"> | string
    req_job?: IntFilter<"job"> | number
    root_class_code?: StringFilter<"job"> | string
  }

  export type root_classCreateWithoutJobsInput = {
    root_class_code: string
    name: string
  }

  export type root_classUncheckedCreateWithoutJobsInput = {
    id?: number
    root_class_code: string
    name: string
  }

  export type root_classCreateOrConnectWithoutJobsInput = {
    where: root_classWhereUniqueInput
    create: XOR<root_classCreateWithoutJobsInput, root_classUncheckedCreateWithoutJobsInput>
  }

  export type skillCreateWithoutJobInput = {
    id: number
    name: string
    type: string
    category: string
    icon_url: string
    description: string
    description_default: string
    neutralization?: string | null
    attack_type?: string | null
    super_armor?: string | null
    counter?: string | null
    part_destruct?: string | null
    tags?: string | null
    tripods?: tripodCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutJobInput = {
    id: number
    name: string
    type: string
    category: string
    icon_url: string
    description: string
    description_default: string
    neutralization?: string | null
    attack_type?: string | null
    super_armor?: string | null
    counter?: string | null
    part_destruct?: string | null
    tags?: string | null
    tripods?: tripodUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutJobInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutJobInput, skillUncheckedCreateWithoutJobInput>
  }

  export type skillCreateManyJobInputEnvelope = {
    data: skillCreateManyJobInput | skillCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ark_grid_coreCreateWithoutJobInput = {
    engraving: string
    category: string
    name: string
    skill_effect?: string | null
    trigger_effect?: string | null
    base_effect?: string | null
  }

  export type ark_grid_coreUncheckedCreateWithoutJobInput = {
    id?: number
    engraving: string
    category: string
    name: string
    skill_effect?: string | null
    trigger_effect?: string | null
    base_effect?: string | null
  }

  export type ark_grid_coreCreateOrConnectWithoutJobInput = {
    where: ark_grid_coreWhereUniqueInput
    create: XOR<ark_grid_coreCreateWithoutJobInput, ark_grid_coreUncheckedCreateWithoutJobInput>
  }

  export type ark_grid_coreCreateManyJobInputEnvelope = {
    data: ark_grid_coreCreateManyJobInput | ark_grid_coreCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ark_grid_combinationCreateWithoutJobInput = {
    engraving: string
    core_combination: string
    key_skills: string
    operation: string
  }

  export type ark_grid_combinationUncheckedCreateWithoutJobInput = {
    id?: number
    engraving: string
    core_combination: string
    key_skills: string
    operation: string
  }

  export type ark_grid_combinationCreateOrConnectWithoutJobInput = {
    where: ark_grid_combinationWhereUniqueInput
    create: XOR<ark_grid_combinationCreateWithoutJobInput, ark_grid_combinationUncheckedCreateWithoutJobInput>
  }

  export type ark_grid_combinationCreateManyJobInputEnvelope = {
    data: ark_grid_combinationCreateManyJobInput | ark_grid_combinationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type root_classUpsertWithoutJobsInput = {
    update: XOR<root_classUpdateWithoutJobsInput, root_classUncheckedUpdateWithoutJobsInput>
    create: XOR<root_classCreateWithoutJobsInput, root_classUncheckedCreateWithoutJobsInput>
    where?: root_classWhereInput
  }

  export type root_classUpdateToOneWithWhereWithoutJobsInput = {
    where?: root_classWhereInput
    data: XOR<root_classUpdateWithoutJobsInput, root_classUncheckedUpdateWithoutJobsInput>
  }

  export type root_classUpdateWithoutJobsInput = {
    root_class_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type root_classUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    root_class_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type skillUpsertWithWhereUniqueWithoutJobInput = {
    where: skillWhereUniqueInput
    update: XOR<skillUpdateWithoutJobInput, skillUncheckedUpdateWithoutJobInput>
    create: XOR<skillCreateWithoutJobInput, skillUncheckedCreateWithoutJobInput>
  }

  export type skillUpdateWithWhereUniqueWithoutJobInput = {
    where: skillWhereUniqueInput
    data: XOR<skillUpdateWithoutJobInput, skillUncheckedUpdateWithoutJobInput>
  }

  export type skillUpdateManyWithWhereWithoutJobInput = {
    where: skillScalarWhereInput
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyWithoutJobInput>
  }

  export type skillScalarWhereInput = {
    AND?: skillScalarWhereInput | skillScalarWhereInput[]
    OR?: skillScalarWhereInput[]
    NOT?: skillScalarWhereInput | skillScalarWhereInput[]
    id?: IntFilter<"skill"> | number
    name?: StringFilter<"skill"> | string
    type?: StringFilter<"skill"> | string
    category?: StringFilter<"skill"> | string
    icon_url?: StringFilter<"skill"> | string
    description?: StringFilter<"skill"> | string
    description_default?: StringFilter<"skill"> | string
    neutralization?: StringNullableFilter<"skill"> | string | null
    attack_type?: StringNullableFilter<"skill"> | string | null
    super_armor?: StringNullableFilter<"skill"> | string | null
    counter?: StringNullableFilter<"skill"> | string | null
    part_destruct?: StringNullableFilter<"skill"> | string | null
    tags?: StringNullableFilter<"skill"> | string | null
    job_code?: StringFilter<"skill"> | string
  }

  export type ark_grid_coreUpsertWithWhereUniqueWithoutJobInput = {
    where: ark_grid_coreWhereUniqueInput
    update: XOR<ark_grid_coreUpdateWithoutJobInput, ark_grid_coreUncheckedUpdateWithoutJobInput>
    create: XOR<ark_grid_coreCreateWithoutJobInput, ark_grid_coreUncheckedCreateWithoutJobInput>
  }

  export type ark_grid_coreUpdateWithWhereUniqueWithoutJobInput = {
    where: ark_grid_coreWhereUniqueInput
    data: XOR<ark_grid_coreUpdateWithoutJobInput, ark_grid_coreUncheckedUpdateWithoutJobInput>
  }

  export type ark_grid_coreUpdateManyWithWhereWithoutJobInput = {
    where: ark_grid_coreScalarWhereInput
    data: XOR<ark_grid_coreUpdateManyMutationInput, ark_grid_coreUncheckedUpdateManyWithoutJobInput>
  }

  export type ark_grid_coreScalarWhereInput = {
    AND?: ark_grid_coreScalarWhereInput | ark_grid_coreScalarWhereInput[]
    OR?: ark_grid_coreScalarWhereInput[]
    NOT?: ark_grid_coreScalarWhereInput | ark_grid_coreScalarWhereInput[]
    id?: IntFilter<"ark_grid_core"> | number
    job_code?: StringFilter<"ark_grid_core"> | string
    engraving?: StringFilter<"ark_grid_core"> | string
    category?: StringFilter<"ark_grid_core"> | string
    name?: StringFilter<"ark_grid_core"> | string
    skill_effect?: StringNullableFilter<"ark_grid_core"> | string | null
    trigger_effect?: StringNullableFilter<"ark_grid_core"> | string | null
    base_effect?: StringNullableFilter<"ark_grid_core"> | string | null
  }

  export type ark_grid_combinationUpsertWithWhereUniqueWithoutJobInput = {
    where: ark_grid_combinationWhereUniqueInput
    update: XOR<ark_grid_combinationUpdateWithoutJobInput, ark_grid_combinationUncheckedUpdateWithoutJobInput>
    create: XOR<ark_grid_combinationCreateWithoutJobInput, ark_grid_combinationUncheckedCreateWithoutJobInput>
  }

  export type ark_grid_combinationUpdateWithWhereUniqueWithoutJobInput = {
    where: ark_grid_combinationWhereUniqueInput
    data: XOR<ark_grid_combinationUpdateWithoutJobInput, ark_grid_combinationUncheckedUpdateWithoutJobInput>
  }

  export type ark_grid_combinationUpdateManyWithWhereWithoutJobInput = {
    where: ark_grid_combinationScalarWhereInput
    data: XOR<ark_grid_combinationUpdateManyMutationInput, ark_grid_combinationUncheckedUpdateManyWithoutJobInput>
  }

  export type ark_grid_combinationScalarWhereInput = {
    AND?: ark_grid_combinationScalarWhereInput | ark_grid_combinationScalarWhereInput[]
    OR?: ark_grid_combinationScalarWhereInput[]
    NOT?: ark_grid_combinationScalarWhereInput | ark_grid_combinationScalarWhereInput[]
    id?: IntFilter<"ark_grid_combination"> | number
    job_code?: StringFilter<"ark_grid_combination"> | string
    engraving?: StringFilter<"ark_grid_combination"> | string
    core_combination?: StringFilter<"ark_grid_combination"> | string
    key_skills?: StringFilter<"ark_grid_combination"> | string
    operation?: StringFilter<"ark_grid_combination"> | string
  }

  export type jobCreateWithoutSkillsInput = {
    job_code: string
    name: string
    req_job: number
    root_class: root_classCreateNestedOneWithoutJobsInput
    ark_grid_core?: ark_grid_coreCreateNestedManyWithoutJobInput
    ark_grid_combination?: ark_grid_combinationCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutSkillsInput = {
    id?: number
    job_code: string
    name: string
    req_job: number
    root_class_code: string
    ark_grid_core?: ark_grid_coreUncheckedCreateNestedManyWithoutJobInput
    ark_grid_combination?: ark_grid_combinationUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutSkillsInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutSkillsInput, jobUncheckedCreateWithoutSkillsInput>
  }

  export type tripodCreateWithoutSkillInput = {
    tier: number
    sort: number
    name: string
    icon_url: string
    level_limit: number
    description: string
  }

  export type tripodUncheckedCreateWithoutSkillInput = {
    id?: number
    tier: number
    sort: number
    name: string
    icon_url: string
    level_limit: number
    description: string
  }

  export type tripodCreateOrConnectWithoutSkillInput = {
    where: tripodWhereUniqueInput
    create: XOR<tripodCreateWithoutSkillInput, tripodUncheckedCreateWithoutSkillInput>
  }

  export type tripodCreateManySkillInputEnvelope = {
    data: tripodCreateManySkillInput | tripodCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type jobUpsertWithoutSkillsInput = {
    update: XOR<jobUpdateWithoutSkillsInput, jobUncheckedUpdateWithoutSkillsInput>
    create: XOR<jobCreateWithoutSkillsInput, jobUncheckedCreateWithoutSkillsInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutSkillsInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutSkillsInput, jobUncheckedUpdateWithoutSkillsInput>
  }

  export type jobUpdateWithoutSkillsInput = {
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    root_class?: root_classUpdateOneRequiredWithoutJobsNestedInput
    ark_grid_core?: ark_grid_coreUpdateManyWithoutJobNestedInput
    ark_grid_combination?: ark_grid_combinationUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    root_class_code?: StringFieldUpdateOperationsInput | string
    ark_grid_core?: ark_grid_coreUncheckedUpdateManyWithoutJobNestedInput
    ark_grid_combination?: ark_grid_combinationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type tripodUpsertWithWhereUniqueWithoutSkillInput = {
    where: tripodWhereUniqueInput
    update: XOR<tripodUpdateWithoutSkillInput, tripodUncheckedUpdateWithoutSkillInput>
    create: XOR<tripodCreateWithoutSkillInput, tripodUncheckedCreateWithoutSkillInput>
  }

  export type tripodUpdateWithWhereUniqueWithoutSkillInput = {
    where: tripodWhereUniqueInput
    data: XOR<tripodUpdateWithoutSkillInput, tripodUncheckedUpdateWithoutSkillInput>
  }

  export type tripodUpdateManyWithWhereWithoutSkillInput = {
    where: tripodScalarWhereInput
    data: XOR<tripodUpdateManyMutationInput, tripodUncheckedUpdateManyWithoutSkillInput>
  }

  export type tripodScalarWhereInput = {
    AND?: tripodScalarWhereInput | tripodScalarWhereInput[]
    OR?: tripodScalarWhereInput[]
    NOT?: tripodScalarWhereInput | tripodScalarWhereInput[]
    id?: IntFilter<"tripod"> | number
    tier?: IntFilter<"tripod"> | number
    sort?: IntFilter<"tripod"> | number
    name?: StringFilter<"tripod"> | string
    icon_url?: StringFilter<"tripod"> | string
    level_limit?: IntFilter<"tripod"> | number
    description?: StringFilter<"tripod"> | string
    skill_id?: IntFilter<"tripod"> | number
  }

  export type skillCreateWithoutTripodsInput = {
    id: number
    name: string
    type: string
    category: string
    icon_url: string
    description: string
    description_default: string
    neutralization?: string | null
    attack_type?: string | null
    super_armor?: string | null
    counter?: string | null
    part_destruct?: string | null
    tags?: string | null
    job: jobCreateNestedOneWithoutSkillsInput
  }

  export type skillUncheckedCreateWithoutTripodsInput = {
    id: number
    name: string
    type: string
    category: string
    icon_url: string
    description: string
    description_default: string
    neutralization?: string | null
    attack_type?: string | null
    super_armor?: string | null
    counter?: string | null
    part_destruct?: string | null
    tags?: string | null
    job_code: string
  }

  export type skillCreateOrConnectWithoutTripodsInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutTripodsInput, skillUncheckedCreateWithoutTripodsInput>
  }

  export type skillUpsertWithoutTripodsInput = {
    update: XOR<skillUpdateWithoutTripodsInput, skillUncheckedUpdateWithoutTripodsInput>
    create: XOR<skillCreateWithoutTripodsInput, skillUncheckedCreateWithoutTripodsInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutTripodsInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutTripodsInput, skillUncheckedUpdateWithoutTripodsInput>
  }

  export type skillUpdateWithoutTripodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_default?: StringFieldUpdateOperationsInput | string
    neutralization?: NullableStringFieldUpdateOperationsInput | string | null
    attack_type?: NullableStringFieldUpdateOperationsInput | string | null
    super_armor?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableStringFieldUpdateOperationsInput | string | null
    part_destruct?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    job?: jobUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type skillUncheckedUpdateWithoutTripodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_default?: StringFieldUpdateOperationsInput | string
    neutralization?: NullableStringFieldUpdateOperationsInput | string | null
    attack_type?: NullableStringFieldUpdateOperationsInput | string | null
    super_armor?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableStringFieldUpdateOperationsInput | string | null
    part_destruct?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    job_code?: StringFieldUpdateOperationsInput | string
  }

  export type jobCreateWithoutArk_grid_coreInput = {
    job_code: string
    name: string
    req_job: number
    root_class: root_classCreateNestedOneWithoutJobsInput
    skills?: skillCreateNestedManyWithoutJobInput
    ark_grid_combination?: ark_grid_combinationCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutArk_grid_coreInput = {
    id?: number
    job_code: string
    name: string
    req_job: number
    root_class_code: string
    skills?: skillUncheckedCreateNestedManyWithoutJobInput
    ark_grid_combination?: ark_grid_combinationUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutArk_grid_coreInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutArk_grid_coreInput, jobUncheckedCreateWithoutArk_grid_coreInput>
  }

  export type jobUpsertWithoutArk_grid_coreInput = {
    update: XOR<jobUpdateWithoutArk_grid_coreInput, jobUncheckedUpdateWithoutArk_grid_coreInput>
    create: XOR<jobCreateWithoutArk_grid_coreInput, jobUncheckedCreateWithoutArk_grid_coreInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutArk_grid_coreInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutArk_grid_coreInput, jobUncheckedUpdateWithoutArk_grid_coreInput>
  }

  export type jobUpdateWithoutArk_grid_coreInput = {
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    root_class?: root_classUpdateOneRequiredWithoutJobsNestedInput
    skills?: skillUpdateManyWithoutJobNestedInput
    ark_grid_combination?: ark_grid_combinationUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutArk_grid_coreInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    root_class_code?: StringFieldUpdateOperationsInput | string
    skills?: skillUncheckedUpdateManyWithoutJobNestedInput
    ark_grid_combination?: ark_grid_combinationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobCreateWithoutArk_grid_combinationInput = {
    job_code: string
    name: string
    req_job: number
    root_class: root_classCreateNestedOneWithoutJobsInput
    skills?: skillCreateNestedManyWithoutJobInput
    ark_grid_core?: ark_grid_coreCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutArk_grid_combinationInput = {
    id?: number
    job_code: string
    name: string
    req_job: number
    root_class_code: string
    skills?: skillUncheckedCreateNestedManyWithoutJobInput
    ark_grid_core?: ark_grid_coreUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutArk_grid_combinationInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutArk_grid_combinationInput, jobUncheckedCreateWithoutArk_grid_combinationInput>
  }

  export type jobUpsertWithoutArk_grid_combinationInput = {
    update: XOR<jobUpdateWithoutArk_grid_combinationInput, jobUncheckedUpdateWithoutArk_grid_combinationInput>
    create: XOR<jobCreateWithoutArk_grid_combinationInput, jobUncheckedCreateWithoutArk_grid_combinationInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutArk_grid_combinationInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutArk_grid_combinationInput, jobUncheckedUpdateWithoutArk_grid_combinationInput>
  }

  export type jobUpdateWithoutArk_grid_combinationInput = {
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    root_class?: root_classUpdateOneRequiredWithoutJobsNestedInput
    skills?: skillUpdateManyWithoutJobNestedInput
    ark_grid_core?: ark_grid_coreUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutArk_grid_combinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    root_class_code?: StringFieldUpdateOperationsInput | string
    skills?: skillUncheckedUpdateManyWithoutJobNestedInput
    ark_grid_core?: ark_grid_coreUncheckedUpdateManyWithoutJobNestedInput
  }

  export type items_historyCreateWithoutItemInput = {
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    reg_date?: Date | string
  }

  export type items_historyUncheckedCreateWithoutItemInput = {
    id?: number
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    reg_date?: Date | string
  }

  export type items_historyCreateOrConnectWithoutItemInput = {
    where: items_historyWhereUniqueInput
    create: XOR<items_historyCreateWithoutItemInput, items_historyUncheckedCreateWithoutItemInput>
  }

  export type items_historyCreateManyItemInputEnvelope = {
    data: items_historyCreateManyItemInput | items_historyCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type items_historyUpsertWithWhereUniqueWithoutItemInput = {
    where: items_historyWhereUniqueInput
    update: XOR<items_historyUpdateWithoutItemInput, items_historyUncheckedUpdateWithoutItemInput>
    create: XOR<items_historyCreateWithoutItemInput, items_historyUncheckedCreateWithoutItemInput>
  }

  export type items_historyUpdateWithWhereUniqueWithoutItemInput = {
    where: items_historyWhereUniqueInput
    data: XOR<items_historyUpdateWithoutItemInput, items_historyUncheckedUpdateWithoutItemInput>
  }

  export type items_historyUpdateManyWithWhereWithoutItemInput = {
    where: items_historyScalarWhereInput
    data: XOR<items_historyUpdateManyMutationInput, items_historyUncheckedUpdateManyWithoutItemInput>
  }

  export type items_historyScalarWhereInput = {
    AND?: items_historyScalarWhereInput | items_historyScalarWhereInput[]
    OR?: items_historyScalarWhereInput[]
    NOT?: items_historyScalarWhereInput | items_historyScalarWhereInput[]
    id?: IntFilter<"items_history"> | number
    item_id?: IntFilter<"items_history"> | number
    yday_avg_price?: FloatFilter<"items_history"> | number
    recent_price?: IntFilter<"items_history"> | number
    current_min_price?: IntFilter<"items_history"> | number
    reg_date?: DateTimeFilter<"items_history"> | Date | string
  }

  export type itemsCreateWithoutHistoryInput = {
    id: number
    name: string
    grade: string
    icon: string
    bundle_count: number
    trade_remain_cnt?: number | null
    yday_avg_price: number
    recent_price: number
    current_min_price: number
  }

  export type itemsUncheckedCreateWithoutHistoryInput = {
    id: number
    name: string
    grade: string
    icon: string
    bundle_count: number
    trade_remain_cnt?: number | null
    yday_avg_price: number
    recent_price: number
    current_min_price: number
  }

  export type itemsCreateOrConnectWithoutHistoryInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutHistoryInput, itemsUncheckedCreateWithoutHistoryInput>
  }

  export type itemsUpsertWithoutHistoryInput = {
    update: XOR<itemsUpdateWithoutHistoryInput, itemsUncheckedUpdateWithoutHistoryInput>
    create: XOR<itemsCreateWithoutHistoryInput, itemsUncheckedCreateWithoutHistoryInput>
    where?: itemsWhereInput
  }

  export type itemsUpdateToOneWithWhereWithoutHistoryInput = {
    where?: itemsWhereInput
    data: XOR<itemsUpdateWithoutHistoryInput, itemsUncheckedUpdateWithoutHistoryInput>
  }

  export type itemsUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bundle_count?: IntFieldUpdateOperationsInput | number
    trade_remain_cnt?: NullableIntFieldUpdateOperationsInput | number | null
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
  }

  export type itemsUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    bundle_count?: IntFieldUpdateOperationsInput | number
    trade_remain_cnt?: NullableIntFieldUpdateOperationsInput | number | null
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
  }

  export type jobCreateManyRoot_classInput = {
    id?: number
    job_code: string
    name: string
    req_job: number
  }

  export type jobUpdateWithoutRoot_classInput = {
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    skills?: skillUpdateManyWithoutJobNestedInput
    ark_grid_core?: ark_grid_coreUpdateManyWithoutJobNestedInput
    ark_grid_combination?: ark_grid_combinationUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutRoot_classInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
    skills?: skillUncheckedUpdateManyWithoutJobNestedInput
    ark_grid_core?: ark_grid_coreUncheckedUpdateManyWithoutJobNestedInput
    ark_grid_combination?: ark_grid_combinationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateManyWithoutRoot_classInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    req_job?: IntFieldUpdateOperationsInput | number
  }

  export type skillCreateManyJobInput = {
    id: number
    name: string
    type: string
    category: string
    icon_url: string
    description: string
    description_default: string
    neutralization?: string | null
    attack_type?: string | null
    super_armor?: string | null
    counter?: string | null
    part_destruct?: string | null
    tags?: string | null
  }

  export type ark_grid_coreCreateManyJobInput = {
    id?: number
    engraving: string
    category: string
    name: string
    skill_effect?: string | null
    trigger_effect?: string | null
    base_effect?: string | null
  }

  export type ark_grid_combinationCreateManyJobInput = {
    id?: number
    engraving: string
    core_combination: string
    key_skills: string
    operation: string
  }

  export type skillUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_default?: StringFieldUpdateOperationsInput | string
    neutralization?: NullableStringFieldUpdateOperationsInput | string | null
    attack_type?: NullableStringFieldUpdateOperationsInput | string | null
    super_armor?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableStringFieldUpdateOperationsInput | string | null
    part_destruct?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    tripods?: tripodUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_default?: StringFieldUpdateOperationsInput | string
    neutralization?: NullableStringFieldUpdateOperationsInput | string | null
    attack_type?: NullableStringFieldUpdateOperationsInput | string | null
    super_armor?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableStringFieldUpdateOperationsInput | string | null
    part_destruct?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    tripods?: tripodUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_default?: StringFieldUpdateOperationsInput | string
    neutralization?: NullableStringFieldUpdateOperationsInput | string | null
    attack_type?: NullableStringFieldUpdateOperationsInput | string | null
    super_armor?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableStringFieldUpdateOperationsInput | string | null
    part_destruct?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ark_grid_coreUpdateWithoutJobInput = {
    engraving?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill_effect?: NullableStringFieldUpdateOperationsInput | string | null
    trigger_effect?: NullableStringFieldUpdateOperationsInput | string | null
    base_effect?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ark_grid_coreUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    engraving?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill_effect?: NullableStringFieldUpdateOperationsInput | string | null
    trigger_effect?: NullableStringFieldUpdateOperationsInput | string | null
    base_effect?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ark_grid_coreUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    engraving?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    skill_effect?: NullableStringFieldUpdateOperationsInput | string | null
    trigger_effect?: NullableStringFieldUpdateOperationsInput | string | null
    base_effect?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ark_grid_combinationUpdateWithoutJobInput = {
    engraving?: StringFieldUpdateOperationsInput | string
    core_combination?: StringFieldUpdateOperationsInput | string
    key_skills?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
  }

  export type ark_grid_combinationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    engraving?: StringFieldUpdateOperationsInput | string
    core_combination?: StringFieldUpdateOperationsInput | string
    key_skills?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
  }

  export type ark_grid_combinationUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    engraving?: StringFieldUpdateOperationsInput | string
    core_combination?: StringFieldUpdateOperationsInput | string
    key_skills?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
  }

  export type tripodCreateManySkillInput = {
    id?: number
    tier: number
    sort: number
    name: string
    icon_url: string
    level_limit: number
    description: string
  }

  export type tripodUpdateWithoutSkillInput = {
    tier?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    level_limit?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type tripodUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    level_limit?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type tripodUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    tier?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: StringFieldUpdateOperationsInput | string
    level_limit?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type items_historyCreateManyItemInput = {
    id?: number
    yday_avg_price: number
    recent_price: number
    current_min_price: number
    reg_date?: Date | string
  }

  export type items_historyUpdateWithoutItemInput = {
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type items_historyUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type items_historyUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    yday_avg_price?: FloatFieldUpdateOperationsInput | number
    recent_price?: IntFieldUpdateOperationsInput | number
    current_min_price?: IntFieldUpdateOperationsInput | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Root_classCountOutputTypeDefaultArgs instead
     */
    export type Root_classCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Root_classCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobCountOutputTypeDefaultArgs instead
     */
    export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillCountOutputTypeDefaultArgs instead
     */
    export type SkillCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemsCountOutputTypeDefaultArgs instead
     */
    export type ItemsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use logDefaultArgs instead
     */
    export type logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = logDefaultArgs<ExtArgs>
    /**
     * @deprecated Use codeDefaultArgs instead
     */
    export type codeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = codeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use menu_infoDefaultArgs instead
     */
    export type menu_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = menu_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use root_classDefaultArgs instead
     */
    export type root_classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = root_classDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jobDefaultArgs instead
     */
    export type jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use skillDefaultArgs instead
     */
    export type skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = skillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tripodDefaultArgs instead
     */
    export type tripodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tripodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ark_grid_coreDefaultArgs instead
     */
    export type ark_grid_coreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ark_grid_coreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ark_grid_combinationDefaultArgs instead
     */
    export type ark_grid_combinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ark_grid_combinationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use itemsDefaultArgs instead
     */
    export type itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = itemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use items_historyDefaultArgs instead
     */
    export type items_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = items_historyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}