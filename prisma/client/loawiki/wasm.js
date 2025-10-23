
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  message: 'message',
  start_time: 'start_time',
  elapsed_time: 'elapsed_time',
  ip_address: 'ip_address',
  create_at: 'create_at'
};

exports.Prisma.CodeScalarFieldEnum = {
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

exports.Prisma.Menu_infoScalarFieldEnum = {
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

exports.Prisma.Root_classScalarFieldEnum = {
  id: 'id',
  root_class_code: 'root_class_code',
  name: 'name'
};

exports.Prisma.JobScalarFieldEnum = {
  id: 'id',
  job_code: 'job_code',
  name: 'name',
  req_job: 'req_job',
  root_class_code: 'root_class_code'
};

exports.Prisma.SkillScalarFieldEnum = {
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

exports.Prisma.TripodScalarFieldEnum = {
  id: 'id',
  tier: 'tier',
  sort: 'sort',
  name: 'name',
  icon_url: 'icon_url',
  level_limit: 'level_limit',
  description: 'description',
  skill_id: 'skill_id'
};

exports.Prisma.Ark_grid_coreScalarFieldEnum = {
  id: 'id',
  job_code: 'job_code',
  engraving: 'engraving',
  category: 'category',
  name: 'name',
  skill_effect: 'skill_effect',
  trigger_effect: 'trigger_effect',
  base_effect: 'base_effect'
};

exports.Prisma.Ark_grid_combinationScalarFieldEnum = {
  id: 'id',
  job_code: 'job_code',
  engraving: 'engraving',
  core_combination: 'core_combination',
  key_skills: 'key_skills',
  operation: 'operation'
};

exports.Prisma.ItemsScalarFieldEnum = {
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

exports.Prisma.Items_historyScalarFieldEnum = {
  id: 'id',
  item_id: 'item_id',
  yday_avg_price: 'yday_avg_price',
  recent_price: 'recent_price',
  current_min_price: 'current_min_price',
  reg_date: 'reg_date'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
