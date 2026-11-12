#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../shared/dist/esm/domain.js
var LANE_STATUSES = ["active", "parked", "closed"];
var CARD_STATES = ["running", "blocked_on_me", "review", "done"];
var PROCESS_KINDS = ["claude_session", "claude_subagent", "human"];
var DOC_KINDS = [
  "confluence",
  "jira",
  "azure_devops",
  "notion",
  "github",
  "gitlab",
  "repo_markdown",
  "url"
];
var CONTEXT_KINDS = [
  "jira_epic",
  "azure_devops_epic",
  "github_parent",
  "gitlab_epic"
];
var TRIGGER_KINDS = [
  "ticket",
  "pr",
  "error",
  "meeting",
  "file",
  "commit",
  "other"
];
var CLOSE_REASONS = ["pr_merged", "decision_made", "doc_approved", "manual"];

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status2, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status2.dirty();
      arrayValue.push(s.value);
    }
    return { status: status2.value, value: arrayValue };
  }
  static async mergeObjectAsync(status2, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status2, syncPairs);
  }
  static mergeObjectSync(status2, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status2.dirty();
      if (value.status === "dirty")
        status2.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status2.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status2 = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status2.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status2.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status2.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status2 = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status2.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status2.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status2 = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status2.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status2.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status2.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status2 = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status2.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status2.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status2.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status: status2 } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status2.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status2.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status2.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status2, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status2, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status: status2, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status2.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status2, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status2, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status: status2, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status2.dirty();
      }
      return { status: status2.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status: status2, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status2.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status2, results);
      });
    } else {
      return ParseStatus.mergeArray(status2, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status: status2, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status2, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status2, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status: status2, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status2.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status2.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status2.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status2.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status: status2, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status2.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status2.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status2.dirty();
        parsedSet.add(element.value);
      }
      return { status: status2.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status: status2, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status2.abort();
        } else {
          status2.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status2.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status2.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status2.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status2.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status2.dirty();
        executeRefinement(inner.value);
        return { status: status2.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status2.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status2.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status2.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status2.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status: status2, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status2.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status2.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// ../shared/dist/esm/card.js
var MemoryTriggerSchema = external_exports.object({
  kind: external_exports.enum(TRIGGER_KINDS),
  value: external_exports.string().min(1).max(500)
});
var HumanDecisionSchema = external_exports.object({
  text: external_exports.string().min(1),
  at: external_exports.string().datetime({ offset: true })
});
var DistilledCardSchema = external_exports.object({
  goal: external_exports.string().min(1).max(300),
  state: external_exports.enum(CARD_STATES),
  summary: external_exports.string().min(1).max(1200),
  needsFromMe: external_exports.string().min(1).max(500).nullable(),
  nextAction: external_exports.string().min(1).max(300),
  lastHumanDecision: HumanDecisionSchema.nullable(),
  triggers: external_exports.array(MemoryTriggerSchema).max(12),
  confidence: external_exports.number().min(0).max(1)
}).strict().refine((c) => c.state !== "blocked_on_me" || c.needsFromMe !== null, {
  message: "needsFromMe is required when state is blocked_on_me",
  path: ["needsFromMe"]
});

// ../shared/dist/esm/runtimes.js
var RUNTIMES = ["claude_code", "grok_build"];

// ../shared/dist/esm/redact.js
var redacted = (kind) => `[REDACTED:${kind}]`;
var RULES = [
  {
    kind: "private_key",
    re: /-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----/g
  },
  { kind: "anthropic_key", re: /\bsk-ant-[A-Za-z0-9_-]{10,}/g },
  { kind: "openai_key", re: /\bsk-[A-Za-z0-9_-]{20,}/g },
  { kind: "github_token", re: /\b(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})/g },
  { kind: "slack_token", re: /\bxox[abposr]-[A-Za-z0-9-]{10,}/g },
  // AWS access key IDs: long-term (AKIA…) and temporary (ASIA…).
  { kind: "aws_key", re: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g },
  // Amazon Bedrock API keys. Long-term: "ABSK" + base64 ("BedrockAPIKey-…"). Short-term:
  // "bedrock-api-key-" + base64 of a presigned URL (often more than 1000 characters).
  { kind: "bedrock_api_key", re: /\bABSK[A-Za-z0-9+/]{20,}={0,2}/g },
  { kind: "bedrock_api_key", re: /\bbedrock-api-key-[A-Za-z0-9+/_-]{40,}={0,2}/g },
  // AWS secret access keys (40 characters) have no prefix, so only match them next to their name:
  // AWS_SECRET_ACCESS_KEY=…, aws_secret_access_key = …, "secretAccessKey": "…".
  {
    kind: "aws_secret_key",
    re: /((?:aws[ _-]?)?secret[ _-]?access[ _-]?key["']?\s*[=:]\s*["']?)[A-Za-z0-9/+=]{40}(?![A-Za-z0-9/+=])/gi,
    with: "$1[REDACTED:aws_secret_key]"
  },
  // Atlassian API tokens: "ATATT" + ~180 base64url characters.
  { kind: "atlassian_token", re: /\bATATT[A-Za-z0-9_=-]{20,}/g },
  // Azure DevOps PATs have no prefix, so only match them in a context that names them.
  {
    kind: "azure_devops_pat",
    re: /\b([A-Z0-9_]*(?:AZURE_DEVOPS|AZDO|ADO|VSTS)[A-Z0-9_]*PAT[A-Z0-9_]*\s*[=:]\s*["']?)[A-Za-z0-9]{20,}/gi,
    with: "$1[REDACTED:azure_devops_pat]"
  },
  {
    kind: "azure_devops_pat",
    re: /(:)[A-Za-z0-9]{20,}(@(?:dev\.azure\.com|[A-Za-z0-9-]+\.visualstudio\.com)\b)/g,
    with: "$1[REDACTED:azure_devops_pat]$2"
  },
  { kind: "notion_token", re: /\b(?:secret_[A-Za-z0-9]{32,}|ntn_[A-Za-z0-9]{30,})/g },
  { kind: "google_api_key", re: /\bAIza[0-9A-Za-z_-]{35}(?![0-9A-Za-z_-])/g },
  { kind: "stripe_key", re: /\b(?:sk|rk)_(?:live|test)_[0-9A-Za-z]{10,}/g },
  { kind: "npm_token", re: /\bnpm_[A-Za-z0-9]{30,}/g },
  // Reconnect device tokens: "rcd_" + 43 base64url characters (SPEC F15).
  { kind: "reconnect_device_token", re: /\brcd_[A-Za-z0-9_-]{43}(?![A-Za-z0-9_-])/g },
  // Reconnect session and invite tokens: "rcs_" / "rci_" + 43 base64url characters (SPEC-v2).
  { kind: "reconnect_session_token", re: /\brcs_[A-Za-z0-9_-]{43}(?![A-Za-z0-9_-])/g },
  { kind: "reconnect_invite_token", re: /\brci_[A-Za-z0-9_-]{43}(?![A-Za-z0-9_-])/g },
  {
    kind: "azure_storage_key",
    re: /\b(AccountKey\s*=\s*)[^;\s"']+/gi,
    with: "$1[REDACTED:azure_storage_key]"
  },
  {
    kind: "azure_sas",
    re: /\b(SharedAccessSignature\s*=\s*)[^;\s"']+/gi,
    with: "$1[REDACTED:azure_sas]"
  },
  { kind: "jwt", re: /\beyJ[A-Za-z0-9_-]{5,}\.eyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}/g },
  { kind: "bearer", re: /\b(Bearer\s+)[A-Za-z0-9._~+/=-]{8,}/gi, with: "$1[REDACTED:bearer]" },
  {
    kind: "url_password",
    re: /\b([a-z][a-z0-9+.-]*:\/\/[^\s:/@]+:)(?!\[REDACTED)[^\s@/]+@/gi,
    with: "$1[REDACTED:url_password]@"
  },
  // ADO.NET-style connection strings: "...;Password=p@ss word;..." (value ends at ";" or a quote).
  {
    kind: "connection_string_password",
    re: /(^|[;"'\s])((?:Password|Pwd)\s*=\s*)(?!\[REDACTED)[^;"'\r\n]+(?=;|"|'|$)/gim,
    with: "$1$2[REDACTED:connection_string_password]"
  },
  {
    kind: "secret_assignment",
    re: /\b([A-Z0-9_]*(?:SECRET|TOKEN|PASSWORD|PASSWD|API_KEY|APIKEY|PRIVATE_KEY)[A-Z0-9_]*\s*[=:]\s*)(?!\[REDACTED)("[^"\n]*"|'[^'\n]*'|[^\s"']+)/gi,
    with: "$1[REDACTED:secret_assignment]"
  }
];
function redact(text) {
  let out = text;
  for (const r of RULES)
    out = out.replace(r.re, r.with ?? redacted(r.kind));
  return out;
}

// ../shared/dist/esm/transcript.js
var CHARS_PER_TOKEN = 4;
var TRANSCRIPT_TAIL_MAX_CHARS = 6e3 * CHARS_PER_TOKEN;
var TRANSCRIPT_READ_FACTOR = 4;
var MAX_TOOL_TEXT = 1e3;
var clip = (s, n) => s.length > n ? `${s.slice(0, n)} \u2026[${s.length - n} chars cut]` : s;
function toolResultText(content) {
  if (typeof content === "string")
    return content;
  if (Array.isArray(content)) {
    return content.map((c) => typeof c?.text === "string" ? c.text : "").filter(Boolean).join("\n");
  }
  return "";
}
function renderEntry(e) {
  const role = e.message?.role ?? e.type;
  if (role !== "user" && role !== "assistant")
    return [];
  const content = e.message?.content;
  if (typeof content === "string")
    return content.trim() ? [`${role}: ${content}`] : [];
  if (!Array.isArray(content))
    return [];
  const out = [];
  for (const b of content) {
    if (b?.type === "text" && typeof b.text === "string" && b.text.trim())
      out.push(`${role}: ${b.text}`);
    else if (b?.type === "tool_use")
      out.push(`[tool_use ${String(b.name ?? "tool")}]`);
    else if (b?.type === "tool_result") {
      const t = toolResultText(b.content).trim();
      out.push(`[tool_result] ${clip(t, MAX_TOOL_TEXT)}`);
    }
  }
  return out;
}
function renderTranscript(jsonl) {
  const lines = [];
  for (const raw of jsonl.split("\n")) {
    if (!raw.trim())
      continue;
    try {
      lines.push(...renderEntry(JSON.parse(raw)));
    } catch {
    }
  }
  return lines.join("\n");
}
var meta = (v) => v && typeof v === "object" ? v : {};
var textOf = (c) => {
  const b = meta(c);
  return b.type === "text" && typeof b.text === "string" ? b.text : "";
};
function grokToolText(content) {
  if (!Array.isArray(content))
    return "";
  return content.map((c) => textOf(c) || textOf(c?.content)).filter(Boolean).join("\n");
}
function grokBlocks(jsonl) {
  const out = [];
  let open2 = null;
  for (const raw of jsonl.split("\n")) {
    if (!raw.trim())
      continue;
    let line;
    try {
      line = JSON.parse(raw);
    } catch {
      continue;
    }
    if (line?.method !== "session/update")
      continue;
    const u = line.params?.update;
    const kind = u?.sessionUpdate;
    if (kind === "user_message_chunk" || kind === "agent_message_chunk") {
      const role = kind === "user_message_chunk" ? "user" : "assistant";
      if (role === "user" && (meta(u?._meta).hostTurn || meta(meta(u?.content)._meta).bashCommand))
        continue;
      const text = textOf(u?.content);
      if (!text)
        continue;
      if (open2 && open2.role === role)
        open2.text += text;
      else
        out.push(open2 = { role, text });
    } else if (kind === "tool_call") {
      const name = typeof u?.title === "string" && u.title ? u.title : String(u?.kind ?? "tool");
      out.push({ role: "tool", text: `[tool_use ${name}]` });
      open2 = null;
    } else if (kind === "tool_call_update") {
      const t = grokToolText(u?.content).trim();
      if (t && (u?.status === "completed" || u?.status === "failed"))
        out.push({ role: "tool", text: `[tool_result] ${clip(t, MAX_TOOL_TEXT)}` });
      open2 = null;
    } else if (kind !== "agent_thought_chunk") {
      open2 = null;
    }
  }
  return out;
}
var blockLine = (b) => b.role === "tool" ? b.text : `${b.role}: ${b.text}`;
function renderGrokTranscript(jsonl, lastAssistantMessage) {
  const blocks = grokBlocks(jsonl).filter((b) => b.text.trim());
  const last = lastAssistantMessage?.trim() ? lastAssistantMessage : null;
  if (last) {
    const tail = blocks[blocks.length - 1];
    if (tail?.role === "assistant" && last.startsWith(tail.text))
      tail.text = last;
    else
      blocks.push({ role: "assistant", text: last });
  }
  return blocks.map(blockLine).join("\n");
}
function capRedacted(text, maxChars) {
  const r = redact(text);
  return r.length > maxChars ? r.slice(r.length - maxChars) : r;
}
function renderTranscriptTail(jsonl, maxChars, partial, opts = {}) {
  const text = partial ? jsonl.slice(jsonl.indexOf("\n") + 1) : jsonl;
  const rendered = opts.runtime === "grok_build" ? renderGrokTranscript(text, opts.lastAssistantMessage) : renderTranscript(text);
  return capRedacted(rendered, maxChars);
}

// ../shared/dist/esm/events.js
var HOOK_EVENTS = [
  "SessionStart",
  "Stop",
  "SubagentStop",
  "Notification",
  "PreCompact",
  "SessionEnd",
  "UserPromptSubmit"
];
var PROMPT_MAX_CHARS = 2e4;
var LaneSourceSchema = external_exports.enum(["env", "branch_ticket", "branch", "cwd"]);
var EventEnvelopeSchema = external_exports.object({
  v: external_exports.literal(1),
  eventId: external_exports.string().uuid(),
  occurredAt: external_exports.string().datetime({ offset: true }),
  hookEvent: external_exports.enum(HOOK_EVENTS),
  /** Coding agent that sent the event. Missing = `claude_code` (hooks before 1.4.0). */
  runtime: external_exports.enum(RUNTIMES).optional(),
  sessionId: external_exports.string().min(1),
  agentId: external_exports.string().min(1).nullable(),
  transcriptPath: external_exports.string().min(1).nullable(),
  cwd: external_exports.string().min(1),
  lane: external_exports.object({
    key: external_exports.string().min(1).max(200),
    source: LaneSourceSchema,
    /**
     * true = the key of a plain-branch lane already has the repository in it (`app/main`, hooks
     * 1.5.0+). Missing on older hooks: the API adds the repository itself (SPEC-v2 V2-F10).
     */
    scoped: external_exports.boolean().optional()
  }),
  git: external_exports.object({
    branch: external_exports.string().nullable(),
    headSha: external_exports.string().nullable(),
    filesChanged: external_exports.number().int().nonnegative(),
    insertions: external_exports.number().int().nonnegative(),
    deletions: external_exports.number().int().nonnegative()
  }).nullable(),
  /**
   * `origin` remote as `host/path` (e.g. `github.com/acme/clinic-app`), from `normalizeRemote`.
   * Never holds a user, password or token. Older hooks do not send it.
   */
  repoRemote: external_exports.string().min(3).max(500).nullable().optional(),
  /**
   * Redacted, rendered end of the transcript (max TRANSCRIPT_TAIL_MAX_CHARS), so a remote API can
   * distill without the file (user decision 2026-11-10). Hooks send it only on Stop, SubagentStop
   * and PreCompact; `null` = the file could not be read. Older hooks do not send it.
   */
  transcriptTail: external_exports.string().max(TRANSCRIPT_TAIL_MAX_CHARS).nullable().optional(),
  /**
   * UserPromptSubmit only: the text the user typed, secrets replaced, every other character kept,
   * cut at PROMPT_MAX_CHARS (SPEC-v2 V2-F10). Missing when the user turned it off.
   */
  prompt: external_exports.string().max(PROMPT_MAX_CHARS).nullable().optional(),
  /** true = the prompt was longer than PROMPT_MAX_CHARS and only its start was sent. */
  promptTruncated: external_exports.boolean().optional(),
  /** Hook-specific fields, allowlisted per event. Never the transcript. */
  detail: external_exports.record(external_exports.string(), external_exports.union([external_exports.string(), external_exports.number(), external_exports.boolean(), external_exports.null()]))
});

// ../shared/dist/esm/lane.js
var TICKET_KEY_RE = /[A-Z][A-Z0-9]+-\d+/;
function extractTicketKey(text) {
  return text ? TICKET_KEY_RE.exec(text)?.[0] ?? null : null;
}
function resolveLane(h) {
  const env = h.envLane?.trim();
  if (env)
    return { key: env.slice(0, 200), source: "env" };
  const branch = h.branch?.trim();
  if (branch && branch !== "HEAD") {
    const ticket = extractTicketKey(branch);
    if (ticket)
      return { key: ticket, source: "branch_ticket" };
    return { key: branch.slice(0, 200), source: "branch" };
  }
  const base = h.cwd.replace(/[\\/]+$/, "").split(/[\\/]/).pop() || h.cwd || "unknown";
  return { key: base.slice(0, 200), source: "cwd" };
}
function repoNameOf(repoRemote, cwd) {
  const fromRemote = repoRemote?.replace(/\/+$/, "").split("/").pop();
  if (fromRemote)
    return fromRemote;
  return cwd.replace(/[\\/]+$/, "").split(/[\\/]/).pop() || "unknown";
}
function sessionKeyPart(sessionId) {
  const id = (sessionId ?? "").replace(/[^A-Za-z0-9]/g, "").slice(0, 8);
  return id ? `@${id}` : "";
}
function scopeLaneKey(lane, repo, sessionId) {
  if (lane.source !== "branch" && lane.source !== "cwd")
    return lane;
  const base = lane.source === "branch" ? `${repo}/${lane.key}` : lane.key;
  const part = sessionKeyPart(sessionId);
  return { key: base.slice(0, 200 - part.length) + part, source: lane.source, scoped: true };
}
var SEGMENT = /^[\w.~-]+$/;
function normalizeRemote(raw) {
  const s = raw?.trim();
  if (!s || /\s/.test(s))
    return null;
  let host;
  let path;
  const scp = /^(?:[^@/:]+@)?([^@/:]+):(?!\/\/)(.+)$/.exec(s);
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(s)) {
    let u;
    try {
      u = new URL(s);
    } catch {
      return null;
    }
    const proto = u.protocol.toLowerCase();
    if (proto === "https:" || proto === "http:")
      host = u.host;
    else if (proto === "ssh:" || proto === "git+ssh:" || proto === "git:")
      host = u.hostname;
    else
      return null;
    path = decodeURIComponent(u.pathname);
  } else if (scp) {
    host = scp[1];
    path = scp[2];
  } else {
    return null;
  }
  host = host.toLowerCase();
  if (!host || !/^[a-z0-9.-]+(:\d+)?$/.test(host))
    return null;
  const parts = path.replace(/^\/+|\/+$/g, "").replace(/\.git$/i, "").split("/");
  if (parts.length < 2 || parts.some((p) => !SEGMENT.test(p) || p === "." || p === ".."))
    return null;
  return { host, path: parts.join("/") };
}

// ../shared/dist/esm/api.js
var PARK_NOTE_MAX = 4e3;
var PARK_NOTE_SOURCES = ["text", "voice"];
var PatchLaneSchema = external_exports.object({
  title: external_exports.string().trim().min(1).max(200).optional(),
  /** The user's own words. Stored verbatim; null clears it. */
  why: external_exports.string().max(2e3).nullable().optional(),
  businessValue: external_exports.number().int().min(0).max(5).optional(),
  /** A context id, or null for "no context". Marks the context as set by the user. */
  contextId: external_exports.string().min(1).nullable().optional()
}).strict().refine((b) => Object.keys(b).length > 0, { message: "Send at least one field" });
var ParkLaneSchema = external_exports.object({
  /** Empty string = park without a note. */
  text: external_exports.string().max(PARK_NOTE_MAX).default(""),
  source: external_exports.enum(PARK_NOTE_SOURCES).default("text")
}).strict();
var CloseLaneSchema = external_exports.object({ reason: external_exports.enum(CLOSE_REASONS).default("manual") }).strict();
var iso = external_exports.string().datetime({ offset: true });
var SUMMARY_STATUSES = ["updating", "failed", "off"];
var SUMMARY_FAILURES = ["sign_in", "error"];
var SummaryStatusSchema = external_exports.object({
  status: external_exports.enum(SUMMARY_STATUSES),
  /** updating: wait or run start; failed/off: time of the run that set it. */
  since: iso,
  /** Only for status 'failed'. Never the error text. */
  reason: external_exports.enum(SUMMARY_FAILURES).optional()
});
var ContextRefSchema = external_exports.object({
  id: external_exports.string(),
  title: external_exports.string(),
  url: external_exports.string(),
  kind: external_exports.enum(CONTEXT_KINDS),
  /** Jira epic key, Azure DevOps work item id, GitHub `owner/repo#n` or GitLab `group&iid`. */
  externalKey: external_exports.string()
});
var QueueItemSchema = external_exports.object({
  id: external_exports.string(),
  key: external_exports.string(),
  title: external_exports.string(),
  area: external_exports.string().nullable(),
  ticketKey: external_exports.string().nullable(),
  status: external_exports.enum(LANE_STATUSES),
  /** null until the distiller made a card. */
  state: external_exports.enum(CARD_STATES).nullable(),
  /** One line for the queue row: needsFromMe, else nextAction. */
  line: external_exports.string().nullable(),
  lastUserTouchAt: iso,
  businessValue: external_exports.number().int(),
  score: external_exports.number(),
  hasParkNote: external_exports.boolean(),
  processesRunning: external_exports.number().int(),
  /** The lane has Claude Code sessions and all of them are closed (SessionEnd). */
  sessionClosed: external_exports.boolean(),
  /** Newest session close time when sessionClosed, else null. */
  sessionClosedAt: iso.nullable(),
  /** Coding agent of the lane's newest session. Missing = Claude Code (older API). */
  runtime: external_exports.enum(RUNTIMES).optional(),
  /** Summary being written, or the last run failed or found no AI model. null = nothing to show; missing = older API. */
  summaryStatus: SummaryStatusSchema.nullable().optional()
});
var QueueResponseSchema = external_exports.object({
  groups: external_exports.array(external_exports.object({
    /** null = "No context yet". */
    context: ContextRefSchema.nullable(),
    lanes: external_exports.array(QueueItemSchema)
  })),
  parked: external_exports.array(QueueItemSchema),
  counts: external_exports.object({
    active: external_exports.number().int(),
    needMe: external_exports.number().int(),
    parked: external_exports.number().int(),
    processesRunning: external_exports.number().int(),
    maxActive: external_exports.number().int()
  })
});
var LaneCardSchema = external_exports.object({
  goal: external_exports.string(),
  state: external_exports.enum(CARD_STATES),
  summary: external_exports.string(),
  needsFromMe: external_exports.string().nullable(),
  nextAction: external_exports.string(),
  lastHumanDecision: external_exports.object({ text: external_exports.string(), at: iso.nullable() }).nullable(),
  triggers: external_exports.array(external_exports.object({ kind: external_exports.enum(TRIGGER_KINDS), value: external_exports.string() })),
  confidence: external_exports.number(),
  createdAt: iso
});
var TIMELINE_KINDS = ["event", "card", "park"];
var TimelineItemSchema = external_exports.object({
  at: iso,
  kind: external_exports.enum(TIMELINE_KINDS),
  /** Who did it: you, agent, or system. */
  who: external_exports.enum(["you", "agent", "system"]),
  text: external_exports.string()
});
var LaneProcessSchema = external_exports.object({
  id: external_exports.string(),
  kind: external_exports.enum(PROCESS_KINDS),
  externalId: external_exports.string(),
  cwd: external_exports.string().nullable(),
  startedAt: iso,
  lastEventAt: iso,
  endedAt: iso.nullable(),
  running: external_exports.boolean(),
  /** Shell command that resumes the session. null for subagents and humans. */
  resumeCommand: external_exports.string().nullable(),
  /** Coding agent of this process. Missing = Claude Code (older API). */
  runtime: external_exports.enum(RUNTIMES).optional()
});
var LaneDocSchema = external_exports.object({
  id: external_exports.string(),
  kind: external_exports.enum(DOC_KINDS),
  url: external_exports.string(),
  title: external_exports.string().nullable(),
  isPrimary: external_exports.boolean(),
  /** Redacted, max ~500 characters. */
  preview: external_exports.string().nullable(),
  sourceUpdatedAt: iso.nullable(),
  sourceUpdatedBy: external_exports.string().nullable(),
  fetchedAt: iso.nullable(),
  /** Plain words for the user when the last fetch failed. */
  fetchError: external_exports.string().nullable(),
  /** Added by Reconnect (the lane ticket), not by the user. */
  auto: external_exports.boolean()
});
var LaneDetailSchema = external_exports.object({
  id: external_exports.string(),
  key: external_exports.string(),
  title: external_exports.string(),
  area: external_exports.string().nullable(),
  ticketKey: external_exports.string().nullable(),
  branch: external_exports.string().nullable(),
  repoPath: external_exports.string().nullable(),
  why: external_exports.string().nullable(),
  status: external_exports.enum(LANE_STATUSES),
  businessValue: external_exports.number().int(),
  closeReason: external_exports.enum(CLOSE_REASONS).nullable(),
  lastUserTouchAt: iso,
  lastEventAt: iso.nullable(),
  context: ContextRefSchema.nullable(),
  card: LaneCardSchema.nullable(),
  parkNote: external_exports.object({ text: external_exports.string(), source: external_exports.enum(PARK_NOTE_SOURCES), createdAt: iso }).nullable(),
  docs: external_exports.array(LaneDocSchema),
  /** Set when the newest commit on the lane branch is newer than the primary doc's last edit. */
  drift: external_exports.object({ codeAt: iso, docAt: iso }).nullable(),
  /** The user set or cleared the context; Reconnect no longer changes it. */
  contextManual: external_exports.boolean(),
  timeline: external_exports.array(TimelineItemSchema),
  processes: external_exports.array(LaneProcessSchema),
  /** Resume command of the newest session, for the "Copy resume command" action. */
  resumeCommand: external_exports.string().nullable(),
  /** The lane has Claude Code sessions and all of them are closed (SessionEnd). */
  sessionClosed: external_exports.boolean(),
  /** Newest session close time when sessionClosed, else null. */
  sessionClosedAt: iso.nullable(),
  /** Coding agent of the lane's newest session. Missing = Claude Code (older API). */
  runtime: external_exports.enum(RUNTIMES).optional(),
  /** Summary being written, or the last run failed or found no AI model. null = nothing to show; missing = older API. */
  summaryStatus: SummaryStatusSchema.nullable().optional(),
  /**
   * The newest text the user typed in the lane's sessions, verbatim (secrets replaced; SPEC-v2
   * V2-F10). truncated = the user typed more than 20 000 chars. null = none; missing = older API.
   */
  lastPrompt: external_exports.object({ text: external_exports.string(), truncated: external_exports.boolean(), occurredAt: iso }).nullable().optional()
});

// ../shared/dist/esm/sources.js
var SOURCE_KINDS = [
  "jira",
  "confluence",
  "azure_devops",
  "notion",
  "github",
  "gitlab"
];
var SOURCE_AUTHS = ["basic", "bearer", "pat"];
var httpUrl = external_exports.string().trim().url().refine((u) => /^https?:\/\//i.test(u), "Use an http(s) address").transform((u) => u.replace(/\/+$/, ""));
var ConnectSourceSchema = external_exports.object({
  baseUrl: httpUrl.optional(),
  auth: external_exports.enum(SOURCE_AUTHS).optional(),
  accountEmail: external_exports.string().trim().email().optional(),
  token: external_exports.string().trim().min(8).max(4e3)
}).strict();
var PatchSourceSchema = external_exports.object({ enabled: external_exports.boolean() }).strict();
var iso2 = external_exports.string().datetime({ offset: true });
var SourceViewSchema = external_exports.object({
  kind: external_exports.enum(SOURCE_KINDS),
  label: external_exports.string(),
  connected: external_exports.boolean(),
  baseUrl: external_exports.string().nullable(),
  auth: external_exports.enum(SOURCE_AUTHS).nullable(),
  accountEmail: external_exports.string().nullable(),
  /** Last 4 characters of the token. The token itself is never returned. */
  tokenHint: external_exports.string().nullable(),
  enabled: external_exports.boolean(),
  status: external_exports.enum(["untested", "ok", "error"]).nullable(),
  statusMessage: external_exports.string().nullable(),
  lastCheckedAt: iso2.nullable()
});
var SourcesResponseSchema = external_exports.object({
  /** The caller's workspace. The connections listed are the caller's own. */
  org: external_exports.object({ id: external_exports.string(), name: external_exports.string() }),
  sources: external_exports.array(SourceViewSchema)
});
var AddDocSchema = external_exports.object({
  /** A link, or a repo file as `repo:docs/file.md`. */
  url: external_exports.string().trim().min(1).max(2e3),
  title: external_exports.string().trim().max(300).optional(),
  isPrimary: external_exports.boolean().optional()
}).strict();
var PatchDocSchema = external_exports.object({ isPrimary: external_exports.literal(true).optional(), title: external_exports.string().trim().max(300).optional() }).strict().refine((b) => Object.keys(b).length > 0, { message: "Send at least one field" });
var ContextListSchema = external_exports.array(external_exports.object({
  id: external_exports.string(),
  kind: external_exports.enum(CONTEXT_KINDS),
  externalKey: external_exports.string(),
  title: external_exports.string(),
  url: external_exports.string(),
  lanes: external_exports.number().int()
}));

// ../shared/dist/esm/model-settings.js
var MODEL_PROVIDERS = ["anthropic", "bedrock", "xai"];
var MODEL_PROVIDER_LABEL = {
  anthropic: "Claude API",
  bedrock: "AWS Bedrock",
  xai: "xAI Grok"
};
var MODEL_PROVIDER_INFO = {
  anthropic: {
    label: MODEL_PROVIDER_LABEL.anthropic,
    keyLabel: "API key",
    keyHelpUrl: "https://console.anthropic.com/settings/keys",
    keyPlaceholder: "",
    recommended: true
  },
  bedrock: {
    label: MODEL_PROVIDER_LABEL.bedrock,
    keyLabel: "Bedrock API key",
    keyHelpUrl: "https://docs.aws.amazon.com/bedrock/latest/userguide/api-keys.html",
    keyPlaceholder: ""
  },
  xai: {
    label: MODEL_PROVIDER_LABEL.xai,
    keyLabel: "xAI API key",
    keyHelpUrl: "https://console.x.ai",
    keyPlaceholder: "xai-\u2026",
    note: "Use your own xAI API key. Cards can take longer."
  }
};
var AWS_REGION_PATTERN = /^[a-z]{2}(-gov|-iso[a-z]?)?-[a-z]+-\d{1,2}$/;
var AWS_PROFILE_PATTERN = /^[A-Za-z0-9_.@+-]{1,64}$/;
var emptyToUndefined = (v) => typeof v === "string" && !v.trim() ? void 0 : v;
var BEDROCK_AUTH = ["api_key", "access_key", "server"];
var AWS_ACCESS_KEY_ID_PATTERN = /^(AKIA|ASIA)[A-Z0-9]{16}$/;
var awsRegion = external_exports.string().trim().toLowerCase().regex(AWS_REGION_PATTERN, "Enter an AWS region, e.g. us-east-1");
var AnthropicSettings = external_exports.object({
  provider: external_exports.literal("anthropic"),
  apiKey: external_exports.string().trim().min(8, "Paste the whole API key").max(500)
}).strict();
var XaiSettings = external_exports.object({
  provider: external_exports.literal("xai"),
  apiKey: external_exports.string().trim().min(20, "Paste the whole xAI API key").max(500, "Paste the whole xAI API key")
}).strict();
var BedrockSettings = external_exports.discriminatedUnion("awsAuth", [
  external_exports.object({
    provider: external_exports.literal("bedrock"),
    awsAuth: external_exports.literal("api_key"),
    awsRegion,
    apiKey: external_exports.string().trim().min(20, "Paste the whole Bedrock API key").max(4e3, "Paste the whole Bedrock API key")
  }).strict(),
  external_exports.object({
    provider: external_exports.literal("bedrock"),
    awsAuth: external_exports.literal("access_key"),
    awsRegion,
    awsAccessKeyId: external_exports.string().trim().regex(AWS_ACCESS_KEY_ID_PATTERN, "Enter an access key ID, e.g. AKIA\u2026"),
    awsSecretAccessKey: external_exports.string().trim().length(40, "Paste the whole secret access key"),
    awsSessionToken: external_exports.preprocess(emptyToUndefined, external_exports.string().trim().max(4e3, "The session token is too long").optional())
  }).strict(),
  external_exports.object({
    provider: external_exports.literal("bedrock"),
    awsAuth: external_exports.literal("server"),
    awsRegion,
    awsProfile: external_exports.preprocess(emptyToUndefined, external_exports.string().trim().regex(AWS_PROFILE_PATTERN, "Use letters, digits and - _ . @ + only").optional())
  }).strict()
]);
var SaveModelSettingsBody = external_exports.union([AnthropicSettings, BedrockSettings, XaiSettings]);
function defaultBedrockAuth(v) {
  if (v && typeof v === "object" && !Array.isArray(v)) {
    const o = v;
    if (o.provider === "bedrock" && o.awsAuth === void 0)
      return { ...o, awsAuth: "server" };
  }
  return v;
}
var SaveModelSettingsSchema = external_exports.preprocess(defaultBedrockAuth, SaveModelSettingsBody);
var iso3 = external_exports.string().datetime({ offset: true });
var ModelSettingsViewSchema = external_exports.object({
  /** settings = saved in Settings; env = the server .env file (backup); none = no AI model. */
  source: external_exports.enum(["settings", "env", "none"]),
  provider: external_exports.enum(MODEL_PROVIDERS).nullable(),
  /**
   * Last 4 characters of the Claude API key, of the xAI API key, of the Bedrock API key or of the
   * AWS access key ID.
   * The key itself is never returned.
   */
  keyHint: external_exports.string().nullable(),
  awsRegion: external_exports.string().nullable(),
  /** How Bedrock connects to AWS (bedrock only). */
  awsAuth: external_exports.enum(BEDROCK_AUTH).nullable(),
  awsProfile: external_exports.string().nullable(),
  status: external_exports.enum(["untested", "ok", "error"]).nullable(),
  statusMessage: external_exports.string().nullable(),
  lastCheckedAt: iso3.nullable(),
  /** True only when the API lets this user choose `awsAuth: server` (local install, usr_owner). */
  serverSignInAllowed: external_exports.boolean()
});

// ../shared/dist/esm/devices.js
var DEVICE_NAME_MAX = 80;
var DEFAULT_DEVICE_NAME = "Computer";
var PKCE_PATTERN = /^[A-Za-z0-9\-._~]{43,128}$/;
var LOOPBACK = /^http:\/\/(?:127\.0\.0\.1|\[::1\]|localhost):([1-9][0-9]{3,4})\/callback$/;
function isLoopbackRedirect(uri) {
  if (typeof uri !== "string")
    return false;
  const m = LOOPBACK.exec(uri);
  if (!m)
    return false;
  const port = Number(m[1]);
  return port >= 1024 && port <= 65535;
}
function cleanDeviceName(name) {
  const oneLine = redact(name.replace(/[\u0000-\u001f\u007f]+/g, " ").trim());
  return (oneLine || DEFAULT_DEVICE_NAME).slice(0, DEVICE_NAME_MAX).trim() || DEFAULT_DEVICE_NAME;
}
var DeviceDtoSchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string(),
  createdAt: external_exports.string(),
  lastUsedAt: external_exports.string().nullable()
});
var DeviceListSchema = external_exports.array(DeviceDtoSchema);
var DeviceApproveRequestSchema = external_exports.object({
  redirectUri: external_exports.string().max(300).refine(isLoopbackRedirect, "Not a loopback redirect address"),
  codeChallenge: external_exports.string().regex(PKCE_PATTERN, "Invalid code challenge"),
  codeChallengeMethod: external_exports.literal("S256"),
  state: external_exports.string().min(8).max(200),
  deviceName: external_exports.string().max(500).transform(cleanDeviceName)
}).strict();
var DeviceApproveResponseSchema = external_exports.object({ redirect: external_exports.string() });
var DeviceTokenRequestSchema = external_exports.object({
  code: external_exports.string().min(1).max(200),
  codeVerifier: external_exports.string().regex(PKCE_PATTERN),
  redirectUri: external_exports.string().max(300)
}).strict();
var DeviceTokenResponseSchema = external_exports.object({
  token: external_exports.string(),
  device: DeviceDtoSchema
});

// ../shared/dist/esm/auth.js
var ORG_ROLES = ["owner", "member"];
var OrgRoleSchema = external_exports.enum(ORG_ROLES);
var UserDtoSchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string(),
  avatarUrl: external_exports.string().nullable(),
  email: external_exports.string().nullable(),
  /** GitHub login of the linked identity; null for the bootstrap owner before the first sign-in. */
  githubLogin: external_exports.string().nullable(),
  createdAt: external_exports.string()
});
var OrgRefSchema = external_exports.object({ id: external_exports.string(), name: external_exports.string() });
var MeResponseSchema = external_exports.object({
  user: UserDtoSchema,
  org: OrgRefSchema,
  role: OrgRoleSchema,
  /** The platform admin (the bootstrap owner usr_owner) sees the waitlist (SPEC-v2 V2-F6). */
  isPlatformAdmin: external_exports.boolean().default(false)
});
var INVITE_KINDS = ["own_workspace", "join"];
var InviteKindSchema = external_exports.enum(INVITE_KINDS);
var InviteCreateRequestSchema = external_exports.object({
  kind: InviteKindSchema,
  /** Only for `join`. Default `member`. */
  role: OrgRoleSchema.optional()
}).strict();
var InviteCreateResponseSchema = external_exports.object({
  id: external_exports.string(),
  url: external_exports.string(),
  expiresAt: external_exports.string()
});
var InviteDtoSchema = external_exports.object({
  id: external_exports.string(),
  kind: InviteKindSchema,
  role: OrgRoleSchema,
  createdAt: external_exports.string(),
  expiresAt: external_exports.string(),
  createdByName: external_exports.string()
});
var InviteListSchema = external_exports.array(InviteDtoSchema);
var InvitePreviewSchema = external_exports.object({
  inviterName: external_exports.string().nullable(),
  kind: InviteKindSchema.nullable(),
  valid: external_exports.boolean()
});
var PersonDtoSchema = UserDtoSchema.extend({
  role: OrgRoleSchema,
  joinedAt: external_exports.string()
});
var PeopleListSchema = external_exports.array(PersonDtoSchema);
var DeleteMeRequestSchema = external_exports.object({ confirm: external_exports.literal("DELETE") }).strict();

// ../shared/dist/esm/waitlist.js
var WAITLIST_STATUSES = ["waiting", "invited", "declined"];
var WaitlistStatusSchema = external_exports.enum(WAITLIST_STATUSES);
var WAITLIST_EMAIL_MAX = 254;
var WAITLIST_NOTE_MAX = 500;
var GITHUB_LOGIN_MAX = 39;
var GITHUB_LOGIN_PATTERN = /^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;
var blankToUndefined = (v) => typeof v === "string" && v.trim() === "" ? void 0 : v;
var WaitlistJoinRequestSchema = external_exports.object({
  email: external_exports.string().trim().toLowerCase().min(1, "Enter your email address.").max(WAITLIST_EMAIL_MAX, "The email address is too long.").email("Enter a valid email address."),
  /** GitHub user name. A leading "@" is removed. */
  githubLogin: external_exports.preprocess((v) => typeof v === "string" ? blankToUndefined(v.trim().replace(/^@/, "")) : v, external_exports.string().max(GITHUB_LOGIN_MAX, "A GitHub user name has at most 39 characters.").regex(GITHUB_LOGIN_PATTERN, "Enter a valid GitHub user name.").optional()),
  /** The person's own words. Kept verbatim; the API replaces only secrets before it stores it. */
  note: external_exports.preprocess(blankToUndefined, external_exports.string().max(WAITLIST_NOTE_MAX, "Use at most 500 characters.").optional()),
  /** Honeypot: people never see this field. When it is not empty, the API stores nothing. */
  website: external_exports.string().max(2e3).optional()
});
var WaitlistJoinResponseSchema = external_exports.object({ ok: external_exports.literal(true) });
var WAITLIST_INVITE_STATES = ["open", "used", "expired", "canceled"];
var WaitlistInviteStateSchema = external_exports.enum(WAITLIST_INVITE_STATES);
var WaitlistEntryDtoSchema = external_exports.object({
  id: external_exports.string(),
  email: external_exports.string(),
  githubLogin: external_exports.string().nullable(),
  /** Verbatim (secrets replaced). Show it as it is: never trim inside or reformat. */
  note: external_exports.string().nullable(),
  status: WaitlistStatusSchema,
  createdAt: external_exports.string(),
  decidedAt: external_exports.string().nullable(),
  /** Null when no invite was made (or it was deleted). */
  inviteState: WaitlistInviteStateSchema.nullable(),
  inviteExpiresAt: external_exports.string().nullable()
});
var WaitlistPageSchema = external_exports.object({
  entries: external_exports.array(WaitlistEntryDtoSchema),
  /** Pass as `cursor` to get the next page. Null on the last page. */
  nextCursor: external_exports.string().nullable()
});
var WaitlistInviteResponseSchema = external_exports.object({
  url: external_exports.string(),
  expiresAt: external_exports.string()
});

// ../shared/dist/esm/refs.js
var JIRA_RE = new RegExp(`(?<![A-Za-z0-9-])${TICKET_KEY_RE.source}(?![\\w-])`, "g");

// src/config.ts
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
var DEFAULT_URL = "http://localhost:4317";
var str = (v) => typeof v === "string" && v.trim() ? v.trim() : null;
var noSlash = (u) => u.replace(/\/+$/, "");
var configFile = (home) => join(home, "config.json");
var stateHome = (env = process.env) => env.RECONNECT_HOME || join(homedir(), ".reconnect");
function readConfigFile(home) {
  try {
    const v = JSON.parse(readFileSync(configFile(home), "utf8"));
    return v && typeof v === "object" && !Array.isArray(v) ? v : {};
  } catch {
    return {};
  }
}
function loadConfig(env = process.env) {
  const home = stateHome(env);
  const file = readConfigFile(home);
  const pluginUrl = str(env.CLAUDE_PLUGIN_OPTION_URL);
  const url = noSlash(
    str(env.RECONNECT_URL) ?? (pluginUrl && noSlash(pluginUrl) !== DEFAULT_URL ? pluginUrl : null) ?? str(file.url) ?? pluginUrl ?? DEFAULT_URL
  );
  const tokens = [
    ["env", str(env.RECONNECT_TOKEN)],
    ["plugin", str(env.CLAUDE_PLUGIN_OPTION_TOKEN)],
    ["file", str(file.token)]
  ];
  const [tokenSource, token] = tokens.find(([, t]) => t) ?? [null, null];
  return {
    url,
    token,
    tokenSource,
    webUrl: noSlash(str(env.RECONNECT_WEB_URL) ?? str(file.webUrl) ?? url),
    deviceId: str(file.deviceId),
    home,
    sendTranscriptTail: (str(env.RECONNECT_SEND_TRANSCRIPT_TAIL) ?? str(file.sendTranscriptTail) ?? "on").toLowerCase() !== "off",
    sendPrompt: (str(env.RECONNECT_SEND_PROMPT) ?? str(file.sendPrompt) ?? "on").toLowerCase() !== "off"
  };
}

// src/deadline.ts
var Deadline = class {
  end;
  constructor(totalMs) {
    this.end = Date.now() + totalMs;
  }
  remaining() {
    return Math.max(0, this.end - Date.now());
  }
  /** min(capMs, remaining), at least 1 ms. */
  cap(capMs) {
    return Math.max(1, Math.min(capMs, this.remaining()));
  }
};

// src/stdin.ts
var MAX_BYTES = 1024 * 1024;
function readStdin(timeoutMs, stream = process.stdin) {
  return new Promise((resolve) => {
    if (stream.isTTY) return resolve("");
    const chunks = [];
    let size = 0;
    const done = () => {
      clearTimeout(timer);
      stream.removeAllListeners("data");
      stream.removeAllListeners("end");
      stream.removeAllListeners("error");
      stream.pause();
      resolve(Buffer.concat(chunks).toString("utf8"));
    };
    const timer = setTimeout(done, timeoutMs);
    stream.on("data", (c) => {
      size += c.length;
      if (size > MAX_BYTES) return done();
      chunks.push(c);
    });
    stream.on("end", done);
    stream.on("error", done);
  });
}

// src/commands/connect.ts
import { spawn } from "node:child_process";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { chmodSync, mkdirSync, renameSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { hostname } from "node:os";
var CONNECT_TIMEOUT_MS = 5 * 6e4;
var HTTP_TIMEOUT_MS = 1e4;
var MSG = {
  timedOut: "Timed out. Run /reconnect:connect again.",
  cancelled: "Not connected. You clicked Cancel.",
  failed: "Could not connect this computer. Run /reconnect:connect again.",
  pageOk: "Connected. You can close this tab and go back to Claude Code.",
  otherToken: "Note: a token set by your organization or in the plugin settings is used before this one.",
  badUrl: "Not connected. The address must start with http:// or https://, for example https://api.reconnect-ai.me or http://localhost:4317."
};
function parseServerUrl(raw) {
  const text = raw.trim();
  if (!text || /\s/.test(text) || text.length > 2e3) return null;
  let u;
  try {
    u = new URL(text);
  } catch {
    return null;
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") return null;
  if (!u.hostname || u.username || u.password || u.search || u.hash) return null;
  return text.replace(/\/+$/, "");
}
var b64url = (b) => b.toString("base64url");
var sha = (s) => createHash("sha256").update(s).digest();
var defaultDeviceName = (host = hostname()) => host.replace(/\.local$/i, "");
function openBrowser(url, platform = process.platform) {
  try {
    const child = platform === "darwin" ? spawn("open", [url], { detached: true, stdio: "ignore" }) : platform === "win32" ? spawn("cmd", ["/c", "start", '""', `"${url}"`], {
      detached: true,
      stdio: "ignore",
      windowsVerbatimArguments: true
    }) : spawn("xdg-open", [url], { detached: true, stdio: "ignore" });
    child.on("error", () => void 0);
    child.unref();
  } catch {
  }
}
function page(title, ok) {
  const esc = title.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Reconnect</title>
<style>
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F4F5F7;color:#111827;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{background:#fff;border-radius:12px;padding:32px;max-width:440px;margin:16px;border-top:4px solid ${ok ? "#1D4ED8" : "#9A3412"}}
h1{font-size:1.25rem;line-height:1.4;margin:0}
p{margin:12px 0 0;color:#374151}
</style></head>
<body><main><h1>${esc}</h1><p>Reconnect</p></main></body></html>
`;
}
function saveDevice(home, url, token, deviceId) {
  mkdirSync(home, { recursive: true, mode: 448 });
  chmodSync(home, 448);
  const next = { ...readConfigFile(home), url, token, deviceId };
  const file = configFile(home);
  const tmp = `${file}.${process.pid}.tmp`;
  writeFileSync(tmp, JSON.stringify(next, null, 2) + "\n", { mode: 384 });
  chmodSync(tmp, 384);
  renameSync(tmp, file);
}
async function healthy(apiUrl) {
  try {
    const res = await fetch(`${apiUrl}/health`, { signal: AbortSignal.timeout(HTTP_TIMEOUT_MS) });
    await res.body?.cancel().catch(() => void 0);
    return res.ok;
  } catch {
    return false;
  }
}
async function connect(opts, deps) {
  const { cfg, out } = deps;
  const given = opts.url?.trim() ? parseServerUrl(opts.url) : void 0;
  if (given === null) {
    out(MSG.badUrl + "\n");
    return 1;
  }
  const apiUrl = (given ?? cfg.url).replace(/\/+$/, "");
  const webUrl = given && cfg.webUrl === cfg.url ? apiUrl : cfg.webUrl;
  const deviceName = opts.name?.trim() || defaultDeviceName();
  if (!await healthy(apiUrl)) {
    out(
      `Cannot reach Reconnect at ${apiUrl}. Check that the server runs and the address is right, or run: reconnect connect --url <address>
`
    );
    return 1;
  }
  const verifier = b64url(randomBytes(32));
  const challenge = b64url(createHash("sha256").update(verifier).digest());
  const state = b64url(randomBytes(16));
  const server = createServer();
  server.listen(0, "127.0.0.1");
  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });
  const port = server.address().port;
  const redirectUri = `http://127.0.0.1:${port}/callback`;
  let timer;
  const outcome = await new Promise((resolve) => {
    let done = false;
    const finish = (res, o, html, status2 = 200) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      if (!res) return resolve(o);
      res.writeHead(status2, {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store"
      });
      res.end(html, () => resolve(o));
    };
    timer = setTimeout(
      () => finish(null, { code: 1, message: MSG.timedOut }, ""),
      deps.timeoutMs ?? CONNECT_TIMEOUT_MS
    );
    server.on("request", (req, res) => {
      const u = new URL(req.url ?? "/", "http://127.0.0.1");
      if (req.method !== "GET" || u.pathname !== "/callback" || done) {
        res.writeHead(404, { "content-type": "text/plain; charset=utf-8" }).end("Not found");
        return;
      }
      const fail = (message) => finish(res, { code: 1, message }, page(MSG.failed, false), 400);
      if (!timingSafeEqual(sha(u.searchParams.get("state") ?? ""), sha(state))) {
        return fail(MSG.failed);
      }
      if (u.searchParams.get("error") === "access_denied") {
        return finish(res, { code: 1, message: MSG.cancelled }, page(MSG.cancelled, false));
      }
      const code = u.searchParams.get("code");
      if (!code) return fail(MSG.failed);
      void (async () => {
        try {
          const r = await fetch(`${apiUrl}/devices/token`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ code, codeVerifier: verifier, redirectUri }),
            signal: AbortSignal.timeout(HTTP_TIMEOUT_MS)
          });
          if (!r.ok) {
            await r.body?.cancel().catch(() => void 0);
            return fail(MSG.failed);
          }
          const body = DeviceTokenResponseSchema.parse(await r.json());
          saveDevice(cfg.home, apiUrl, body.token, body.device.id);
          finish(res, { code: 0, name: body.device.name }, page(MSG.pageOk, true));
        } catch {
          fail(MSG.failed);
        }
      })();
    });
    const q = new URLSearchParams({
      redirect_uri: redirectUri,
      code_challenge: challenge,
      code_challenge_method: "S256",
      state,
      device_name: deviceName
    });
    const link = `${webUrl}/connect?${q.toString()}`;
    if (opts.open) {
      out(`Opening your browser to connect this computer. If it does not open, go to: ${link}
`);
      (deps.openUrl ?? openBrowser)(link);
    } else {
      out(`To connect this computer, go to: ${link}
`);
    }
  });
  server.closeAllConnections();
  await new Promise((resolve) => server.close(() => resolve()));
  if (outcome.code === 1) {
    out(outcome.message + "\n");
    return 1;
  }
  const note = cfg.tokenSource === "env" || cfg.tokenSource === "plugin" ? ` ${MSG.otherToken}` : "";
  out(`Connected as ${outcome.name}.${note}
`);
  return 0;
}

// src/commands/emit.ts
import { spawn as spawn2 } from "node:child_process";
import { existsSync, unlinkSync as unlinkSync2, writeFileSync as writeFileSync3 } from "node:fs";
import { join as join4 } from "node:path";

// src/envelope.ts
import { randomUUID } from "node:crypto";
var DETAIL_ALLOWLIST = {
  SessionStart: ["source"],
  Stop: ["stop_hook_active"],
  SubagentStop: ["stop_hook_active", "agent_id", "agent_type", "agent_transcript_path"],
  Notification: ["message", "notification_type"],
  PreCompact: ["trigger"],
  SessionEnd: ["reason"],
  // The prompt goes in its own envelope field (`prompt`), never in `detail`.
  UserPromptSubmit: []
};
var MAX_DETAIL_STRING = 300;
var str2 = (v) => typeof v === "string" && v.length > 0 ? v : null;
function pickDetail(event, input) {
  const out = {};
  for (const key of DETAIL_ALLOWLIST[event]) {
    const v = input[key];
    if (typeof v === "string") out[key] = redact(v).slice(0, MAX_DETAIL_STRING);
    else if (typeof v === "number" || typeof v === "boolean" || v === null) out[key] = v;
  }
  return out;
}
function buildEnvelope(a) {
  const sessionId = str2(a.input.session_id);
  if (!sessionId) return null;
  const cwd = str2(a.input.cwd) ?? a.fallbackCwd;
  const detail = pickDetail(a.event, a.input);
  const agentId = a.event === "SubagentStop" ? str2(a.input.agent_id) : null;
  const { repoRemote = null, ...git2 } = a.git ?? {};
  return {
    v: 1,
    eventId: (a.uuid ?? randomUUID)(),
    occurredAt: (a.now ?? /* @__PURE__ */ new Date()).toISOString(),
    hookEvent: a.event,
    runtime: a.runtime ?? "claude_code",
    sessionId,
    agentId,
    transcriptPath: str2(a.input.transcript_path),
    cwd,
    lane: scopeLaneKey(
      resolveLane({ envLane: a.envLane, branch: a.git?.branch, cwd }),
      repoNameOf(repoRemote, cwd),
      sessionId
    ),
    git: a.git ? git2 : null,
    ...repoRemote ? { repoRemote } : {},
    detail
  };
}

// src/git.ts
import { execFile } from "node:child_process";
function remoteOf(raw) {
  const r = normalizeRemote(raw);
  return r ? `${r.host}/${r.path}` : null;
}
function git(cwd, args, timeoutMs) {
  return new Promise((resolve) => {
    try {
      execFile(
        "git",
        args,
        { cwd, timeout: timeoutMs, windowsHide: true, maxBuffer: 64 * 1024 },
        (err, stdout) => resolve(err ? null : stdout.trim())
      );
    } catch {
      resolve(null);
    }
  });
}
function parseShortstat(s) {
  const n = (re) => Number(re.exec(s ?? "")?.[1] ?? 0);
  return {
    filesChanged: n(/(\d+) files? changed/),
    insertions: n(/(\d+) insertions?\(\+\)/),
    deletions: n(/(\d+) deletions?\(-\)/)
  };
}
async function readGit(cwd, timeoutMs) {
  const [branch, sha2, stat, origin] = await Promise.all([
    git(cwd, ["rev-parse", "--abbrev-ref", "HEAD"], timeoutMs),
    git(cwd, ["rev-parse", "--short", "HEAD"], timeoutMs),
    git(cwd, ["diff", "--shortstat", "HEAD"], timeoutMs),
    git(cwd, ["remote", "get-url", "origin"], timeoutMs)
  ]);
  if (branch === null && sha2 === null) return null;
  return {
    branch: branch && branch !== "HEAD" ? branch : null,
    headSha: sha2 || null,
    ...parseShortstat(stat),
    repoRemote: remoteOf(origin)
  };
}

// src/http.ts
function headers(cfg, extra = {}) {
  return { ...extra, ...cfg.token ? { authorization: `Bearer ${cfg.token}` } : {} };
}
async function postJson(cfg, path, body, timeoutMs) {
  try {
    const res = await fetch(cfg.url + path, {
      method: "POST",
      headers: headers(cfg, { "content-type": "application/json" }),
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(timeoutMs)
    });
    await res.body?.cancel().catch(() => void 0);
    if (res.ok) return "ok";
    if (res.status === 401) return "unauthorized";
    return [400, 413, 422].includes(res.status) ? "drop" : "retry";
  } catch {
    return "retry";
  }
}
async function getText(cfg, path, timeoutMs) {
  try {
    const res = await fetch(cfg.url + path, {
      headers: headers(cfg),
      signal: AbortSignal.timeout(timeoutMs)
    });
    if (res.status !== 200) {
      await res.body?.cancel().catch(() => void 0);
      return null;
    }
    return await res.text();
  } catch {
    return null;
  }
}

// src/log.ts
import { appendFileSync, mkdirSync as mkdirSync2, renameSync as renameSync2, statSync } from "node:fs";
import { join as join2 } from "node:path";
var MAX_LOG = 1024 * 1024;
function log(home, msg) {
  try {
    mkdirSync2(home, { recursive: true, mode: 448 });
    const file = join2(home, "hooks.log");
    try {
      if (statSync(file).size > MAX_LOG) renameSync2(file, `${file}.1`);
    } catch {
    }
    appendFileSync(file, `${(/* @__PURE__ */ new Date()).toISOString()} ${msg}
`, { mode: 384 });
  } catch {
  }
}

// src/queue.ts
import {
  appendFileSync as appendFileSync2,
  mkdirSync as mkdirSync3,
  readdirSync,
  readFileSync as readFileSync2,
  renameSync as renameSync3,
  statSync as statSync2,
  unlinkSync,
  writeFileSync as writeFileSync2
} from "node:fs";
import { join as join3 } from "node:path";
var QUEUE_MAX_LINES = 5e3;
var QUEUE_MAX_BYTES = 5 * 1024 * 1024;
var FLUSH_BATCH = 50;
var STALE_FLUSH_MS = 6e4;
var queueFile = (home) => join3(home, "queue.jsonl");
function ensureHome(home) {
  mkdirSync3(home, { recursive: true, mode: 448 });
}
function capLines(lines, maxLines = QUEUE_MAX_LINES, maxBytes = QUEUE_MAX_BYTES) {
  let kept = lines.slice(-maxLines);
  let bytes = kept.reduce((n, l) => n + Buffer.byteLength(l) + 1, 0);
  let drop = 0;
  while (bytes > maxBytes && drop < kept.length) {
    bytes -= Buffer.byteLength(kept[drop]) + 1;
    drop++;
  }
  kept = kept.slice(drop);
  return kept;
}
function readLines(file) {
  try {
    return readFileSync2(file, "utf8").split("\n").filter(Boolean);
  } catch {
    return [];
  }
}
function enqueue(home, item) {
  ensureHome(home);
  const file = queueFile(home);
  appendFileSync2(file, JSON.stringify(item) + "\n", { mode: 384 });
  const size = statSync2(file).size;
  if (size > QUEUE_MAX_BYTES || size > 512 * 1024) {
    const lines = readLines(file);
    if (size > QUEUE_MAX_BYTES || lines.length > QUEUE_MAX_LINES) {
      const tmp = `${file}.${process.pid}.tmp`;
      writeFileSync2(tmp, capLines(lines).join("\n") + "\n", { mode: 384 });
      renameSync3(tmp, file);
    }
  }
}
function queueLength(home) {
  return readLines(queueFile(home)).length;
}
async function flushQueue(home, send, batch = FLUSH_BATCH) {
  ensureHome(home);
  const file = queueFile(home);
  const mine = `${file}.flushing.${process.pid}.${Date.now()}`;
  const claimed = [];
  for (const f of readdirSync(home)) {
    if (!f.startsWith("queue.jsonl.flushing.")) continue;
    const p = join3(home, f);
    try {
      if (Date.now() - statSync2(p).mtimeMs <= STALE_FLUSH_MS) continue;
      const claim = `${mine}.stale`;
      renameSync3(p, claim);
      claimed.push(...readLines(claim));
      unlinkSync(claim);
    } catch {
    }
  }
  try {
    renameSync3(file, mine);
    claimed.push(...readLines(mine));
  } catch {
  }
  let i = 0;
  let ok = true;
  for (; i < claimed.length && i < batch; i++) {
    let item;
    try {
      item = JSON.parse(claimed[i]);
    } catch {
      continue;
    }
    if (!await send(item)) {
      ok = false;
      break;
    }
  }
  const rest = claimed.slice(i);
  if (rest.length) appendFileSync2(file, rest.join("\n") + "\n", { mode: 384 });
  try {
    unlinkSync(mine);
  } catch {
  }
  return ok && rest.length === 0;
}

// src/runtime.ts
var isGrokEnv = (env) => !!(env.GROK_HOOK_EVENT || env.GROK_SESSION_ID);
var str3 = (v) => typeof v === "string" && v.length > 0 ? v : null;
var has = (o, k) => o[k] !== void 0 && o[k] !== null;
var GROK_START_SOURCE = { new: "startup", load: "resume" };
function normalizeHookInput(raw, env, event) {
  const camelOnly = (has(raw, "sessionId") || has(raw, "hookEventName")) && !has(raw, "session_id");
  if (!isGrokEnv(env) && !camelOnly)
    return { runtime: "claude_code", input: raw, lastAssistantMessage: null, skip: null };
  const input = {
    session_id: str3(raw.sessionId) ?? str3(raw.session_id) ?? void 0,
    cwd: str3(raw.cwd) ?? str3(raw.workspaceRoot) ?? void 0,
    transcript_path: str3(raw.transcriptPath) ?? str3(raw.transcript_path) ?? void 0,
    hook_event_name: raw.hook_event_name
  };
  const set = (k, v) => {
    if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") input[k] = v;
  };
  switch (event) {
    case "SessionStart": {
      const s = str3(raw.source);
      set("source", s ? GROK_START_SOURCE[s] ?? s : void 0);
      break;
    }
    case "Stop":
    case "SubagentStop":
      set("stop_hook_active", raw.stopHookActive ?? raw.stop_hook_active);
      break;
    case "Notification":
      set("message", raw.message);
      set("notification_type", raw.notificationType ?? raw.notification_type);
      break;
    case "PreCompact":
      set("trigger", raw.source ?? raw.trigger);
      break;
    case "SessionEnd":
      set("reason", raw.reason);
      break;
    case "UserPromptSubmit":
      set("prompt", raw.prompt);
      break;
  }
  return {
    runtime: "grok_build",
    input,
    lastAssistantMessage: str3(raw.lastAssistantMessage),
    skip: grokSkip(event, raw)
  };
}
function grokSkip(event, raw) {
  if (event === "Stop" && str3(raw.reason) && raw.reason !== "end_turn")
    return `Stop with reason ${JSON.stringify(String(raw.reason).slice(0, 40))}`;
  if (event === "SubagentStop") return "SubagentStop (Grok Build subagents are not captured)";
  if (event === "SessionEnd" && str3(raw.subagentType)) return "SessionEnd of a subagent";
  return null;
}

// src/transcript-tail.ts
import { open } from "node:fs/promises";
var TAIL_EVENTS = ["Stop", "SubagentStop", "PreCompact"];
var TAIL_READ_BYTES = TRANSCRIPT_TAIL_MAX_CHARS * TRANSCRIPT_READ_FACTOR;
function tailPath(event, input) {
  const v = event === "SubagentStop" ? input.agent_transcript_path : input.transcript_path;
  return typeof v === "string" && v ? v : null;
}
async function readTail(path, opts = {}) {
  if (!path) return null;
  try {
    const fh = await open(path, "r");
    try {
      const size = (await fh.stat()).size;
      const want = Math.min(size, TAIL_READ_BYTES);
      const buf = Buffer.alloc(want);
      const { bytesRead } = await fh.read(buf, 0, want, size - want);
      const text = buf.subarray(0, bytesRead).toString("utf8");
      return renderTranscriptTail(text, TRANSCRIPT_TAIL_MAX_CHARS, want < size, opts);
    } finally {
      await fh.close();
    }
  } catch {
    return null;
  }
}
function readTailWithin(path, timeoutMs, opts = {}) {
  let timer;
  const late2 = new Promise((resolve) => {
    timer = setTimeout(() => resolve(null), timeoutMs);
    timer.unref();
  });
  return Promise.race([readTail(path, opts), late2]).finally(() => clearTimeout(timer));
}

// src/commands/emit.ts
var NETWORK_TIMEOUT_MS = 2e3;
var GIT_TIMEOUT_MS = 500;
var TAIL_TIMEOUT_MS = 300;
var QUICK_GIT_TIMEOUT_MS = 300;
var TOKEN_REFUSED = "Token refused. Run /reconnect:connect.";
var refusedMarker = (home) => join4(home, "token-refused");
function makeSender(cfg, deadline) {
  return async (item) => {
    if (deadline.remaining() < 50) return false;
    const r = await postJson(cfg, "/events", item, deadline.cap(NETWORK_TIMEOUT_MS));
    if (r === "drop")
      log(cfg.home, `dropped event rejected by API: ${JSON.stringify(item).slice(0, 200)}`);
    try {
      if (r === "unauthorized" && !existsSync(refusedMarker(cfg.home))) {
        log(cfg.home, `${TOKEN_REFUSED} (API at ${cfg.url} answered 401; events stay queued)`);
        writeFileSync3(refusedMarker(cfg.home), "", { mode: 384 });
      } else if (r === "ok" && existsSync(refusedMarker(cfg.home))) {
        unlinkSync2(refusedMarker(cfg.home));
      }
    } catch {
    }
    return r === "ok" || r === "drop";
  };
}
function startBackgroundFlush(cliPath, home) {
  try {
    spawn2(process.execPath, [cliPath, "flush"], {
      detached: true,
      stdio: "ignore",
      windowsHide: true
    }).on("error", () => void 0).unref();
  } catch (err) {
    log(home, `background flush did not start: ${err?.message ?? String(err)}`);
  }
}
async function emit(event, rawInput, cfg, deadline, env = process.env, opts = {}) {
  let raw;
  try {
    raw = JSON.parse(rawInput || "{}");
  } catch {
    log(cfg.home, `emit ${event}: stdin is not JSON`);
    return;
  }
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) raw = {};
  const { runtime, input, lastAssistantMessage, skip } = normalizeHookInput(raw, env, event);
  if (skip) return;
  const queueOnly = runtime === "grok_build" && event === "SessionEnd";
  const cwd = typeof input.cwd === "string" && input.cwd ? input.cwd : process.cwd();
  const git2 = await readGit(cwd, deadline.cap(queueOnly ? QUICK_GIT_TIMEOUT_MS : GIT_TIMEOUT_MS));
  const envelope = buildEnvelope({
    event,
    input,
    git: git2,
    envLane: env.LANE,
    fallbackCwd: cwd,
    runtime
  });
  if (!envelope) {
    log(cfg.home, `emit ${event}: no session_id, skipped`);
    return;
  }
  if (queueOnly) {
    enqueue(cfg.home, envelope);
    if (opts.cliPath) startBackgroundFlush(opts.cliPath, cfg.home);
    return;
  }
  if (cfg.sendTranscriptTail && TAIL_EVENTS.includes(event)) {
    envelope.transcriptTail = await readTailWithin(
      tailPath(event, input),
      deadline.cap(TAIL_TIMEOUT_MS),
      { runtime, lastAssistantMessage }
    );
    if (runtime === "grok_build" && envelope.transcriptTail === null) {
      log(cfg.home, `emit ${event}: Grok Build session file not readable, sent the last answer`);
      envelope.transcriptTail = lastAssistantMessage ? capRedacted(`assistant: ${lastAssistantMessage}`, TRANSCRIPT_TAIL_MAX_CHARS) : null;
    }
  }
  if (event === "UserPromptSubmit" && cfg.sendPrompt && typeof input.prompt === "string") {
    const text = redact(input.prompt);
    envelope.prompt = text.slice(0, PROMPT_MAX_CHARS);
    if (text.length > PROMPT_MAX_CHARS) envelope.promptTruncated = true;
  }
  const send = makeSender(cfg, deadline);
  const queueDrained = await flushQueue(cfg.home, send);
  if (queueDrained && await send(envelope)) return;
  enqueue(cfg.home, envelope);
}

// src/commands/flush.ts
async function flush(cfg, out) {
  const before = queueLength(cfg.home);
  let ok = true;
  while (ok && queueLength(cfg.home) > 0) {
    ok = await flushQueue(cfg.home, makeSender(cfg, new Deadline(3e4)), FLUSH_BATCH);
  }
  const left = queueLength(cfg.home);
  out(`Sent ${before - left} queued events. ${left} left.
`);
  return left === 0 ? 0 : 1;
}

// src/commands/install.ts
import {
  copyFileSync,
  existsSync as existsSync2,
  mkdirSync as mkdirSync4,
  readFileSync as readFileSync3,
  renameSync as renameSync4,
  writeFileSync as writeFileSync4
} from "node:fs";
import { homedir as homedir2 } from "node:os";
import { dirname, join as join5 } from "node:path";

// src/hook-commands.ts
function hookArgs() {
  const out = {};
  for (const e of HOOK_EVENTS) out[e] = [["emit", e]];
  out.SessionStart.push(["inject-card"]);
  return out;
}

// src/commands/install.ts
var PLUGIN_TIP = "Tip: the Claude Code plugin is easier and updates itself. See docs/HOOKS.md.\n";
var settingsPath = () => join5(homedir2(), ".claude", "settings.json");
function wantedCommands(bin) {
  const out = {};
  for (const [event, list] of Object.entries(hookArgs()))
    out[event] = list.map((args) => `${bin} ${args.join(" ")}`);
  return out;
}
var isOurs = (cmd, bin) => cmd.startsWith(`${bin} emit `) || cmd === `${bin} inject-card`;
function mergeSettings(current, bin) {
  const next = structuredClone(current);
  next.hooks ??= {};
  let changed = false;
  for (const [event, cmds] of Object.entries(wantedCommands(bin))) {
    const groups = next.hooks[event] ??= [];
    const existing = new Set(groups.flatMap((g) => g.hooks ?? []).map((h) => h.command));
    const missing = cmds.filter((c) => !existing.has(c));
    if (!missing.length) continue;
    let group = groups.find((g) => (g.hooks ?? []).some((h) => isOurs(h.command, bin)));
    if (!group) {
      group = { hooks: [] };
      groups.push(group);
    }
    for (const command of missing) group.hooks.push({ type: "command", command, timeout: 5 });
    changed = true;
  }
  return changed ? next : null;
}
function readSettings(file, out, verb) {
  if (!existsSync2(file)) return {};
  try {
    return JSON.parse(readFileSync3(file, "utf8"));
  } catch {
    out(`Cannot read ${file}: it is not valid JSON. Fix it, then run ${verb} again.
`);
    return void 0;
  }
}
function writeSettings(file, next, out) {
  mkdirSync4(dirname(file), { recursive: true });
  if (existsSync2(file)) {
    const backup = `${file}.bak-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}`;
    copyFileSync(file, backup);
    out(`Backup: ${backup}
`);
  }
  const tmp = `${file}.${process.pid}.tmp`;
  writeFileSync4(tmp, JSON.stringify(next, null, 2) + "\n");
  renameSync4(tmp, file);
}
function install(bin, out, file = settingsPath()) {
  out(PLUGIN_TIP);
  const current = readSettings(file, out, "install");
  if (!current) return 1;
  const next = mergeSettings(current, bin);
  if (!next) {
    out(`Reconnect hooks are already in ${file}.
`);
    return 0;
  }
  writeSettings(file, next, out);
  out(`Added Reconnect hooks to ${file}.
`);
  return 0;
}

// src/commands/status.ts
var TIMEOUT_MS = 5e3;
var STATUS_PROBE_KEY = "__reconnect-status-check__";
var NOT_CONNECTED = "Not connected. Run /reconnect:connect.";
var SOURCE_TEXT = {
  env: "RECONNECT_TOKEN in the environment (set by your organization or your shell)",
  plugin: "the plugin settings",
  file: "~/.reconnect/config.json (reconnect connect)"
};
async function get(url, token) {
  try {
    const res = await fetch(url, {
      headers: token ? { authorization: `Bearer ${token}` } : {},
      signal: AbortSignal.timeout(TIMEOUT_MS)
    });
    await res.body?.cancel().catch(() => void 0);
    return res.status;
  } catch {
    return null;
  }
}
async function status(cfg, out) {
  out(`Reconnect address: ${cfg.url}
`);
  out(`Token from: ${cfg.tokenSource ? SOURCE_TEXT[cfg.tokenSource] : "none"}
`);
  if (cfg.deviceId) out(`Computer id: ${cfg.deviceId}
`);
  const health = await get(`${cfg.url}/health`);
  if (health !== 200) {
    out(`Server: cannot be reached${health ? ` (HTTP ${health})` : ""}.
`);
    out(`Token: not checked.
`);
    return 1;
  }
  out("Server: reachable.\n");
  if (!cfg.token) {
    out(`Token: ${NOT_CONNECTED}
`);
    return 1;
  }
  const s = await get(`${cfg.url}/lanes/${STATUS_PROBE_KEY}/card.md`, cfg.token);
  if (s !== null && (s >= 200 && s < 300 || s === 404)) {
    out("Token: works.\n");
    return 0;
  }
  if (s === 401 || s === 403) out(`Token: ${NOT_CONNECTED}
`);
  else out(`Token: could not be checked${s ? ` (HTTP ${s})` : ""}.
`);
  return 1;
}

// src/commands/inject-card.ts
var MAX_CARD_CHARS = 4e3;
async function injectCard(rawInput, cfg, deadline, out, env = process.env) {
  let cwd = process.cwd();
  let sessionId = null;
  try {
    const input = JSON.parse(rawInput || "{}");
    if (typeof input.cwd === "string" && input.cwd) cwd = input.cwd;
    if (typeof input.session_id === "string" && input.session_id) sessionId = input.session_id;
  } catch {
  }
  const git2 = await readGit(cwd, deadline.cap(GIT_TIMEOUT_MS));
  const lane = scopeLaneKey(
    resolveLane({ envLane: env.LANE, branch: git2?.branch, cwd }),
    repoNameOf(git2?.repoRemote ?? null, cwd),
    sessionId
  );
  const card = await getText(
    cfg,
    `/lanes/${encodeURIComponent(lane.key)}/card.md`,
    deadline.cap(NETWORK_TIMEOUT_MS)
  );
  if (card?.trim()) out(card.slice(0, MAX_CARD_CHARS) + (card.endsWith("\n") ? "" : "\n"));
}

// src/commands/uninstall.ts
var baseName = (p) => p.split(/[\\/]/).pop() ?? p;
var isAbsolute = (p) => p.startsWith("/") || /^[A-Za-z]:[\\/]/.test(p);
var unquote = (s) => s.replace(/^(["'])(.*)\1$/, "$2");
function isReconnectCommand(command, extraBin) {
  if (typeof command !== "string") return false;
  const m = /^(.+?) (?:emit [A-Za-z]+|inject-card)$/.exec(command.trim());
  if (!m) return false;
  const bin = unquote(m[1].trim());
  if (bin === "reconnect" || extraBin && bin === extraBin) return true;
  return isAbsolute(bin) && /^reconnect(\.(cmd|exe|js))?$/.test(baseName(bin));
}
function removeReconnectHooks(current, extraBin) {
  const next = structuredClone(current);
  const removed = [];
  const hooks = next.hooks;
  if (!hooks || typeof hooks !== "object") return { next, removed };
  for (const [event, groups] of Object.entries(hooks)) {
    if (!Array.isArray(groups)) continue;
    const kept = [];
    let touched = false;
    for (const g of groups) {
      if (!g || !Array.isArray(g.hooks)) {
        kept.push(g);
        continue;
      }
      const left = g.hooks.filter((h) => {
        if (!isReconnectCommand(h?.command, extraBin)) return true;
        removed.push({ event, command: h.command });
        return false;
      });
      if (left.length === g.hooks.length) kept.push(g);
      else {
        touched = true;
        if (left.length) kept.push({ ...g, hooks: left });
      }
    }
    if (!touched) continue;
    if (kept.length) hooks[event] = kept;
    else delete hooks[event];
  }
  if (removed.length && Object.keys(hooks).length === 0) delete next.hooks;
  return { next, removed };
}
function uninstall(extraBin, out, file = settingsPath()) {
  const current = readSettings(file, out, "uninstall");
  if (!current) return 1;
  const { next, removed } = removeReconnectHooks(current, extraBin);
  if (!removed.length) {
    out(`No Reconnect hooks in ${file}. Nothing to remove.
`);
    return 0;
  }
  writeSettings(file, next, out);
  for (const r of removed) out(`Removed ${r.event}: ${r.command}
`);
  out(`Removed ${removed.length} Reconnect hooks from ${file}.
`);
  return 0;
}

// src/plugin-guard.ts
import { readFileSync as readFileSync4, writeFileSync as writeFileSync5 } from "node:fs";
import { homedir as homedir3 } from "node:os";
import { join as join6 } from "node:path";
var PLUGIN_ID = "reconnect@reconnect-plugins";
var MAX_FILE_BYTES = 1024 * 1024;
var claudeDir = (env) => env.CLAUDE_CONFIG_DIR || join6(homedir3(), ".claude");
var grokHome = (env) => env.GROK_HOME || join6(homedir3(), ".grok");
function readJson(file) {
  const text = readFileSync4(file, "utf8");
  if (text.length > MAX_FILE_BYTES) throw new Error("too big");
  return JSON.parse(text);
}
function hasReconnectKey(v, depth = 0) {
  if (!v || typeof v !== "object" || depth > 6) return false;
  if (Array.isArray(v)) return v.some((x) => hasReconnectKey(x, depth + 1));
  return Object.entries(v).some(
    ([k, x]) => k.startsWith("reconnect@") || hasReconnectKey(x, depth + 1)
  );
}
function grokPluginInstalled(env = process.env) {
  try {
    const reg = readJson(join6(grokHome(env), "installed-plugins", "registry.json"));
    return Object.values(reg?.repos ?? {}).some(
      (r) => Object.keys(r?.plugins ?? {}).includes("reconnect")
    );
  } catch {
    return false;
  }
}
function pluginActive(env = process.env) {
  try {
    const dir = claudeDir(env);
    const installed = readJson(join6(dir, "plugins", "installed_plugins.json"));
    if (!hasReconnectKey(installed?.plugins)) return false;
    let settings = {};
    try {
      settings = readJson(join6(dir, "settings.json"));
    } catch {
    }
    return settings?.enabledPlugins?.[PLUGIN_ID] !== false;
  } catch {
    return false;
  }
}
function skipLegacyRun(home, env = process.env) {
  if (env.CLAUDE_PLUGIN_ROOT || env.GROK_PLUGIN_ROOT) return false;
  if (!pluginActive(env) && !(isGrokEnv(env) && grokPluginInstalled(env))) return false;
  const day = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const mark = join6(home, "legacy-skip.day");
  let last = "";
  try {
    last = readFileSync4(mark, "utf8").trim();
  } catch {
  }
  if (last !== day) {
    log(
      home,
      'old settings hook skipped: the Reconnect plugin sends this event. Run "reconnect uninstall" once.'
    );
    try {
      writeFileSync5(mark, day + "\n", { mode: 384 });
    } catch {
    }
  }
  return true;
}

// src/main.ts
var HOOK_BUDGET_MS = 2400;
var GROK_SESSION_END_BUDGET_MS = 800;
var STDIN_TIMEOUT_MS = 300;
var USAGE = `reconnect <command>

Commands:
  emit <event>         Read Claude Code or Grok Build hook JSON on stdin and send it to Reconnect.
                       <event>: ${HOOK_EVENTS.join(" | ")}
  inject-card          Print the lane card to stdout (use on SessionStart; Claude Code only).
  install [--bin X]    Add the hooks to ~/.claude/settings.json (X = command, default "reconnect").
                       The Claude Code plugin is easier and updates itself (docs/HOOKS.md).
  uninstall [--bin X]  Remove the hooks that install added from ~/.claude/settings.json.
  flush                Send queued events now.
  connect [--url <url>] [--name <name>] [--no-open]
                       Connect this computer: sign in in the browser, then save a device token.
  status               Show the address, where the token comes from, and check both.
`;
function parseArgs(argv) {
  const [cmd, arg, val] = argv;
  switch (cmd) {
    case "emit":
      return HOOK_EVENTS.includes(arg ?? "") ? { name: "emit", event: arg } : { name: "emit-unknown", event: arg ?? "" };
    case "install":
      return { name: "install", bin: arg === "--bin" && val ? val : "reconnect" };
    case "uninstall":
      return { name: "uninstall", ...arg === "--bin" && val ? { bin: val } : {} };
    case "connect": {
      const out = { name: "connect", open: true };
      const rest = argv.slice(1);
      for (let i = 0; i < rest.length; i++) {
        const a = rest[i];
        if (a === "--no-open") out.open = false;
        else if (a === "--url" && rest[i + 1]) out.url = rest[++i];
        else if (a === "--name" && rest[i + 1]) out.deviceName = rest[++i];
        else return { name: "help" };
      }
      return out;
    }
    case "inject-card":
    case "flush":
    case "status":
      return { name: cmd };
    default:
      return { name: "help" };
  }
}
async function main(argv) {
  const cmd = parseArgs(argv);
  const cfg = loadConfig();
  const stdout = (s) => void process.stdout.write(s);
  try {
    switch (cmd.name) {
      case "emit": {
        const quick = cmd.event === "SessionEnd" && isGrokEnv(process.env);
        const deadline = new Deadline(quick ? GROK_SESSION_END_BUDGET_MS : HOOK_BUDGET_MS);
        if (skipLegacyRun(cfg.home)) return 0;
        await emit(cmd.event, await readStdin(STDIN_TIMEOUT_MS), cfg, deadline, process.env, {
          cliPath: process.argv[1]
        });
        return 0;
      }
      case "emit-unknown":
        log(cfg.home, `emit: unknown event ${JSON.stringify(cmd.event.slice(0, 64))}, ignored`);
        return 0;
      case "inject-card": {
        if (isGrokEnv(process.env)) return 0;
        const deadline = new Deadline(HOOK_BUDGET_MS);
        if (skipLegacyRun(cfg.home)) return 0;
        await injectCard(await readStdin(STDIN_TIMEOUT_MS), cfg, deadline, stdout);
        return 0;
      }
      case "install":
        return install(cmd.bin, stdout);
      case "uninstall":
        return uninstall(cmd.bin, stdout);
      case "flush":
        return await flush(cfg, stdout);
      case "connect":
        return await connect(
          { url: cmd.url, name: cmd.deviceName, open: cmd.open },
          { cfg, out: stdout }
        );
      case "status":
        return await status(cfg, stdout);
      default:
        process.stderr.write(USAGE);
        return 0;
    }
  } catch (err) {
    log(cfg.home, `${cmd.name} failed: ${err?.stack ?? String(err)}`);
    return ["install", "uninstall", "flush", "connect", "status"].includes(cmd.name) ? 1 : 0;
  }
}

// src/cli.ts
var grokSessionEnd = process.argv[2] === "emit" && process.argv[3] === "SessionEnd" && !!(process.env.GROK_HOOK_EVENT || process.env.GROK_SESSION_ID);
var hardStop = setTimeout(() => process.exit(0), grokSessionEnd ? 1e3 : 2500);
var isHook = process.argv[2] === "emit" || process.argv[2] === "inject-card";
if (!isHook) clearTimeout(hardStop);
main(process.argv.slice(2)).then((code) => process.exit(code)).catch(() => process.exit(0));
