// Generated from VenbraceNoCode.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VenbraceNoCodeListener = require('./VenbraceNoCodeListener').VenbraceNoCodeListener;
var VenbraceNoCodeVisitor = require('./VenbraceNoCodeVisitor').VenbraceNoCodeVisitor;

var grammarFileName = "VenbraceNoCode.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003}\u021d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u0003\u0002\u0007\u0002h\n\u0002\f\u0002\u000e\u0002k\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "r\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004w\n\u0004\r",
    "\u0004\u000e\u0004x\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0083\n",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0007\b\u008e\n\b\f\b\u000e\b\u0091\u000b",
    "\b\u0003\b\u0005\b\u0094\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0007\t\u009b\n\t\f\t\u000e\t\u009e\u000b\t\u0003\t\u0005\t\u00a1\n",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0007\n\u00a8\n\n\f\n\u000e",
    "\n\u00ab\u000b\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0007\u000b\u00b1",
    "\n\u000b\f\u000b\u000e\u000b\u00b4\u000b\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00b8\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0005\r\u00c2\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00c7\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007",
    "\u000f\u00d2\n\u000f\f\u000f\u000e\u000f\u00d5\u000b\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00d9\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00de\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00e2\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00e6\n\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00ea\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00f0\n\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u00f4\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u00fb\n\u0012\u0003\u0012\u0007",
    "\u0012\u00fe\n\u0012\f\u0012\u000e\u0012\u0101\u000b\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u0107\n\u0014\u0003",
    "\u0014\u0003\u0014\u0005\u0014\u010b\n\u0014\u0003\u0014\u0007\u0014",
    "\u010e\n\u0014\f\u0014\u000e\u0014\u0111\u000b\u0014\u0003\u0014\u0005",
    "\u0014\u0114\n\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u011a\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u011e",
    "\n\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u0126\n\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0133\n\u0017\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u0137\n\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0169\n\u001f",
    "\u0003 \u0003 \u0003 \u0003 \u0006 \u016f\n \r \u000e \u0170\u0003 ",
    "\u0003 \u0003 \u0003 \u0003 \u0003 \u0006 \u0179\n \r \u000e \u017a",
    "\u0003 \u0003 \u0005 \u017f\n \u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0005!\u018c\n!\u0003\"\u0003\"",
    "\u0003\"\u0007\"\u0191\n\"\f\"\u000e\"\u0194\u000b\"\u0003\"\u0003\"",
    "\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0005)\u01c5\n)\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0007+\u01cf\n+\f+\u000e",
    "+\u01d2\u000b+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003.\u0003.\u0003.\u0003.\u0005.\u01e4",
    "\n.\u0003.\u0003.\u0005.\u01e8\n.\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0005/\u01f0\n/\u0003/\u0005/\u01f3\n/\u0003/\u0007/\u01f6",
    "\n/\f/\u000e/\u01f9\u000b/\u0003/\u0003/\u00030\u00030\u00030\u0005",
    "0\u0200\n0\u00030\u00030\u00050\u0204\n0\u00030\u00070\u0207\n0\f0\u000e",
    "0\u020a\u000b0\u00030\u00050\u020d\n0\u00030\u00030\u00030\u00031\u0003",
    "1\u00031\u00031\u00031\u00051\u0217\n1\u00032\u00032\u00033\u00033\u0003",
    "3\u0002\u00024\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bd\u0002",
    "\u000b\u0003\u0002{|\u0003\u000234\u0003\u0002<=\u0003\u00026;\u0004",
    "\u0002??AB\u0003\u0002RS\u0003\u0002HO\u0003\u0002Y^\u0005\u0002\u000f",
    "\u0010y{}}\u0002\u0237\u0002i\u0003\u0002\u0002\u0002\u0004q\u0003\u0002",
    "\u0002\u0002\u0006v\u0003\u0002\u0002\u0002\bz\u0003\u0002\u0002\u0002",
    "\n\u0082\u0003\u0002\u0002\u0002\f\u0084\u0003\u0002\u0002\u0002\u000e",
    "\u008a\u0003\u0002\u0002\u0002\u0010\u0097\u0003\u0002\u0002\u0002\u0012",
    "\u00a4\u0003\u0002\u0002\u0002\u0014\u00b7\u0003\u0002\u0002\u0002\u0016",
    "\u00b9\u0003\u0002\u0002\u0002\u0018\u00c1\u0003\u0002\u0002\u0002\u001a",
    "\u00c6\u0003\u0002\u0002\u0002\u001c\u00c8\u0003\u0002\u0002\u0002\u001e",
    "\u00da\u0003\u0002\u0002\u0002 \u00ed\u0003\u0002\u0002\u0002\"\u00f7",
    "\u0003\u0002\u0002\u0002$\u0102\u0003\u0002\u0002\u0002&\u010f\u0003",
    "\u0002\u0002\u0002(\u0117\u0003\u0002\u0002\u0002*\u0125\u0003\u0002",
    "\u0002\u0002,\u0132\u0003\u0002\u0002\u0002.\u0136\u0003\u0002\u0002",
    "\u00020\u0138\u0003\u0002\u0002\u00022\u0141\u0003\u0002\u0002\u0002",
    "4\u0148\u0003\u0002\u0002\u00026\u014e\u0003\u0002\u0002\u00028\u0153",
    "\u0003\u0002\u0002\u0002:\u0159\u0003\u0002\u0002\u0002<\u0168\u0003",
    "\u0002\u0002\u0002>\u017e\u0003\u0002\u0002\u0002@\u018b\u0003\u0002",
    "\u0002\u0002B\u018d\u0003\u0002\u0002\u0002D\u0197\u0003\u0002\u0002",
    "\u0002F\u019d\u0003\u0002\u0002\u0002H\u01a5\u0003\u0002\u0002\u0002",
    "J\u01ad\u0003\u0002\u0002\u0002L\u01b5\u0003\u0002\u0002\u0002N\u01ba",
    "\u0003\u0002\u0002\u0002P\u01c4\u0003\u0002\u0002\u0002R\u01c6\u0003",
    "\u0002\u0002\u0002T\u01cb\u0003\u0002\u0002\u0002V\u01d5\u0003\u0002",
    "\u0002\u0002X\u01da\u0003\u0002\u0002\u0002Z\u01e7\u0003\u0002\u0002",
    "\u0002\\\u01e9\u0003\u0002\u0002\u0002^\u01fc\u0003\u0002\u0002\u0002",
    "`\u0216\u0003\u0002\u0002\u0002b\u0218\u0003\u0002\u0002\u0002d\u021a",
    "\u0003\u0002\u0002\u0002fh\u0005\b\u0005\u0002gf\u0003\u0002\u0002\u0002",
    "hk\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002",
    "\u0002jl\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002lm\u0007\u0002",
    "\u0002\u0003m\u0003\u0003\u0002\u0002\u0002nr\u0005\b\u0005\u0002or",
    "\u0005\u0016\f\u0002pr\u0005*\u0016\u0002qn\u0003\u0002\u0002\u0002",
    "qo\u0003\u0002\u0002\u0002qp\u0003\u0002\u0002\u0002r\u0005\u0003\u0002",
    "\u0002\u0002sw\u0005\b\u0005\u0002tw\u0005\u0016\f\u0002uw\u0005*\u0016",
    "\u0002vs\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vu\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003",
    "\u0002\u0002\u0002y\u0007\u0003\u0002\u0002\u0002z{\u0007\b\u0002\u0002",
    "{|\u0005\n\u0006\u0002|}\u0007\t\u0002\u0002}\t\u0003\u0002\u0002\u0002",
    "~\u0083\u0005\f\u0007\u0002\u007f\u0083\u0005\u000e\b\u0002\u0080\u0083",
    "\u0005\u0010\t\u0002\u0081\u0083\u0005\u0012\n\u0002\u0082~\u0003\u0002",
    "\u0002\u0002\u0082\u007f\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002",
    "\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u000b\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0007\u001e\u0002\u0002\u0085\u0086\u0007\u001d",
    "\u0002\u0002\u0086\u0087\u0007|\u0002\u0002\u0087\u0088\u0007\u0019",
    "\u0002\u0002\u0088\u0089\u0005*\u0016\u0002\u0089\r\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0007\u0019\u0002\u0002\u008b\u008f\u0007|\u0002",
    "\u0002\u008c\u008e\u0007|\u0002\u0002\u008d\u008c\u0003\u0002\u0002",
    "\u0002\u008e\u0091\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0093\u0003\u0002\u0002",
    "\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0092\u0094\u0007\u0017\u0002",
    "\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0005\u0014\u000b",
    "\u0002\u0096\u000f\u0003\u0002\u0002\u0002\u0097\u0098\u0007\u0019\u0002",
    "\u0002\u0098\u009c\u0007|\u0002\u0002\u0099\u009b\u0007|\u0002\u0002",
    "\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009e\u0003\u0002\u0002\u0002",
    "\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002",
    "\u009d\u00a0\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002",
    "\u009f\u00a1\u0007\u0018\u0002\u0002\u00a0\u009f\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0005*\u0016\u0002\u00a3\u0011\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\u0007\u0011\u0002\u0002\u00a5\u00a9\u0007{\u0002\u0002",
    "\u00a6\u00a8\u0007|\u0002\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002",
    "\u00a8\u00ab\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ac\u0003\u0002\u0002\u0002",
    "\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u0017\u0002\u0002",
    "\u00ad\u00ae\u0005\u0014\u000b\u0002\u00ae\u0013\u0003\u0002\u0002\u0002",
    "\u00af\u00b1\u0005\u0016\f\u0002\u00b0\u00af\u0003\u0002\u0002\u0002",
    "\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002",
    "\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b8\u0003\u0002\u0002\u0002",
    "\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007\u0004\u0002\u0002",
    "\u00b6\u00b8\u0007\u0005\u0002\u0002\u00b7\u00b2\u0003\u0002\u0002\u0002",
    "\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b8\u0015\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0007\u0004\u0002\u0002\u00ba\u00bb\u0005\u0018\r\u0002",
    "\u00bb\u00bc\u0007\u0005\u0002\u0002\u00bc\u0017\u0003\u0002\u0002\u0002",
    "\u00bd\u00c2\u0005\u001a\u000e\u0002\u00be\u00c2\u0005\"\u0012\u0002",
    "\u00bf\u00c2\u0005$\u0013\u0002\u00c0\u00c2\u0005&\u0014\u0002\u00c1",
    "\u00bd\u0003\u0002\u0002\u0002\u00c1\u00be\u0003\u0002\u0002\u0002\u00c1",
    "\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c2",
    "\u0019\u0003\u0002\u0002\u0002\u00c3\u00c7\u0005\u001c\u000f\u0002\u00c4",
    "\u00c7\u0005\u001e\u0010\u0002\u00c5\u00c7\u0005 \u0011\u0002\u00c6",
    "\u00c3\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6",
    "\u00c5\u0003\u0002\u0002\u0002\u00c7\u001b\u0003\u0002\u0002\u0002\u00c8",
    "\u00c9\u0007\u0012\u0002\u0002\u00c9\u00ca\u0005*\u0016\u0002\u00ca",
    "\u00cb\u0007\u0013\u0002\u0002\u00cb\u00d3\u0005\u0014\u000b\u0002\u00cc",
    "\u00cd\u0007\u0015\u0002\u0002\u00cd\u00ce\u0005*\u0016\u0002\u00ce",
    "\u00cf\u0007\u0013\u0002\u0002\u00cf\u00d0\u0005\u0014\u000b\u0002\u00d0",
    "\u00d2\u0003\u0002\u0002\u0002\u00d1\u00cc\u0003\u0002\u0002\u0002\u00d2",
    "\u00d5\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d3",
    "\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d8\u0003\u0002\u0002\u0002\u00d5",
    "\u00d3\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007\u0014\u0002\u0002\u00d7",
    "\u00d9\u0005\u0014\u000b\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8",
    "\u00d9\u0003\u0002\u0002\u0002\u00d9\u001d\u0003\u0002\u0002\u0002\u00da",
    "\u00db\u0007\u0016\u0002\u0002\u00db\u00dd\u0007|\u0002\u0002\u00dc",
    "\u00de\u0007\"\u0002\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df",
    "\u00e1\u0005*\u0016\u0002\u00e0\u00e2\u0007\u0019\u0002\u0002\u00e1",
    "\u00e0\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2",
    "\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e5\u0005*\u0016\u0002\u00e4",
    "\u00e6\u0007!\u0002\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e5",
    "\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7",
    "\u00e9\u0005*\u0016\u0002\u00e8\u00ea\u0007\u0017\u0002\u0002\u00e9",
    "\u00e8\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea",
    "\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec\u0005\u0014\u000b\u0002\u00ec",
    "\u001f\u0003\u0002\u0002\u0002\u00ed\u00ef\u0007#\u0002\u0002\u00ee",
    "\u00f0\u0007$\u0002\u0002\u00ef\u00ee\u0003\u0002\u0002\u0002\u00ef",
    "\u00f0\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1",
    "\u00f3\u0005*\u0016\u0002\u00f2\u00f4\u0007\u0017\u0002\u0002\u00f3",
    "\u00f2\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4",
    "\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f6\u0005\u0014\u000b\u0002\u00f6",
    "!\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007\u001a\u0002\u0002\u00f8",
    "\u00ff\u0007|\u0002\u0002\u00f9\u00fb\u0005d3\u0002\u00fa\u00f9\u0003",
    "\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003",
    "\u0002\u0002\u0002\u00fc\u00fe\u0005*\u0016\u0002\u00fd\u00fa\u0003",
    "\u0002\u0002\u0002\u00fe\u0101\u0003\u0002\u0002\u0002\u00ff\u00fd\u0003",
    "\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002\u0100#\u0003",
    "\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0102\u0103\u0005",
    "(\u0015\u0002\u0103%\u0003\u0002\u0002\u0002\u0104\u0106\u0007\u001e",
    "\u0002\u0002\u0105\u0107\u0007\u001f\u0002\u0002\u0106\u0105\u0003\u0002",
    "\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002",
    "\u0002\u0002\u0108\u010a\u0007|\u0002\u0002\u0109\u010b\u0007\u0019",
    "\u0002\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002",
    "\u0002\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010e\u0005*",
    "\u0016\u0002\u010d\u0104\u0003\u0002\u0002\u0002\u010e\u0111\u0003\u0002",
    "\u0002\u0002\u010f\u010d\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002",
    "\u0002\u0002\u0110\u0113\u0003\u0002\u0002\u0002\u0111\u010f\u0003\u0002",
    "\u0002\u0002\u0112\u0114\u0007 \u0002\u0002\u0113\u0112\u0003\u0002",
    "\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002",
    "\u0002\u0002\u0115\u0116\u0005\u0014\u000b\u0002\u0116\'\u0003\u0002",
    "\u0002\u0002\u0117\u0119\u0007\u001c\u0002\u0002\u0118\u011a\u0007\u001d",
    "\u0002\u0002\u0119\u0118\u0003\u0002\u0002\u0002\u0119\u011a\u0003\u0002",
    "\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011d\t\u0002",
    "\u0002\u0002\u011c\u011e\u0007\u0019\u0002\u0002\u011d\u011c\u0003\u0002",
    "\u0002\u0002\u011d\u011e\u0003\u0002\u0002\u0002\u011e\u011f\u0003\u0002",
    "\u0002\u0002\u011f\u0120\u0005*\u0016\u0002\u0120)\u0003\u0002\u0002",
    "\u0002\u0121\u0122\u0007\u0006\u0002\u0002\u0122\u0126\u0007\u0007\u0002",
    "\u0002\u0123\u0126\u0005`1\u0002\u0124\u0126\u0005,\u0017\u0002\u0125",
    "\u0121\u0003\u0002\u0002\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0125",
    "\u0124\u0003\u0002\u0002\u0002\u0126+\u0003\u0002\u0002\u0002\u0127",
    "\u0133\u0005Z.\u0002\u0128\u0133\u0005.\u0018\u0002\u0129\u0133\u0005",
    "4\u001b\u0002\u012a\u0133\u00056\u001c\u0002\u012b\u0133\u00058\u001d",
    "\u0002\u012c\u0133\u0005:\u001e\u0002\u012d\u0133\u0005<\u001f\u0002",
    "\u012e\u0133\u0005P)\u0002\u012f\u0133\u0005\\/\u0002\u0130\u0133\u0005",
    "^0\u0002\u0131\u0133\u0005`1\u0002\u0132\u0127\u0003\u0002\u0002\u0002",
    "\u0132\u0128\u0003\u0002\u0002\u0002\u0132\u0129\u0003\u0002\u0002\u0002",
    "\u0132\u012a\u0003\u0002\u0002\u0002\u0132\u012b\u0003\u0002\u0002\u0002",
    "\u0132\u012c\u0003\u0002\u0002\u0002\u0132\u012d\u0003\u0002\u0002\u0002",
    "\u0132\u012e\u0003\u0002\u0002\u0002\u0132\u012f\u0003\u0002\u0002\u0002",
    "\u0132\u0130\u0003\u0002\u0002\u0002\u0132\u0131\u0003\u0002\u0002\u0002",
    "\u0133-\u0003\u0002\u0002\u0002\u0134\u0137\u00050\u0019\u0002\u0135",
    "\u0137\u00052\u001a\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0136",
    "\u0135\u0003\u0002\u0002\u0002\u0137/\u0003\u0002\u0002\u0002\u0138",
    "\u0139\u0007\u0006\u0002\u0002\u0139\u013a\u0007\u0012\u0002\u0002\u013a",
    "\u013b\u0005*\u0016\u0002\u013b\u013c\u0007\u0013\u0002\u0002\u013c",
    "\u013d\u0005*\u0016\u0002\u013d\u013e\u0007\u0014\u0002\u0002\u013e",
    "\u013f\u0005*\u0016\u0002\u013f\u0140\u0007\u0007\u0002\u0002\u0140",
    "1\u0003\u0002\u0002\u0002\u0141\u0142\u0007\u0006\u0002\u0002\u0142",
    "\u0143\u0007\u0017\u0002\u0002\u0143\u0144\u0005\u0014\u000b\u0002\u0144",
    "\u0145\u0007\u0018\u0002\u0002\u0145\u0146\u0005*\u0016\u0002\u0146",
    "\u0147\u0007\u0007\u0002\u0002\u01473\u0003\u0002\u0002\u0002\u0148",
    "\u0149\u0007\u0006\u0002\u0002\u0149\u014a\u0005*\u0016\u0002\u014a",
    "\u014b\t\u0003\u0002\u0002\u014b\u014c\u0005*\u0016\u0002\u014c\u014d",
    "\u0007\u0007\u0002\u0002\u014d5\u0003\u0002\u0002\u0002\u014e\u014f",
    "\u0007\u0006\u0002\u0002\u014f\u0150\u00072\u0002\u0002\u0150\u0151",
    "\u0005*\u0016\u0002\u0151\u0152\u0007\u0007\u0002\u0002\u01527\u0003",
    "\u0002\u0002\u0002\u0153\u0154\u0007\u0006\u0002\u0002\u0154\u0155\u0005",
    "*\u0016\u0002\u0155\u0156\t\u0004\u0002\u0002\u0156\u0157\u0005*\u0016",
    "\u0002\u0157\u0158\u0007\u0007\u0002\u0002\u01589\u0003\u0002\u0002",
    "\u0002\u0159\u015a\u0007\u0006\u0002\u0002\u015a\u015b\u0005*\u0016",
    "\u0002\u015b\u015c\t\u0005\u0002\u0002\u015c\u015d\u0005*\u0016\u0002",
    "\u015d\u015e\u0007\u0007\u0002\u0002\u015e;\u0003\u0002\u0002\u0002",
    "\u015f\u0169\u0005> \u0002\u0160\u0169\u0005@!\u0002\u0161\u0169\u0005",
    "B\"\u0002\u0162\u0169\u0005D#\u0002\u0163\u0169\u0005F$\u0002\u0164",
    "\u0169\u0005H%\u0002\u0165\u0169\u0005J&\u0002\u0166\u0169\u0005L\'",
    "\u0002\u0167\u0169\u0005N(\u0002\u0168\u015f\u0003\u0002\u0002\u0002",
    "\u0168\u0160\u0003\u0002\u0002\u0002\u0168\u0161\u0003\u0002\u0002\u0002",
    "\u0168\u0162\u0003\u0002\u0002\u0002\u0168\u0163\u0003\u0002\u0002\u0002",
    "\u0168\u0164\u0003\u0002\u0002\u0002\u0168\u0165\u0003\u0002\u0002\u0002",
    "\u0168\u0166\u0003\u0002\u0002\u0002\u0168\u0167\u0003\u0002\u0002\u0002",
    "\u0169=\u0003\u0002\u0002\u0002\u016a\u016b\u0007\u0006\u0002\u0002",
    "\u016b\u016e\u0005*\u0016\u0002\u016c\u016d\u0007>\u0002\u0002\u016d",
    "\u016f\u0005*\u0016\u0002\u016e\u016c\u0003\u0002\u0002\u0002\u016f",
    "\u0170\u0003\u0002\u0002\u0002\u0170\u016e\u0003\u0002\u0002\u0002\u0170",
    "\u0171\u0003\u0002\u0002\u0002\u0171\u0172\u0003\u0002\u0002\u0002\u0172",
    "\u0173\u0007\u0007\u0002\u0002\u0173\u017f\u0003\u0002\u0002\u0002\u0174",
    "\u0175\u0007\u0006\u0002\u0002\u0175\u0178\u0005*\u0016\u0002\u0176",
    "\u0177\u0007@\u0002\u0002\u0177\u0179\u0005*\u0016\u0002\u0178\u0176",
    "\u0003\u0002\u0002\u0002\u0179\u017a\u0003\u0002\u0002\u0002\u017a\u0178",
    "\u0003\u0002\u0002\u0002\u017a\u017b\u0003\u0002\u0002\u0002\u017b\u017c",
    "\u0003\u0002\u0002\u0002\u017c\u017d\u0007\u0007\u0002\u0002\u017d\u017f",
    "\u0003\u0002\u0002\u0002\u017e\u016a\u0003\u0002\u0002\u0002\u017e\u0174",
    "\u0003\u0002\u0002\u0002\u017f?\u0003\u0002\u0002\u0002\u0180\u0181",
    "\u0007\u0006\u0002\u0002\u0181\u0182\u0005*\u0016\u0002\u0182\u0183",
    "\t\u0006\u0002\u0002\u0183\u0184\u0005*\u0016\u0002\u0184\u0185\u0007",
    "\u0007\u0002\u0002\u0185\u018c\u0003\u0002\u0002\u0002\u0186\u0187\u0007",
    "\u0006\u0002\u0002\u0187\u0188\u0005*\u0016\u0002\u0188\u0189\u0007",
    "z\u0002\u0002\u0189\u018a\u0007\u0007\u0002\u0002\u018a\u018c\u0003",
    "\u0002\u0002\u0002\u018b\u0180\u0003\u0002\u0002\u0002\u018b\u0186\u0003",
    "\u0002\u0002\u0002\u018cA\u0003\u0002\u0002\u0002\u018d\u018e\u0007",
    "\u0006\u0002\u0002\u018e\u0192\t\u0007\u0002\u0002\u018f\u0191\u0005",
    "*\u0016\u0002\u0190\u018f\u0003\u0002\u0002\u0002\u0191\u0194\u0003",
    "\u0002\u0002\u0002\u0192\u0190\u0003\u0002\u0002\u0002\u0192\u0193\u0003",
    "\u0002\u0002\u0002\u0193\u0195\u0003\u0002\u0002\u0002\u0194\u0192\u0003",
    "\u0002\u0002\u0002\u0195\u0196\u0007\u0007\u0002\u0002\u0196C\u0003",
    "\u0002\u0002\u0002\u0197\u0198\u0007\u0006\u0002\u0002\u0198\u0199\t",
    "\b\u0002\u0002\u0199\u019a\u0005*\u0016\u0002\u019a\u019b\u0007\u0007",
    "\u0002\u0002\u019b\u019c\u0007\u0007\u0002\u0002\u019cE\u0003\u0002",
    "\u0002\u0002\u019d\u019e\u0007\u0006\u0002\u0002\u019e\u019f\u0007T",
    "\u0002\u0002\u019f\u01a0\u0007W\u0002\u0002\u01a0\u01a1\u0005*\u0016",
    "\u0002\u01a1\u01a2\u0007A\u0002\u0002\u01a2\u01a3\u0005*\u0016\u0002",
    "\u01a3\u01a4\u0007\u0007\u0002\u0002\u01a4G\u0003\u0002\u0002\u0002",
    "\u01a5\u01a6\u0007\u0006\u0002\u0002\u01a6\u01a7\u0007U\u0002\u0002",
    "\u01a7\u01a8\u0007W\u0002\u0002\u01a8\u01a9\u0005*\u0016\u0002\u01a9",
    "\u01aa\u0007A\u0002\u0002\u01aa\u01ab\u0005*\u0016\u0002\u01ab\u01ac",
    "\u0007\u0007\u0002\u0002\u01acI\u0003\u0002\u0002\u0002\u01ad\u01ae",
    "\u0007\u0006\u0002\u0002\u01ae\u01af\u0007V\u0002\u0002\u01af\u01b0",
    "\u0007W\u0002\u0002\u01b0\u01b1\u0005*\u0016\u0002\u01b1\u01b2\u0007",
    "A\u0002\u0002\u01b2\u01b3\u0005*\u0016\u0002\u01b3\u01b4\u0007\u0007",
    "\u0002\u0002\u01b4K\u0003\u0002\u0002\u0002\u01b5\u01b6\u0007\u0006",
    "\u0002\u0002\u01b6\u01b7\t\t\u0002\u0002\u01b7\u01b8\u0005*\u0016\u0002",
    "\u01b8\u01b9\u0007\u0007\u0002\u0002\u01b9M\u0003\u0002\u0002\u0002",
    "\u01ba\u01bb\u0007\u0006\u0002\u0002\u01bb\u01bc\u0007_\u0002\u0002",
    "\u01bc\u01bd\u0005*\u0016\u0002\u01bd\u01be\u0005*\u0016\u0002\u01be",
    "\u01bf\u0007\u0007\u0002\u0002\u01bfO\u0003\u0002\u0002\u0002\u01c0",
    "\u01c5\u0005T+\u0002\u01c1\u01c5\u0005R*\u0002\u01c2\u01c5\u0005V,\u0002",
    "\u01c3\u01c5\u0005X-\u0002\u01c4\u01c0\u0003\u0002\u0002\u0002\u01c4",
    "\u01c1\u0003\u0002\u0002\u0002\u01c4\u01c2\u0003\u0002\u0002\u0002\u01c4",
    "\u01c3\u0003\u0002\u0002\u0002\u01c5Q\u0003\u0002\u0002\u0002\u01c6",
    "\u01c7\u0007\u0006\u0002\u0002\u01c7\u01c8\u0007a\u0002\u0002\u01c8",
    "\u01c9\u0005*\u0016\u0002\u01c9\u01ca\u0007\u0007\u0002\u0002\u01ca",
    "S\u0003\u0002\u0002\u0002\u01cb\u01cc\u0007\u0006\u0002\u0002\u01cc",
    "\u01d0\u0007`\u0002\u0002\u01cd\u01cf\u0005*\u0016\u0002\u01ce\u01cd",
    "\u0003\u0002\u0002\u0002\u01cf\u01d2\u0003\u0002\u0002\u0002\u01d0\u01ce",
    "\u0003\u0002\u0002\u0002\u01d0\u01d1\u0003\u0002\u0002\u0002\u01d1\u01d3",
    "\u0003\u0002\u0002\u0002\u01d2\u01d0\u0003\u0002\u0002\u0002\u01d3\u01d4",
    "\u0007\u0007\u0002\u0002\u01d4U\u0003\u0002\u0002\u0002\u01d5\u01d6",
    "\u0007\u0006\u0002\u0002\u01d6\u01d7\u0007s\u0002\u0002\u01d7\u01d8",
    "\u0005*\u0016\u0002\u01d8\u01d9\u0007\u0007\u0002\u0002\u01d9W\u0003",
    "\u0002\u0002\u0002\u01da\u01db\u0007\u0006\u0002\u0002\u01db\u01dc\u0007",
    "m\u0002\u0002\u01dc\u01dd\u0005*\u0016\u0002\u01dd\u01de\u0007\u0007",
    "\u0002\u0002\u01deY\u0003\u0002\u0002\u0002\u01df\u01e8\u0007|\u0002",
    "\u0002\u01e0\u01e1\u0007\u0006\u0002\u0002\u01e1\u01e3\u0007\u001b\u0002",
    "\u0002\u01e2\u01e4\u0007\u001d\u0002\u0002\u01e3\u01e2\u0003\u0002\u0002",
    "\u0002\u01e3\u01e4\u0003\u0002\u0002\u0002\u01e4\u01e5\u0003\u0002\u0002",
    "\u0002\u01e5\u01e6\u0007|\u0002\u0002\u01e6\u01e8\u0007\u0007\u0002",
    "\u0002\u01e7\u01df\u0003\u0002\u0002\u0002\u01e7\u01e0\u0003\u0002\u0002",
    "\u0002\u01e8[\u0003\u0002\u0002\u0002\u01e9\u01ea\u0007\u0006\u0002",
    "\u0002\u01ea\u01ef\u0007\u001a\u0002\u0002\u01eb\u01f0\u0007|\u0002",
    "\u0002\u01ec\u01ed\u0007|\u0002\u0002\u01ed\u01ee\u0007\f\u0002\u0002",
    "\u01ee\u01f0\u0007|\u0002\u0002\u01ef\u01eb\u0003\u0002\u0002\u0002",
    "\u01ef\u01ec\u0003\u0002\u0002\u0002\u01f0\u01f7\u0003\u0002\u0002\u0002",
    "\u01f1\u01f3\u0005d3\u0002\u01f2\u01f1\u0003\u0002\u0002\u0002\u01f2",
    "\u01f3\u0003\u0002\u0002\u0002\u01f3\u01f4\u0003\u0002\u0002\u0002\u01f4",
    "\u01f6\u0005*\u0016\u0002\u01f5\u01f2\u0003\u0002\u0002\u0002\u01f6",
    "\u01f9\u0003\u0002\u0002\u0002\u01f7\u01f5\u0003\u0002\u0002\u0002\u01f7",
    "\u01f8\u0003\u0002\u0002\u0002\u01f8\u01fa\u0003\u0002\u0002\u0002\u01f9",
    "\u01f7\u0003\u0002\u0002\u0002\u01fa\u01fb\u0007\u0007\u0002\u0002\u01fb",
    "]\u0003\u0002\u0002\u0002\u01fc\u0208\u0007\u0006\u0002\u0002\u01fd",
    "\u01ff\u0007\u001e\u0002\u0002\u01fe\u0200\u0007\u001f\u0002\u0002\u01ff",
    "\u01fe\u0003\u0002\u0002\u0002\u01ff\u0200\u0003\u0002\u0002\u0002\u0200",
    "\u0201\u0003\u0002\u0002\u0002\u0201\u0203\u0007|\u0002\u0002\u0202",
    "\u0204\u0007\u0019\u0002\u0002\u0203\u0202\u0003\u0002\u0002\u0002\u0203",
    "\u0204\u0003\u0002\u0002\u0002\u0204\u0205\u0003\u0002\u0002\u0002\u0205",
    "\u0207\u0005*\u0016\u0002\u0206\u01fd\u0003\u0002\u0002\u0002\u0207",
    "\u020a\u0003\u0002\u0002\u0002\u0208\u0206\u0003\u0002\u0002\u0002\u0208",
    "\u0209\u0003\u0002\u0002\u0002\u0209\u020c\u0003\u0002\u0002\u0002\u020a",
    "\u0208\u0003\u0002\u0002\u0002\u020b\u020d\u0007 \u0002\u0002\u020c",
    "\u020b\u0003\u0002\u0002\u0002\u020c\u020d\u0003\u0002\u0002\u0002\u020d",
    "\u020e\u0003\u0002\u0002\u0002\u020e\u020f\u0005*\u0016\u0002\u020f",
    "\u0210\u0007\u0007\u0002\u0002\u0210_\u0003\u0002\u0002\u0002\u0211",
    "\u0217\u0005b2\u0002\u0212\u0213\u0007\u0006\u0002\u0002\u0213\u0214",
    "\u0005b2\u0002\u0214\u0215\u0007\u0007\u0002\u0002\u0215\u0217\u0003",
    "\u0002\u0002\u0002\u0216\u0211\u0003\u0002\u0002\u0002\u0216\u0212\u0003",
    "\u0002\u0002\u0002\u0217a\u0003\u0002\u0002\u0002\u0218\u0219\t\n\u0002",
    "\u0002\u0219c\u0003\u0002\u0002\u0002\u021a\u021b\u0007|\u0002\u0002",
    "\u021be\u0003\u0002\u0002\u00025iqvx\u0082\u008f\u0093\u009c\u00a0\u00a9",
    "\u00b2\u00b7\u00c1\u00c6\u00d3\u00d8\u00dd\u00e1\u00e5\u00e9\u00ef\u00f3",
    "\u00fa\u00ff\u0106\u010a\u010f\u0113\u0119\u011d\u0125\u0132\u0136\u0168",
    "\u0170\u017a\u017e\u018b\u0192\u01c4\u01d0\u01e3\u01e7\u01ef\u01f2\u01f7",
    "\u01ff\u0203\u0208\u020c\u0216"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'{'", "'}'", "'('", "')'", "'['", "']'", 
                     "','", "'==='", "'.'", "'<-'", "':'", "'true'", "'false'", 
                     "'when'", "'if'", "'then'", "'else'", "'else if'", 
                     "'for each'", "'do'", "'result'", "'to'", "'call'", 
                     "'get'", "'set'", "'global'", "'initialize'", "'local'", 
                     "'in'", "'by'", "'from'", "'while'", "'test'", "'evaluate but ignore'", 
                     "'open another screen'", "'open another screen with start value'", 
                     "'close screen'", "'close screen with value'", "'close screen with plain text'", 
                     "'close application'", "'screenName'", "'startValue'", 
                     "'text'", "'break'", "'get start value'", "'get plain start text'", 
                     "'not'", "'and'", "'or'", "'xor'", "'<'", "'>'", "'<='", 
                     "'>='", "'='", "'!='", null, null, "'+'", "'-'", "'*'", 
                     "'/'", "'^'", "'decimal'", "'binary'", "'octal'", "'hexadecimal'", 
                     "'bitwise'", "'square root'", "'absolute'", "'neg'", 
                     "'log'", "'e^'", "'round'", "'ceiling'", "'floor'", 
                     "'random integer'", "'random fraction'", "'min'", "'max'", 
                     "'modulo'", "'remainder'", "'quotient'", "'of'", "'convert'", 
                     "'sin'", "'cos'", "'tan'", "'asin'", "'acos'", "'atan'", 
                     "'atan2'", "'join'", "'length'", "'is empty'", "'compare texts'", 
                     "'trim'", "'upcase'", "'downcase'", "'starts at'", 
                     "'contains'", "'split'", "'split at first'", "'split at any'", 
                     "'split at first of any'", "'split at spaces'", "'segment'", 
                     "'replace all'", "'replacement'", "'Obfuscated Text'", 
                     "'is a string?'", "'reverse'", "'mappings'", "'in text'", 
                     "'preferring'", "'longest string first'", "'dictionary'" ];

var symbolicNames = [ null, "WS", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
                      "LSQR", "RSQR", "COMMA", "DIVIDER", "DOT", "ASSIGN", 
                      "COLON", "TRUE", "FALSE", "WHEN", "IF", "THEN", "ELSE", 
                      "ELSE_IF", "FOREACH", "DO", "RESULT", "TO", "CALL", 
                      "GET", "SET", "GLOBAL", "INITIALIZE", "LOCAL", "IN", 
                      "BY", "FROM", "WHILE", "TEST", "EVAL_BUT_IGNORE_RESULT", 
                      "OPEN_ANOTHER_SCREEN", "OPEN_ANOTHER_SCREEN_WITH_START_VALUE", 
                      "CLOSE_SCREEN", "CLOSE_SCREEN_WITH_VALUE", "CLOSE_SCREEN_WITH_PLAIN_TEXT", 
                      "CLOSE_APPLICATION", "SCREEN_NAME", "START_VALUE", 
                      "TEXT", "BREAK", "GET_START_VALUE", "GET_PLAIN_START_TEXT", 
                      "NOT", "AND", "OR", "XOR", "LT", "GT", "LE", "GE", 
                      "EQ", "NEQ", "LOGIC_EQ", "LOGIC_NOT_EQ", "PLUS", "MINUS", 
                      "MUL", "DIV", "POW", "DECIMAL", "BINARY", "OCTAL", 
                      "HEXADECIMAL", "BITWISE", "SQRT", "ABS", "NEG", "LOG", 
                      "EULER", "ROUND", "CEILING", "FLOOR", "RANDOM_INTEGER", 
                      "RANDOM_FRACTION", "MIN", "MAX", "MODULO", "REMAINDER", 
                      "QUOTIENT", "OF", "CONVERT", "SIN", "COS", "TAN", 
                      "ASIN", "ACOS", "ATAN", "ATAN2", "JOIN", "LENGTH", 
                      "IS_EMPTY", "COMPARE_TEXTS", "TRIM", "UPCASE", "DOWNCASE", 
                      "STARTS_AT", "CONTAINS", "SPLIT", "SPLIT_AT_FIRST", 
                      "SPLIT_AT_ANY", "SPLIT_AT_FIRST_OF_ANY", "SPLIT_AT_SPACES", 
                      "SEGMENT", "REPLACE_ALL", "REPLACEMENT", "OBFUSCATED_TEXT", 
                      "IS_A_STR", "REVERSE", "MAPPINGS", "IN_TEXT", "PREFERRING", 
                      "LONGEST_STRING_FIRST", "DICTIONARY", "NUMBER", "NEG_NUM", 
                      "COMPONENT_PROPERTY", "ID", "STRING" ];

var ruleNames =  [ "program", "test_program", "test_blocks", "decl_block", 
                   "decl", "global_decl", "procedure_do", "procedure_result", 
                   "event_handler", "suite", "stat_block", "stat", "control_stat", 
                   "if_stat", "for_each_from_to", "while_stat", "call_procedure_stat", 
                   "var_stat", "local_var_decl_stat", "setter", "expr_block", 
                   "expr", "control_expr", "if_expr", "do_expr", "logic_expr", 
                   "not_expr", "compare_eq_expr", "compare_math_expr", "math_expr", 
                   "mutable_op", "immutable_op", "min_max", "unary_op", 
                   "mod", "remainder", "quotient", "trig", "atan2", "str_expr", 
                   "str_length", "str_join", "str_reverse", "str_split_at_spaces", 
                   "getter", "call_procedure_expr", "local_var_decl_expr", 
                   "atom", "atom_elements", "label" ];

function VenbraceNoCodeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

VenbraceNoCodeParser.prototype = Object.create(antlr4.Parser.prototype);
VenbraceNoCodeParser.prototype.constructor = VenbraceNoCodeParser;

Object.defineProperty(VenbraceNoCodeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

VenbraceNoCodeParser.EOF = antlr4.Token.EOF;
VenbraceNoCodeParser.WS = 1;
VenbraceNoCodeParser.LCURLY = 2;
VenbraceNoCodeParser.RCURLY = 3;
VenbraceNoCodeParser.LPAREN = 4;
VenbraceNoCodeParser.RPAREN = 5;
VenbraceNoCodeParser.LSQR = 6;
VenbraceNoCodeParser.RSQR = 7;
VenbraceNoCodeParser.COMMA = 8;
VenbraceNoCodeParser.DIVIDER = 9;
VenbraceNoCodeParser.DOT = 10;
VenbraceNoCodeParser.ASSIGN = 11;
VenbraceNoCodeParser.COLON = 12;
VenbraceNoCodeParser.TRUE = 13;
VenbraceNoCodeParser.FALSE = 14;
VenbraceNoCodeParser.WHEN = 15;
VenbraceNoCodeParser.IF = 16;
VenbraceNoCodeParser.THEN = 17;
VenbraceNoCodeParser.ELSE = 18;
VenbraceNoCodeParser.ELSE_IF = 19;
VenbraceNoCodeParser.FOREACH = 20;
VenbraceNoCodeParser.DO = 21;
VenbraceNoCodeParser.RESULT = 22;
VenbraceNoCodeParser.TO = 23;
VenbraceNoCodeParser.CALL = 24;
VenbraceNoCodeParser.GET = 25;
VenbraceNoCodeParser.SET = 26;
VenbraceNoCodeParser.GLOBAL = 27;
VenbraceNoCodeParser.INITIALIZE = 28;
VenbraceNoCodeParser.LOCAL = 29;
VenbraceNoCodeParser.IN = 30;
VenbraceNoCodeParser.BY = 31;
VenbraceNoCodeParser.FROM = 32;
VenbraceNoCodeParser.WHILE = 33;
VenbraceNoCodeParser.TEST = 34;
VenbraceNoCodeParser.EVAL_BUT_IGNORE_RESULT = 35;
VenbraceNoCodeParser.OPEN_ANOTHER_SCREEN = 36;
VenbraceNoCodeParser.OPEN_ANOTHER_SCREEN_WITH_START_VALUE = 37;
VenbraceNoCodeParser.CLOSE_SCREEN = 38;
VenbraceNoCodeParser.CLOSE_SCREEN_WITH_VALUE = 39;
VenbraceNoCodeParser.CLOSE_SCREEN_WITH_PLAIN_TEXT = 40;
VenbraceNoCodeParser.CLOSE_APPLICATION = 41;
VenbraceNoCodeParser.SCREEN_NAME = 42;
VenbraceNoCodeParser.START_VALUE = 43;
VenbraceNoCodeParser.TEXT = 44;
VenbraceNoCodeParser.BREAK = 45;
VenbraceNoCodeParser.GET_START_VALUE = 46;
VenbraceNoCodeParser.GET_PLAIN_START_TEXT = 47;
VenbraceNoCodeParser.NOT = 48;
VenbraceNoCodeParser.AND = 49;
VenbraceNoCodeParser.OR = 50;
VenbraceNoCodeParser.XOR = 51;
VenbraceNoCodeParser.LT = 52;
VenbraceNoCodeParser.GT = 53;
VenbraceNoCodeParser.LE = 54;
VenbraceNoCodeParser.GE = 55;
VenbraceNoCodeParser.EQ = 56;
VenbraceNoCodeParser.NEQ = 57;
VenbraceNoCodeParser.LOGIC_EQ = 58;
VenbraceNoCodeParser.LOGIC_NOT_EQ = 59;
VenbraceNoCodeParser.PLUS = 60;
VenbraceNoCodeParser.MINUS = 61;
VenbraceNoCodeParser.MUL = 62;
VenbraceNoCodeParser.DIV = 63;
VenbraceNoCodeParser.POW = 64;
VenbraceNoCodeParser.DECIMAL = 65;
VenbraceNoCodeParser.BINARY = 66;
VenbraceNoCodeParser.OCTAL = 67;
VenbraceNoCodeParser.HEXADECIMAL = 68;
VenbraceNoCodeParser.BITWISE = 69;
VenbraceNoCodeParser.SQRT = 70;
VenbraceNoCodeParser.ABS = 71;
VenbraceNoCodeParser.NEG = 72;
VenbraceNoCodeParser.LOG = 73;
VenbraceNoCodeParser.EULER = 74;
VenbraceNoCodeParser.ROUND = 75;
VenbraceNoCodeParser.CEILING = 76;
VenbraceNoCodeParser.FLOOR = 77;
VenbraceNoCodeParser.RANDOM_INTEGER = 78;
VenbraceNoCodeParser.RANDOM_FRACTION = 79;
VenbraceNoCodeParser.MIN = 80;
VenbraceNoCodeParser.MAX = 81;
VenbraceNoCodeParser.MODULO = 82;
VenbraceNoCodeParser.REMAINDER = 83;
VenbraceNoCodeParser.QUOTIENT = 84;
VenbraceNoCodeParser.OF = 85;
VenbraceNoCodeParser.CONVERT = 86;
VenbraceNoCodeParser.SIN = 87;
VenbraceNoCodeParser.COS = 88;
VenbraceNoCodeParser.TAN = 89;
VenbraceNoCodeParser.ASIN = 90;
VenbraceNoCodeParser.ACOS = 91;
VenbraceNoCodeParser.ATAN = 92;
VenbraceNoCodeParser.ATAN2 = 93;
VenbraceNoCodeParser.JOIN = 94;
VenbraceNoCodeParser.LENGTH = 95;
VenbraceNoCodeParser.IS_EMPTY = 96;
VenbraceNoCodeParser.COMPARE_TEXTS = 97;
VenbraceNoCodeParser.TRIM = 98;
VenbraceNoCodeParser.UPCASE = 99;
VenbraceNoCodeParser.DOWNCASE = 100;
VenbraceNoCodeParser.STARTS_AT = 101;
VenbraceNoCodeParser.CONTAINS = 102;
VenbraceNoCodeParser.SPLIT = 103;
VenbraceNoCodeParser.SPLIT_AT_FIRST = 104;
VenbraceNoCodeParser.SPLIT_AT_ANY = 105;
VenbraceNoCodeParser.SPLIT_AT_FIRST_OF_ANY = 106;
VenbraceNoCodeParser.SPLIT_AT_SPACES = 107;
VenbraceNoCodeParser.SEGMENT = 108;
VenbraceNoCodeParser.REPLACE_ALL = 109;
VenbraceNoCodeParser.REPLACEMENT = 110;
VenbraceNoCodeParser.OBFUSCATED_TEXT = 111;
VenbraceNoCodeParser.IS_A_STR = 112;
VenbraceNoCodeParser.REVERSE = 113;
VenbraceNoCodeParser.MAPPINGS = 114;
VenbraceNoCodeParser.IN_TEXT = 115;
VenbraceNoCodeParser.PREFERRING = 116;
VenbraceNoCodeParser.LONGEST_STRING_FIRST = 117;
VenbraceNoCodeParser.DICTIONARY = 118;
VenbraceNoCodeParser.NUMBER = 119;
VenbraceNoCodeParser.NEG_NUM = 120;
VenbraceNoCodeParser.COMPONENT_PROPERTY = 121;
VenbraceNoCodeParser.ID = 122;
VenbraceNoCodeParser.STRING = 123;

VenbraceNoCodeParser.RULE_program = 0;
VenbraceNoCodeParser.RULE_test_program = 1;
VenbraceNoCodeParser.RULE_test_blocks = 2;
VenbraceNoCodeParser.RULE_decl_block = 3;
VenbraceNoCodeParser.RULE_decl = 4;
VenbraceNoCodeParser.RULE_global_decl = 5;
VenbraceNoCodeParser.RULE_procedure_do = 6;
VenbraceNoCodeParser.RULE_procedure_result = 7;
VenbraceNoCodeParser.RULE_event_handler = 8;
VenbraceNoCodeParser.RULE_suite = 9;
VenbraceNoCodeParser.RULE_stat_block = 10;
VenbraceNoCodeParser.RULE_stat = 11;
VenbraceNoCodeParser.RULE_control_stat = 12;
VenbraceNoCodeParser.RULE_if_stat = 13;
VenbraceNoCodeParser.RULE_for_each_from_to = 14;
VenbraceNoCodeParser.RULE_while_stat = 15;
VenbraceNoCodeParser.RULE_call_procedure_stat = 16;
VenbraceNoCodeParser.RULE_var_stat = 17;
VenbraceNoCodeParser.RULE_local_var_decl_stat = 18;
VenbraceNoCodeParser.RULE_setter = 19;
VenbraceNoCodeParser.RULE_expr_block = 20;
VenbraceNoCodeParser.RULE_expr = 21;
VenbraceNoCodeParser.RULE_control_expr = 22;
VenbraceNoCodeParser.RULE_if_expr = 23;
VenbraceNoCodeParser.RULE_do_expr = 24;
VenbraceNoCodeParser.RULE_logic_expr = 25;
VenbraceNoCodeParser.RULE_not_expr = 26;
VenbraceNoCodeParser.RULE_compare_eq_expr = 27;
VenbraceNoCodeParser.RULE_compare_math_expr = 28;
VenbraceNoCodeParser.RULE_math_expr = 29;
VenbraceNoCodeParser.RULE_mutable_op = 30;
VenbraceNoCodeParser.RULE_immutable_op = 31;
VenbraceNoCodeParser.RULE_min_max = 32;
VenbraceNoCodeParser.RULE_unary_op = 33;
VenbraceNoCodeParser.RULE_mod = 34;
VenbraceNoCodeParser.RULE_remainder = 35;
VenbraceNoCodeParser.RULE_quotient = 36;
VenbraceNoCodeParser.RULE_trig = 37;
VenbraceNoCodeParser.RULE_atan2 = 38;
VenbraceNoCodeParser.RULE_str_expr = 39;
VenbraceNoCodeParser.RULE_str_length = 40;
VenbraceNoCodeParser.RULE_str_join = 41;
VenbraceNoCodeParser.RULE_str_reverse = 42;
VenbraceNoCodeParser.RULE_str_split_at_spaces = 43;
VenbraceNoCodeParser.RULE_getter = 44;
VenbraceNoCodeParser.RULE_call_procedure_expr = 45;
VenbraceNoCodeParser.RULE_local_var_decl_expr = 46;
VenbraceNoCodeParser.RULE_atom = 47;
VenbraceNoCodeParser.RULE_atom_elements = 48;
VenbraceNoCodeParser.RULE_label = 49;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(VenbraceNoCodeParser.EOF, 0);
};

ProgramContext.prototype.decl_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Decl_blockContext);
    } else {
        return this.getTypedRuleContext(Decl_blockContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.ProgramContext = ProgramContext;

VenbraceNoCodeParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, VenbraceNoCodeParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VenbraceNoCodeParser.LSQR) {
            this.state = 100;
            this.decl_block();
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 106;
        this.match(VenbraceNoCodeParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Test_programContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_test_program;
    return this;
}

Test_programContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Test_programContext.prototype.constructor = Test_programContext;

Test_programContext.prototype.decl_block = function() {
    return this.getTypedRuleContext(Decl_blockContext,0);
};

Test_programContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

Test_programContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Test_programContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterTest_program(this);
	}
};

Test_programContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitTest_program(this);
	}
};

Test_programContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitTest_program(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Test_programContext = Test_programContext;

VenbraceNoCodeParser.prototype.test_program = function() {

    var localctx = new Test_programContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, VenbraceNoCodeParser.RULE_test_program);
    try {
        this.state = 111;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceNoCodeParser.LSQR:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.decl_block();
            break;
        case VenbraceNoCodeParser.LCURLY:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.stat_block();
            break;
        case VenbraceNoCodeParser.LPAREN:
        case VenbraceNoCodeParser.TRUE:
        case VenbraceNoCodeParser.FALSE:
        case VenbraceNoCodeParser.NUMBER:
        case VenbraceNoCodeParser.NEG_NUM:
        case VenbraceNoCodeParser.COMPONENT_PROPERTY:
        case VenbraceNoCodeParser.ID:
        case VenbraceNoCodeParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
            this.expr_block();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Test_blocksContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_test_blocks;
    return this;
}

Test_blocksContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Test_blocksContext.prototype.constructor = Test_blocksContext;

Test_blocksContext.prototype.decl_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Decl_blockContext);
    } else {
        return this.getTypedRuleContext(Decl_blockContext,i);
    }
};

Test_blocksContext.prototype.stat_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stat_blockContext);
    } else {
        return this.getTypedRuleContext(Stat_blockContext,i);
    }
};

Test_blocksContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Test_blocksContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterTest_blocks(this);
	}
};

Test_blocksContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitTest_blocks(this);
	}
};

Test_blocksContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitTest_blocks(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Test_blocksContext = Test_blocksContext;

VenbraceNoCodeParser.prototype.test_blocks = function() {

    var localctx = new Test_blocksContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, VenbraceNoCodeParser.RULE_test_blocks);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 116;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case VenbraceNoCodeParser.LSQR:
                this.state = 113;
                this.decl_block();
                break;
            case VenbraceNoCodeParser.LCURLY:
                this.state = 114;
                this.stat_block();
                break;
            case VenbraceNoCodeParser.LPAREN:
            case VenbraceNoCodeParser.TRUE:
            case VenbraceNoCodeParser.FALSE:
            case VenbraceNoCodeParser.NUMBER:
            case VenbraceNoCodeParser.NEG_NUM:
            case VenbraceNoCodeParser.COMPONENT_PROPERTY:
            case VenbraceNoCodeParser.ID:
            case VenbraceNoCodeParser.STRING:
                this.state = 115;
                this.expr_block();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 118; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceNoCodeParser.LCURLY) | (1 << VenbraceNoCodeParser.LPAREN) | (1 << VenbraceNoCodeParser.LSQR) | (1 << VenbraceNoCodeParser.TRUE) | (1 << VenbraceNoCodeParser.FALSE))) !== 0) || ((((_la - 119)) & ~0x1f) == 0 && ((1 << (_la - 119)) & ((1 << (VenbraceNoCodeParser.NUMBER - 119)) | (1 << (VenbraceNoCodeParser.NEG_NUM - 119)) | (1 << (VenbraceNoCodeParser.COMPONENT_PROPERTY - 119)) | (1 << (VenbraceNoCodeParser.ID - 119)) | (1 << (VenbraceNoCodeParser.STRING - 119)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Decl_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_decl_block;
    return this;
}

Decl_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Decl_blockContext.prototype.constructor = Decl_blockContext;

Decl_blockContext.prototype.LSQR = function() {
    return this.getToken(VenbraceNoCodeParser.LSQR, 0);
};

Decl_blockContext.prototype.decl = function() {
    return this.getTypedRuleContext(DeclContext,0);
};

Decl_blockContext.prototype.RSQR = function() {
    return this.getToken(VenbraceNoCodeParser.RSQR, 0);
};

Decl_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterDecl_block(this);
	}
};

Decl_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitDecl_block(this);
	}
};

Decl_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitDecl_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Decl_blockContext = Decl_blockContext;

VenbraceNoCodeParser.prototype.decl_block = function() {

    var localctx = new Decl_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, VenbraceNoCodeParser.RULE_decl_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(VenbraceNoCodeParser.LSQR);
        this.state = 121;
        this.decl();
        this.state = 122;
        this.match(VenbraceNoCodeParser.RSQR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_decl;
    return this;
}

DeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclContext.prototype.constructor = DeclContext;

DeclContext.prototype.global_decl = function() {
    return this.getTypedRuleContext(Global_declContext,0);
};

DeclContext.prototype.procedure_do = function() {
    return this.getTypedRuleContext(Procedure_doContext,0);
};

DeclContext.prototype.procedure_result = function() {
    return this.getTypedRuleContext(Procedure_resultContext,0);
};

DeclContext.prototype.event_handler = function() {
    return this.getTypedRuleContext(Event_handlerContext,0);
};

DeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterDecl(this);
	}
};

DeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitDecl(this);
	}
};

DeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.DeclContext = DeclContext;

VenbraceNoCodeParser.prototype.decl = function() {

    var localctx = new DeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, VenbraceNoCodeParser.RULE_decl);
    try {
        this.state = 128;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.global_decl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.procedure_do();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 126;
            this.procedure_result();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 127;
            this.event_handler();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Global_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_global_decl;
    return this;
}

Global_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Global_declContext.prototype.constructor = Global_declContext;

Global_declContext.prototype.INITIALIZE = function() {
    return this.getToken(VenbraceNoCodeParser.INITIALIZE, 0);
};

Global_declContext.prototype.GLOBAL = function() {
    return this.getToken(VenbraceNoCodeParser.GLOBAL, 0);
};

Global_declContext.prototype.ID = function() {
    return this.getToken(VenbraceNoCodeParser.ID, 0);
};

Global_declContext.prototype.TO = function() {
    return this.getToken(VenbraceNoCodeParser.TO, 0);
};

Global_declContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Global_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterGlobal_decl(this);
	}
};

Global_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitGlobal_decl(this);
	}
};

Global_declContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitGlobal_decl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Global_declContext = Global_declContext;

VenbraceNoCodeParser.prototype.global_decl = function() {

    var localctx = new Global_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, VenbraceNoCodeParser.RULE_global_decl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(VenbraceNoCodeParser.INITIALIZE);
        this.state = 131;
        this.match(VenbraceNoCodeParser.GLOBAL);
        this.state = 132;
        this.match(VenbraceNoCodeParser.ID);
        this.state = 133;
        this.match(VenbraceNoCodeParser.TO);
        this.state = 134;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Procedure_doContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_procedure_do;
    this.proc_name = null; // Token
    this.arg_name = null; // Token
    return this;
}

Procedure_doContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Procedure_doContext.prototype.constructor = Procedure_doContext;

Procedure_doContext.prototype.TO = function() {
    return this.getToken(VenbraceNoCodeParser.TO, 0);
};

Procedure_doContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

Procedure_doContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.ID);
    } else {
        return this.getToken(VenbraceNoCodeParser.ID, i);
    }
};


Procedure_doContext.prototype.DO = function() {
    return this.getToken(VenbraceNoCodeParser.DO, 0);
};

Procedure_doContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterProcedure_do(this);
	}
};

Procedure_doContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitProcedure_do(this);
	}
};

Procedure_doContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitProcedure_do(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Procedure_doContext = Procedure_doContext;

VenbraceNoCodeParser.prototype.procedure_do = function() {

    var localctx = new Procedure_doContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, VenbraceNoCodeParser.RULE_procedure_do);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(VenbraceNoCodeParser.TO);
        this.state = 137;
        localctx.proc_name = this.match(VenbraceNoCodeParser.ID);
        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VenbraceNoCodeParser.ID) {
            this.state = 138;
            localctx.arg_name = this.match(VenbraceNoCodeParser.ID);
            this.state = 143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.DO) {
            this.state = 144;
            this.match(VenbraceNoCodeParser.DO);
        }

        this.state = 147;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Procedure_resultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_procedure_result;
    this.proc_name = null; // Token
    this.arg_name = null; // Token
    return this;
}

Procedure_resultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Procedure_resultContext.prototype.constructor = Procedure_resultContext;

Procedure_resultContext.prototype.TO = function() {
    return this.getToken(VenbraceNoCodeParser.TO, 0);
};

Procedure_resultContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Procedure_resultContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.ID);
    } else {
        return this.getToken(VenbraceNoCodeParser.ID, i);
    }
};


Procedure_resultContext.prototype.RESULT = function() {
    return this.getToken(VenbraceNoCodeParser.RESULT, 0);
};

Procedure_resultContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterProcedure_result(this);
	}
};

Procedure_resultContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitProcedure_result(this);
	}
};

Procedure_resultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitProcedure_result(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Procedure_resultContext = Procedure_resultContext;

VenbraceNoCodeParser.prototype.procedure_result = function() {

    var localctx = new Procedure_resultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, VenbraceNoCodeParser.RULE_procedure_result);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(VenbraceNoCodeParser.TO);
        this.state = 150;
        localctx.proc_name = this.match(VenbraceNoCodeParser.ID);
        this.state = 154;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 151;
                localctx.arg_name = this.match(VenbraceNoCodeParser.ID); 
            }
            this.state = 156;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.RESULT) {
            this.state = 157;
            this.match(VenbraceNoCodeParser.RESULT);
        }

        this.state = 160;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Event_handlerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_event_handler;
    this.param_name = null; // Token
    return this;
}

Event_handlerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_handlerContext.prototype.constructor = Event_handlerContext;

Event_handlerContext.prototype.WHEN = function() {
    return this.getToken(VenbraceNoCodeParser.WHEN, 0);
};

Event_handlerContext.prototype.COMPONENT_PROPERTY = function() {
    return this.getToken(VenbraceNoCodeParser.COMPONENT_PROPERTY, 0);
};

Event_handlerContext.prototype.DO = function() {
    return this.getToken(VenbraceNoCodeParser.DO, 0);
};

Event_handlerContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

Event_handlerContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.ID);
    } else {
        return this.getToken(VenbraceNoCodeParser.ID, i);
    }
};


Event_handlerContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterEvent_handler(this);
	}
};

Event_handlerContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitEvent_handler(this);
	}
};

Event_handlerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitEvent_handler(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Event_handlerContext = Event_handlerContext;

VenbraceNoCodeParser.prototype.event_handler = function() {

    var localctx = new Event_handlerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, VenbraceNoCodeParser.RULE_event_handler);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(VenbraceNoCodeParser.WHEN);
        this.state = 163;
        this.match(VenbraceNoCodeParser.COMPONENT_PROPERTY);
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VenbraceNoCodeParser.ID) {
            this.state = 164;
            localctx.param_name = this.match(VenbraceNoCodeParser.ID);
            this.state = 169;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 170;
        this.match(VenbraceNoCodeParser.DO);
        this.state = 171;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SuiteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_suite;
    return this;
}

SuiteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuiteContext.prototype.constructor = SuiteContext;

SuiteContext.prototype.stat_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Stat_blockContext);
    } else {
        return this.getTypedRuleContext(Stat_blockContext,i);
    }
};

SuiteContext.prototype.LCURLY = function() {
    return this.getToken(VenbraceNoCodeParser.LCURLY, 0);
};

SuiteContext.prototype.RCURLY = function() {
    return this.getToken(VenbraceNoCodeParser.RCURLY, 0);
};

SuiteContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterSuite(this);
	}
};

SuiteContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitSuite(this);
	}
};

SuiteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitSuite(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.SuiteContext = SuiteContext;

VenbraceNoCodeParser.prototype.suite = function() {

    var localctx = new SuiteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, VenbraceNoCodeParser.RULE_suite);
    var _la = 0; // Token type
    try {
        this.state = 181;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===VenbraceNoCodeParser.LCURLY) {
                this.state = 173;
                this.stat_block();
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 179;
            this.match(VenbraceNoCodeParser.LCURLY);
            this.state = 180;
            this.match(VenbraceNoCodeParser.RCURLY);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Stat_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_stat_block;
    return this;
}

Stat_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stat_blockContext.prototype.constructor = Stat_blockContext;

Stat_blockContext.prototype.LCURLY = function() {
    return this.getToken(VenbraceNoCodeParser.LCURLY, 0);
};

Stat_blockContext.prototype.stat = function() {
    return this.getTypedRuleContext(StatContext,0);
};

Stat_blockContext.prototype.RCURLY = function() {
    return this.getToken(VenbraceNoCodeParser.RCURLY, 0);
};

Stat_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterStat_block(this);
	}
};

Stat_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitStat_block(this);
	}
};

Stat_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitStat_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Stat_blockContext = Stat_blockContext;

VenbraceNoCodeParser.prototype.stat_block = function() {

    var localctx = new Stat_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, VenbraceNoCodeParser.RULE_stat_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(VenbraceNoCodeParser.LCURLY);
        this.state = 184;
        this.stat();
        this.state = 185;
        this.match(VenbraceNoCodeParser.RCURLY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.control_stat = function() {
    return this.getTypedRuleContext(Control_statContext,0);
};

StatContext.prototype.call_procedure_stat = function() {
    return this.getTypedRuleContext(Call_procedure_statContext,0);
};

StatContext.prototype.var_stat = function() {
    return this.getTypedRuleContext(Var_statContext,0);
};

StatContext.prototype.local_var_decl_stat = function() {
    return this.getTypedRuleContext(Local_var_decl_statContext,0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitStat(this);
	}
};

StatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.StatContext = StatContext;

VenbraceNoCodeParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, VenbraceNoCodeParser.RULE_stat);
    try {
        this.state = 191;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceNoCodeParser.IF:
        case VenbraceNoCodeParser.FOREACH:
        case VenbraceNoCodeParser.WHILE:
            this.enterOuterAlt(localctx, 1);
            this.state = 187;
            this.control_stat();
            break;
        case VenbraceNoCodeParser.CALL:
            this.enterOuterAlt(localctx, 2);
            this.state = 188;
            this.call_procedure_stat();
            break;
        case VenbraceNoCodeParser.SET:
            this.enterOuterAlt(localctx, 3);
            this.state = 189;
            this.var_stat();
            break;
        case VenbraceNoCodeParser.LCURLY:
        case VenbraceNoCodeParser.RCURLY:
        case VenbraceNoCodeParser.INITIALIZE:
        case VenbraceNoCodeParser.IN:
            this.enterOuterAlt(localctx, 4);
            this.state = 190;
            this.local_var_decl_stat();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Control_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_control_stat;
    return this;
}

Control_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Control_statContext.prototype.constructor = Control_statContext;

Control_statContext.prototype.if_stat = function() {
    return this.getTypedRuleContext(If_statContext,0);
};

Control_statContext.prototype.for_each_from_to = function() {
    return this.getTypedRuleContext(For_each_from_toContext,0);
};

Control_statContext.prototype.while_stat = function() {
    return this.getTypedRuleContext(While_statContext,0);
};

Control_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterControl_stat(this);
	}
};

Control_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitControl_stat(this);
	}
};

Control_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitControl_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Control_statContext = Control_statContext;

VenbraceNoCodeParser.prototype.control_stat = function() {

    var localctx = new Control_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, VenbraceNoCodeParser.RULE_control_stat);
    try {
        this.state = 196;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceNoCodeParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.if_stat();
            break;
        case VenbraceNoCodeParser.FOREACH:
            this.enterOuterAlt(localctx, 2);
            this.state = 194;
            this.for_each_from_to();
            break;
        case VenbraceNoCodeParser.WHILE:
            this.enterOuterAlt(localctx, 3);
            this.state = 195;
            this.while_stat();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_if_stat;
    this.e1 = null; // Expr_blockContext
    this.s1 = null; // SuiteContext
    this.e2 = null; // Expr_blockContext
    this.s2 = null; // SuiteContext
    this.s3 = null; // SuiteContext
    return this;
}

If_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_statContext.prototype.constructor = If_statContext;

If_statContext.prototype.IF = function() {
    return this.getToken(VenbraceNoCodeParser.IF, 0);
};

If_statContext.prototype.THEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.THEN);
    } else {
        return this.getToken(VenbraceNoCodeParser.THEN, i);
    }
};


If_statContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

If_statContext.prototype.suite = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SuiteContext);
    } else {
        return this.getTypedRuleContext(SuiteContext,i);
    }
};

If_statContext.prototype.ELSE_IF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.ELSE_IF);
    } else {
        return this.getToken(VenbraceNoCodeParser.ELSE_IF, i);
    }
};


If_statContext.prototype.ELSE = function() {
    return this.getToken(VenbraceNoCodeParser.ELSE, 0);
};

If_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterIf_stat(this);
	}
};

If_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitIf_stat(this);
	}
};

If_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitIf_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.If_statContext = If_statContext;

VenbraceNoCodeParser.prototype.if_stat = function() {

    var localctx = new If_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, VenbraceNoCodeParser.RULE_if_stat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(VenbraceNoCodeParser.IF);
        this.state = 199;
        localctx.e1 = this.expr_block();
        this.state = 200;
        this.match(VenbraceNoCodeParser.THEN);
        this.state = 201;
        localctx.s1 = this.suite();
        this.state = 209;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VenbraceNoCodeParser.ELSE_IF) {
            this.state = 202;
            this.match(VenbraceNoCodeParser.ELSE_IF);
            this.state = 203;
            localctx.e2 = this.expr_block();
            this.state = 204;
            this.match(VenbraceNoCodeParser.THEN);
            this.state = 205;
            localctx.s2 = this.suite();
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.ELSE) {
            this.state = 212;
            this.match(VenbraceNoCodeParser.ELSE);
            this.state = 213;
            localctx.s3 = this.suite();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function For_each_from_toContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_for_each_from_to;
    this.from = null; // Expr_blockContext
    this.to = null; // Expr_blockContext
    this.by = null; // Expr_blockContext
    return this;
}

For_each_from_toContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_each_from_toContext.prototype.constructor = For_each_from_toContext;

For_each_from_toContext.prototype.FOREACH = function() {
    return this.getToken(VenbraceNoCodeParser.FOREACH, 0);
};

For_each_from_toContext.prototype.ID = function() {
    return this.getToken(VenbraceNoCodeParser.ID, 0);
};

For_each_from_toContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

For_each_from_toContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

For_each_from_toContext.prototype.FROM = function() {
    return this.getToken(VenbraceNoCodeParser.FROM, 0);
};

For_each_from_toContext.prototype.TO = function() {
    return this.getToken(VenbraceNoCodeParser.TO, 0);
};

For_each_from_toContext.prototype.BY = function() {
    return this.getToken(VenbraceNoCodeParser.BY, 0);
};

For_each_from_toContext.prototype.DO = function() {
    return this.getToken(VenbraceNoCodeParser.DO, 0);
};

For_each_from_toContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterFor_each_from_to(this);
	}
};

For_each_from_toContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitFor_each_from_to(this);
	}
};

For_each_from_toContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitFor_each_from_to(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.For_each_from_toContext = For_each_from_toContext;

VenbraceNoCodeParser.prototype.for_each_from_to = function() {

    var localctx = new For_each_from_toContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, VenbraceNoCodeParser.RULE_for_each_from_to);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(VenbraceNoCodeParser.FOREACH);
        this.state = 217;
        this.match(VenbraceNoCodeParser.ID);
        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.FROM) {
            this.state = 218;
            this.match(VenbraceNoCodeParser.FROM);
        }

        this.state = 221;
        localctx.from = this.expr_block();
        this.state = 223;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.TO) {
            this.state = 222;
            this.match(VenbraceNoCodeParser.TO);
        }

        this.state = 225;
        localctx.to = this.expr_block();
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.BY) {
            this.state = 226;
            this.match(VenbraceNoCodeParser.BY);
        }

        this.state = 229;
        localctx.by = this.expr_block();
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.DO) {
            this.state = 230;
            this.match(VenbraceNoCodeParser.DO);
        }

        this.state = 233;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function While_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_while_stat;
    return this;
}

While_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_statContext.prototype.constructor = While_statContext;

While_statContext.prototype.WHILE = function() {
    return this.getToken(VenbraceNoCodeParser.WHILE, 0);
};

While_statContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

While_statContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

While_statContext.prototype.TEST = function() {
    return this.getToken(VenbraceNoCodeParser.TEST, 0);
};

While_statContext.prototype.DO = function() {
    return this.getToken(VenbraceNoCodeParser.DO, 0);
};

While_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterWhile_stat(this);
	}
};

While_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitWhile_stat(this);
	}
};

While_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitWhile_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.While_statContext = While_statContext;

VenbraceNoCodeParser.prototype.while_stat = function() {

    var localctx = new While_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, VenbraceNoCodeParser.RULE_while_stat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(VenbraceNoCodeParser.WHILE);
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.TEST) {
            this.state = 236;
            this.match(VenbraceNoCodeParser.TEST);
        }

        this.state = 239;
        this.expr_block();
        this.state = 241;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.DO) {
            this.state = 240;
            this.match(VenbraceNoCodeParser.DO);
        }

        this.state = 243;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Call_procedure_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_call_procedure_stat;
    this.arg = null; // Expr_blockContext
    return this;
}

Call_procedure_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Call_procedure_statContext.prototype.constructor = Call_procedure_statContext;

Call_procedure_statContext.prototype.CALL = function() {
    return this.getToken(VenbraceNoCodeParser.CALL, 0);
};

Call_procedure_statContext.prototype.ID = function() {
    return this.getToken(VenbraceNoCodeParser.ID, 0);
};

Call_procedure_statContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Call_procedure_statContext.prototype.label = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LabelContext);
    } else {
        return this.getTypedRuleContext(LabelContext,i);
    }
};

Call_procedure_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterCall_procedure_stat(this);
	}
};

Call_procedure_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitCall_procedure_stat(this);
	}
};

Call_procedure_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitCall_procedure_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Call_procedure_statContext = Call_procedure_statContext;

VenbraceNoCodeParser.prototype.call_procedure_stat = function() {

    var localctx = new Call_procedure_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, VenbraceNoCodeParser.RULE_call_procedure_stat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(VenbraceNoCodeParser.CALL);
        this.state = 246;
        this.match(VenbraceNoCodeParser.ID);
        this.state = 253;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceNoCodeParser.LPAREN) | (1 << VenbraceNoCodeParser.TRUE) | (1 << VenbraceNoCodeParser.FALSE))) !== 0) || ((((_la - 119)) & ~0x1f) == 0 && ((1 << (_la - 119)) & ((1 << (VenbraceNoCodeParser.NUMBER - 119)) | (1 << (VenbraceNoCodeParser.NEG_NUM - 119)) | (1 << (VenbraceNoCodeParser.COMPONENT_PROPERTY - 119)) | (1 << (VenbraceNoCodeParser.ID - 119)) | (1 << (VenbraceNoCodeParser.STRING - 119)))) !== 0)) {
            this.state = 248;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
            if(la_===1) {
                this.state = 247;
                this.label();

            }
            this.state = 250;
            localctx.arg = this.expr_block();
            this.state = 255;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Var_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_var_stat;
    return this;
}

Var_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_statContext.prototype.constructor = Var_statContext;

Var_statContext.prototype.setter = function() {
    return this.getTypedRuleContext(SetterContext,0);
};

Var_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterVar_stat(this);
	}
};

Var_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitVar_stat(this);
	}
};

Var_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitVar_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Var_statContext = Var_statContext;

VenbraceNoCodeParser.prototype.var_stat = function() {

    var localctx = new Var_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, VenbraceNoCodeParser.RULE_var_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        this.setter();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Local_var_decl_statContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_local_var_decl_stat;
    return this;
}

Local_var_decl_statContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Local_var_decl_statContext.prototype.constructor = Local_var_decl_statContext;

Local_var_decl_statContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

Local_var_decl_statContext.prototype.INITIALIZE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.INITIALIZE);
    } else {
        return this.getToken(VenbraceNoCodeParser.INITIALIZE, i);
    }
};


Local_var_decl_statContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.ID);
    } else {
        return this.getToken(VenbraceNoCodeParser.ID, i);
    }
};


Local_var_decl_statContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Local_var_decl_statContext.prototype.IN = function() {
    return this.getToken(VenbraceNoCodeParser.IN, 0);
};

Local_var_decl_statContext.prototype.LOCAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.LOCAL);
    } else {
        return this.getToken(VenbraceNoCodeParser.LOCAL, i);
    }
};


Local_var_decl_statContext.prototype.TO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.TO);
    } else {
        return this.getToken(VenbraceNoCodeParser.TO, i);
    }
};


Local_var_decl_statContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterLocal_var_decl_stat(this);
	}
};

Local_var_decl_statContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitLocal_var_decl_stat(this);
	}
};

Local_var_decl_statContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitLocal_var_decl_stat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Local_var_decl_statContext = Local_var_decl_statContext;

VenbraceNoCodeParser.prototype.local_var_decl_stat = function() {

    var localctx = new Local_var_decl_statContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, VenbraceNoCodeParser.RULE_local_var_decl_stat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VenbraceNoCodeParser.INITIALIZE) {
            this.state = 258;
            this.match(VenbraceNoCodeParser.INITIALIZE);
            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceNoCodeParser.LOCAL) {
                this.state = 259;
                this.match(VenbraceNoCodeParser.LOCAL);
            }

            this.state = 262;
            this.match(VenbraceNoCodeParser.ID);
            this.state = 264;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceNoCodeParser.TO) {
                this.state = 263;
                this.match(VenbraceNoCodeParser.TO);
            }

            this.state = 266;
            this.expr_block();
            this.state = 271;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.IN) {
            this.state = 272;
            this.match(VenbraceNoCodeParser.IN);
        }

        this.state = 275;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_setter;
    this.target = null; // Token
    return this;
}

SetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetterContext.prototype.constructor = SetterContext;

SetterContext.prototype.SET = function() {
    return this.getToken(VenbraceNoCodeParser.SET, 0);
};

SetterContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

SetterContext.prototype.ID = function() {
    return this.getToken(VenbraceNoCodeParser.ID, 0);
};

SetterContext.prototype.COMPONENT_PROPERTY = function() {
    return this.getToken(VenbraceNoCodeParser.COMPONENT_PROPERTY, 0);
};

SetterContext.prototype.GLOBAL = function() {
    return this.getToken(VenbraceNoCodeParser.GLOBAL, 0);
};

SetterContext.prototype.TO = function() {
    return this.getToken(VenbraceNoCodeParser.TO, 0);
};

SetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterSetter(this);
	}
};

SetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitSetter(this);
	}
};

SetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitSetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.SetterContext = SetterContext;

VenbraceNoCodeParser.prototype.setter = function() {

    var localctx = new SetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, VenbraceNoCodeParser.RULE_setter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(VenbraceNoCodeParser.SET);
        this.state = 279;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.GLOBAL) {
            this.state = 278;
            this.match(VenbraceNoCodeParser.GLOBAL);
        }

        this.state = 281;
        localctx.target = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===VenbraceNoCodeParser.COMPONENT_PROPERTY || _la===VenbraceNoCodeParser.ID)) {
            localctx.target = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 283;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.TO) {
            this.state = 282;
            this.match(VenbraceNoCodeParser.TO);
        }

        this.state = 285;
        this.expr_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Expr_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_expr_block;
    return this;
}

Expr_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_blockContext.prototype.constructor = Expr_blockContext;

Expr_blockContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Expr_blockContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Expr_blockContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

Expr_blockContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Expr_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterExpr_block(this);
	}
};

Expr_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitExpr_block(this);
	}
};

Expr_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitExpr_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Expr_blockContext = Expr_blockContext;

VenbraceNoCodeParser.prototype.expr_block = function() {

    var localctx = new Expr_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, VenbraceNoCodeParser.RULE_expr_block);
    try {
        this.state = 291;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 287;
            this.match(VenbraceNoCodeParser.LPAREN);
            this.state = 288;
            this.match(VenbraceNoCodeParser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 289;
            this.atom();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 290;
            this.expr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.getter = function() {
    return this.getTypedRuleContext(GetterContext,0);
};

ExprContext.prototype.control_expr = function() {
    return this.getTypedRuleContext(Control_exprContext,0);
};

ExprContext.prototype.logic_expr = function() {
    return this.getTypedRuleContext(Logic_exprContext,0);
};

ExprContext.prototype.not_expr = function() {
    return this.getTypedRuleContext(Not_exprContext,0);
};

ExprContext.prototype.compare_eq_expr = function() {
    return this.getTypedRuleContext(Compare_eq_exprContext,0);
};

ExprContext.prototype.compare_math_expr = function() {
    return this.getTypedRuleContext(Compare_math_exprContext,0);
};

ExprContext.prototype.math_expr = function() {
    return this.getTypedRuleContext(Math_exprContext,0);
};

ExprContext.prototype.str_expr = function() {
    return this.getTypedRuleContext(Str_exprContext,0);
};

ExprContext.prototype.call_procedure_expr = function() {
    return this.getTypedRuleContext(Call_procedure_exprContext,0);
};

ExprContext.prototype.local_var_decl_expr = function() {
    return this.getTypedRuleContext(Local_var_decl_exprContext,0);
};

ExprContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.ExprContext = ExprContext;

VenbraceNoCodeParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, VenbraceNoCodeParser.RULE_expr);
    try {
        this.state = 304;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 293;
            this.getter();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 294;
            this.control_expr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 295;
            this.logic_expr();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 296;
            this.not_expr();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 297;
            this.compare_eq_expr();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 298;
            this.compare_math_expr();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 299;
            this.math_expr();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 300;
            this.str_expr();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 301;
            this.call_procedure_expr();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 302;
            this.local_var_decl_expr();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 303;
            this.atom();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Control_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_control_expr;
    return this;
}

Control_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Control_exprContext.prototype.constructor = Control_exprContext;

Control_exprContext.prototype.if_expr = function() {
    return this.getTypedRuleContext(If_exprContext,0);
};

Control_exprContext.prototype.do_expr = function() {
    return this.getTypedRuleContext(Do_exprContext,0);
};

Control_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterControl_expr(this);
	}
};

Control_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitControl_expr(this);
	}
};

Control_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitControl_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Control_exprContext = Control_exprContext;

VenbraceNoCodeParser.prototype.control_expr = function() {

    var localctx = new Control_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, VenbraceNoCodeParser.RULE_control_expr);
    try {
        this.state = 308;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 306;
            this.if_expr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 307;
            this.do_expr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_if_expr;
    this.c = null; // Expr_blockContext
    this.e1 = null; // Expr_blockContext
    this.e2 = null; // Expr_blockContext
    return this;
}

If_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_exprContext.prototype.constructor = If_exprContext;

If_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

If_exprContext.prototype.IF = function() {
    return this.getToken(VenbraceNoCodeParser.IF, 0);
};

If_exprContext.prototype.THEN = function() {
    return this.getToken(VenbraceNoCodeParser.THEN, 0);
};

If_exprContext.prototype.ELSE = function() {
    return this.getToken(VenbraceNoCodeParser.ELSE, 0);
};

If_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

If_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

If_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterIf_expr(this);
	}
};

If_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitIf_expr(this);
	}
};

If_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitIf_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.If_exprContext = If_exprContext;

VenbraceNoCodeParser.prototype.if_expr = function() {

    var localctx = new If_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, VenbraceNoCodeParser.RULE_if_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 311;
        this.match(VenbraceNoCodeParser.IF);
        this.state = 312;
        localctx.c = this.expr_block();
        this.state = 313;
        this.match(VenbraceNoCodeParser.THEN);
        this.state = 314;
        localctx.e1 = this.expr_block();
        this.state = 315;
        this.match(VenbraceNoCodeParser.ELSE);
        this.state = 316;
        localctx.e2 = this.expr_block();
        this.state = 317;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Do_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_do_expr;
    return this;
}

Do_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Do_exprContext.prototype.constructor = Do_exprContext;

Do_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Do_exprContext.prototype.DO = function() {
    return this.getToken(VenbraceNoCodeParser.DO, 0);
};

Do_exprContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

Do_exprContext.prototype.RESULT = function() {
    return this.getToken(VenbraceNoCodeParser.RESULT, 0);
};

Do_exprContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Do_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Do_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterDo_expr(this);
	}
};

Do_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitDo_expr(this);
	}
};

Do_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitDo_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Do_exprContext = Do_exprContext;

VenbraceNoCodeParser.prototype.do_expr = function() {

    var localctx = new Do_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, VenbraceNoCodeParser.RULE_do_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 320;
        this.match(VenbraceNoCodeParser.DO);
        this.state = 321;
        this.suite();
        this.state = 322;
        this.match(VenbraceNoCodeParser.RESULT);
        this.state = 323;
        this.expr_block();
        this.state = 324;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Logic_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_logic_expr;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

Logic_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Logic_exprContext.prototype.constructor = Logic_exprContext;

Logic_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Logic_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Logic_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Logic_exprContext.prototype.AND = function() {
    return this.getToken(VenbraceNoCodeParser.AND, 0);
};

Logic_exprContext.prototype.OR = function() {
    return this.getToken(VenbraceNoCodeParser.OR, 0);
};

Logic_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterLogic_expr(this);
	}
};

Logic_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitLogic_expr(this);
	}
};

Logic_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitLogic_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Logic_exprContext = Logic_exprContext;

VenbraceNoCodeParser.prototype.logic_expr = function() {

    var localctx = new Logic_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, VenbraceNoCodeParser.RULE_logic_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 327;
        localctx.a = this.expr_block();
        this.state = 328;
        _la = this._input.LA(1);
        if(!(_la===VenbraceNoCodeParser.AND || _la===VenbraceNoCodeParser.OR)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 329;
        localctx.b = this.expr_block();
        this.state = 330;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Not_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_not_expr;
    return this;
}

Not_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Not_exprContext.prototype.constructor = Not_exprContext;

Not_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Not_exprContext.prototype.NOT = function() {
    return this.getToken(VenbraceNoCodeParser.NOT, 0);
};

Not_exprContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Not_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Not_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterNot_expr(this);
	}
};

Not_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitNot_expr(this);
	}
};

Not_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitNot_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Not_exprContext = Not_exprContext;

VenbraceNoCodeParser.prototype.not_expr = function() {

    var localctx = new Not_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, VenbraceNoCodeParser.RULE_not_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 333;
        this.match(VenbraceNoCodeParser.NOT);
        this.state = 334;
        this.expr_block();
        this.state = 335;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Compare_eq_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_compare_eq_expr;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

Compare_eq_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Compare_eq_exprContext.prototype.constructor = Compare_eq_exprContext;

Compare_eq_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Compare_eq_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Compare_eq_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Compare_eq_exprContext.prototype.LOGIC_EQ = function() {
    return this.getToken(VenbraceNoCodeParser.LOGIC_EQ, 0);
};

Compare_eq_exprContext.prototype.LOGIC_NOT_EQ = function() {
    return this.getToken(VenbraceNoCodeParser.LOGIC_NOT_EQ, 0);
};

Compare_eq_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterCompare_eq_expr(this);
	}
};

Compare_eq_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitCompare_eq_expr(this);
	}
};

Compare_eq_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitCompare_eq_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Compare_eq_exprContext = Compare_eq_exprContext;

VenbraceNoCodeParser.prototype.compare_eq_expr = function() {

    var localctx = new Compare_eq_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, VenbraceNoCodeParser.RULE_compare_eq_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 338;
        localctx.a = this.expr_block();
        this.state = 339;
        _la = this._input.LA(1);
        if(!(_la===VenbraceNoCodeParser.LOGIC_EQ || _la===VenbraceNoCodeParser.LOGIC_NOT_EQ)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 340;
        localctx.b = this.expr_block();
        this.state = 341;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Compare_math_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_compare_math_expr;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

Compare_math_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Compare_math_exprContext.prototype.constructor = Compare_math_exprContext;

Compare_math_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Compare_math_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Compare_math_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Compare_math_exprContext.prototype.EQ = function() {
    return this.getToken(VenbraceNoCodeParser.EQ, 0);
};

Compare_math_exprContext.prototype.NEQ = function() {
    return this.getToken(VenbraceNoCodeParser.NEQ, 0);
};

Compare_math_exprContext.prototype.GT = function() {
    return this.getToken(VenbraceNoCodeParser.GT, 0);
};

Compare_math_exprContext.prototype.GE = function() {
    return this.getToken(VenbraceNoCodeParser.GE, 0);
};

Compare_math_exprContext.prototype.LT = function() {
    return this.getToken(VenbraceNoCodeParser.LT, 0);
};

Compare_math_exprContext.prototype.LE = function() {
    return this.getToken(VenbraceNoCodeParser.LE, 0);
};

Compare_math_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterCompare_math_expr(this);
	}
};

Compare_math_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitCompare_math_expr(this);
	}
};

Compare_math_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitCompare_math_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Compare_math_exprContext = Compare_math_exprContext;

VenbraceNoCodeParser.prototype.compare_math_expr = function() {

    var localctx = new Compare_math_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, VenbraceNoCodeParser.RULE_compare_math_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 344;
        localctx.a = this.expr_block();
        this.state = 345;
        _la = this._input.LA(1);
        if(!(((((_la - 52)) & ~0x1f) == 0 && ((1 << (_la - 52)) & ((1 << (VenbraceNoCodeParser.LT - 52)) | (1 << (VenbraceNoCodeParser.GT - 52)) | (1 << (VenbraceNoCodeParser.LE - 52)) | (1 << (VenbraceNoCodeParser.GE - 52)) | (1 << (VenbraceNoCodeParser.EQ - 52)) | (1 << (VenbraceNoCodeParser.NEQ - 52)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 346;
        localctx.b = this.expr_block();
        this.state = 347;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Math_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_math_expr;
    return this;
}

Math_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Math_exprContext.prototype.constructor = Math_exprContext;

Math_exprContext.prototype.mutable_op = function() {
    return this.getTypedRuleContext(Mutable_opContext,0);
};

Math_exprContext.prototype.immutable_op = function() {
    return this.getTypedRuleContext(Immutable_opContext,0);
};

Math_exprContext.prototype.min_max = function() {
    return this.getTypedRuleContext(Min_maxContext,0);
};

Math_exprContext.prototype.unary_op = function() {
    return this.getTypedRuleContext(Unary_opContext,0);
};

Math_exprContext.prototype.mod = function() {
    return this.getTypedRuleContext(ModContext,0);
};

Math_exprContext.prototype.remainder = function() {
    return this.getTypedRuleContext(RemainderContext,0);
};

Math_exprContext.prototype.quotient = function() {
    return this.getTypedRuleContext(QuotientContext,0);
};

Math_exprContext.prototype.trig = function() {
    return this.getTypedRuleContext(TrigContext,0);
};

Math_exprContext.prototype.atan2 = function() {
    return this.getTypedRuleContext(Atan2Context,0);
};

Math_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterMath_expr(this);
	}
};

Math_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitMath_expr(this);
	}
};

Math_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitMath_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Math_exprContext = Math_exprContext;

VenbraceNoCodeParser.prototype.math_expr = function() {

    var localctx = new Math_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, VenbraceNoCodeParser.RULE_math_expr);
    try {
        this.state = 358;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 349;
            this.mutable_op();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 350;
            this.immutable_op();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 351;
            this.min_max();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 352;
            this.unary_op();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 353;
            this.mod();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 354;
            this.remainder();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 355;
            this.quotient();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 356;
            this.trig();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 357;
            this.atan2();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Mutable_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_mutable_op;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

Mutable_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mutable_opContext.prototype.constructor = Mutable_opContext;

Mutable_opContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Mutable_opContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Mutable_opContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Mutable_opContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.PLUS);
    } else {
        return this.getToken(VenbraceNoCodeParser.PLUS, i);
    }
};


Mutable_opContext.prototype.MUL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.MUL);
    } else {
        return this.getToken(VenbraceNoCodeParser.MUL, i);
    }
};


Mutable_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterMutable_op(this);
	}
};

Mutable_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitMutable_op(this);
	}
};

Mutable_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitMutable_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Mutable_opContext = Mutable_opContext;

VenbraceNoCodeParser.prototype.mutable_op = function() {

    var localctx = new Mutable_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, VenbraceNoCodeParser.RULE_mutable_op);
    var _la = 0; // Token type
    try {
        this.state = 380;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 360;
            this.match(VenbraceNoCodeParser.LPAREN);
            this.state = 361;
            localctx.a = this.expr_block();
            this.state = 364; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 362;
                this.match(VenbraceNoCodeParser.PLUS);
                this.state = 363;
                localctx.b = this.expr_block();
                this.state = 366; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===VenbraceNoCodeParser.PLUS);
            this.state = 368;
            this.match(VenbraceNoCodeParser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 370;
            this.match(VenbraceNoCodeParser.LPAREN);
            this.state = 371;
            localctx.a = this.expr_block();
            this.state = 374; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 372;
                this.match(VenbraceNoCodeParser.MUL);
                this.state = 373;
                localctx.b = this.expr_block();
                this.state = 376; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===VenbraceNoCodeParser.MUL);
            this.state = 378;
            this.match(VenbraceNoCodeParser.RPAREN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Immutable_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_immutable_op;
    return this;
}

Immutable_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Immutable_opContext.prototype.constructor = Immutable_opContext;


 
Immutable_opContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Immutable_neg_num_special_caseContext(parser, ctx) {
	Immutable_opContext.call(this, parser);
    Immutable_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Immutable_neg_num_special_caseContext.prototype = Object.create(Immutable_opContext.prototype);
Immutable_neg_num_special_caseContext.prototype.constructor = Immutable_neg_num_special_caseContext;

VenbraceNoCodeParser.Immutable_neg_num_special_caseContext = Immutable_neg_num_special_caseContext;

Immutable_neg_num_special_caseContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Immutable_neg_num_special_caseContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Immutable_neg_num_special_caseContext.prototype.NEG_NUM = function() {
    return this.getToken(VenbraceNoCodeParser.NEG_NUM, 0);
};

Immutable_neg_num_special_caseContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};
Immutable_neg_num_special_caseContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterImmutable_neg_num_special_case(this);
	}
};

Immutable_neg_num_special_caseContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitImmutable_neg_num_special_case(this);
	}
};

Immutable_neg_num_special_caseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitImmutable_neg_num_special_case(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Immutable_regular_caseContext(parser, ctx) {
	Immutable_opContext.call(this, parser);
    this.a = null; // Expr_blockContext;
    this.b = null; // Expr_blockContext;
    Immutable_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Immutable_regular_caseContext.prototype = Object.create(Immutable_opContext.prototype);
Immutable_regular_caseContext.prototype.constructor = Immutable_regular_caseContext;

VenbraceNoCodeParser.Immutable_regular_caseContext = Immutable_regular_caseContext;

Immutable_regular_caseContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Immutable_regular_caseContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Immutable_regular_caseContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Immutable_regular_caseContext.prototype.MINUS = function() {
    return this.getToken(VenbraceNoCodeParser.MINUS, 0);
};

Immutable_regular_caseContext.prototype.DIV = function() {
    return this.getToken(VenbraceNoCodeParser.DIV, 0);
};

Immutable_regular_caseContext.prototype.POW = function() {
    return this.getToken(VenbraceNoCodeParser.POW, 0);
};
Immutable_regular_caseContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterImmutable_regular_case(this);
	}
};

Immutable_regular_caseContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitImmutable_regular_case(this);
	}
};

Immutable_regular_caseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitImmutable_regular_case(this);
    } else {
        return visitor.visitChildren(this);
    }
};



VenbraceNoCodeParser.Immutable_opContext = Immutable_opContext;

VenbraceNoCodeParser.prototype.immutable_op = function() {

    var localctx = new Immutable_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, VenbraceNoCodeParser.RULE_immutable_op);
    var _la = 0; // Token type
    try {
        this.state = 393;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Immutable_regular_caseContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 382;
            this.match(VenbraceNoCodeParser.LPAREN);
            this.state = 383;
            localctx.a = this.expr_block();
            this.state = 384;
            _la = this._input.LA(1);
            if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (VenbraceNoCodeParser.MINUS - 61)) | (1 << (VenbraceNoCodeParser.DIV - 61)) | (1 << (VenbraceNoCodeParser.POW - 61)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 385;
            localctx.b = this.expr_block();
            this.state = 386;
            this.match(VenbraceNoCodeParser.RPAREN);
            break;

        case 2:
            localctx = new Immutable_neg_num_special_caseContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 388;
            this.match(VenbraceNoCodeParser.LPAREN);
            this.state = 389;
            this.expr_block();
            this.state = 390;
            this.match(VenbraceNoCodeParser.NEG_NUM);
            this.state = 391;
            this.match(VenbraceNoCodeParser.RPAREN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Min_maxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_min_max;
    return this;
}

Min_maxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Min_maxContext.prototype.constructor = Min_maxContext;

Min_maxContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Min_maxContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Min_maxContext.prototype.MIN = function() {
    return this.getToken(VenbraceNoCodeParser.MIN, 0);
};

Min_maxContext.prototype.MAX = function() {
    return this.getToken(VenbraceNoCodeParser.MAX, 0);
};

Min_maxContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Min_maxContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterMin_max(this);
	}
};

Min_maxContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitMin_max(this);
	}
};

Min_maxContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitMin_max(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Min_maxContext = Min_maxContext;

VenbraceNoCodeParser.prototype.min_max = function() {

    var localctx = new Min_maxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, VenbraceNoCodeParser.RULE_min_max);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 396;
        _la = this._input.LA(1);
        if(!(_la===VenbraceNoCodeParser.MIN || _la===VenbraceNoCodeParser.MAX)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 400;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceNoCodeParser.LPAREN) | (1 << VenbraceNoCodeParser.TRUE) | (1 << VenbraceNoCodeParser.FALSE))) !== 0) || ((((_la - 119)) & ~0x1f) == 0 && ((1 << (_la - 119)) & ((1 << (VenbraceNoCodeParser.NUMBER - 119)) | (1 << (VenbraceNoCodeParser.NEG_NUM - 119)) | (1 << (VenbraceNoCodeParser.COMPONENT_PROPERTY - 119)) | (1 << (VenbraceNoCodeParser.ID - 119)) | (1 << (VenbraceNoCodeParser.STRING - 119)))) !== 0)) {
            this.state = 397;
            this.expr_block();
            this.state = 402;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 403;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Unary_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_unary_op;
    return this;
}

Unary_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_opContext.prototype.constructor = Unary_opContext;

Unary_opContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Unary_opContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Unary_opContext.prototype.RPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.RPAREN);
    } else {
        return this.getToken(VenbraceNoCodeParser.RPAREN, i);
    }
};


Unary_opContext.prototype.SQRT = function() {
    return this.getToken(VenbraceNoCodeParser.SQRT, 0);
};

Unary_opContext.prototype.ABS = function() {
    return this.getToken(VenbraceNoCodeParser.ABS, 0);
};

Unary_opContext.prototype.NEG = function() {
    return this.getToken(VenbraceNoCodeParser.NEG, 0);
};

Unary_opContext.prototype.LOG = function() {
    return this.getToken(VenbraceNoCodeParser.LOG, 0);
};

Unary_opContext.prototype.EULER = function() {
    return this.getToken(VenbraceNoCodeParser.EULER, 0);
};

Unary_opContext.prototype.ROUND = function() {
    return this.getToken(VenbraceNoCodeParser.ROUND, 0);
};

Unary_opContext.prototype.CEILING = function() {
    return this.getToken(VenbraceNoCodeParser.CEILING, 0);
};

Unary_opContext.prototype.FLOOR = function() {
    return this.getToken(VenbraceNoCodeParser.FLOOR, 0);
};

Unary_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterUnary_op(this);
	}
};

Unary_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitUnary_op(this);
	}
};

Unary_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitUnary_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Unary_opContext = Unary_opContext;

VenbraceNoCodeParser.prototype.unary_op = function() {

    var localctx = new Unary_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, VenbraceNoCodeParser.RULE_unary_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 406;
        _la = this._input.LA(1);
        if(!(((((_la - 70)) & ~0x1f) == 0 && ((1 << (_la - 70)) & ((1 << (VenbraceNoCodeParser.SQRT - 70)) | (1 << (VenbraceNoCodeParser.ABS - 70)) | (1 << (VenbraceNoCodeParser.NEG - 70)) | (1 << (VenbraceNoCodeParser.LOG - 70)) | (1 << (VenbraceNoCodeParser.EULER - 70)) | (1 << (VenbraceNoCodeParser.ROUND - 70)) | (1 << (VenbraceNoCodeParser.CEILING - 70)) | (1 << (VenbraceNoCodeParser.FLOOR - 70)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 407;
        this.expr_block();
        this.state = 408;
        this.match(VenbraceNoCodeParser.RPAREN);
        this.state = 409;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_mod;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

ModContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModContext.prototype.constructor = ModContext;

ModContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

ModContext.prototype.MODULO = function() {
    return this.getToken(VenbraceNoCodeParser.MODULO, 0);
};

ModContext.prototype.OF = function() {
    return this.getToken(VenbraceNoCodeParser.OF, 0);
};

ModContext.prototype.DIV = function() {
    return this.getToken(VenbraceNoCodeParser.DIV, 0);
};

ModContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

ModContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

ModContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterMod(this);
	}
};

ModContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitMod(this);
	}
};

ModContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitMod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.ModContext = ModContext;

VenbraceNoCodeParser.prototype.mod = function() {

    var localctx = new ModContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, VenbraceNoCodeParser.RULE_mod);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 412;
        this.match(VenbraceNoCodeParser.MODULO);
        this.state = 413;
        this.match(VenbraceNoCodeParser.OF);
        this.state = 414;
        localctx.a = this.expr_block();
        this.state = 415;
        this.match(VenbraceNoCodeParser.DIV);
        this.state = 416;
        localctx.b = this.expr_block();
        this.state = 417;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RemainderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_remainder;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

RemainderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RemainderContext.prototype.constructor = RemainderContext;

RemainderContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

RemainderContext.prototype.REMAINDER = function() {
    return this.getToken(VenbraceNoCodeParser.REMAINDER, 0);
};

RemainderContext.prototype.OF = function() {
    return this.getToken(VenbraceNoCodeParser.OF, 0);
};

RemainderContext.prototype.DIV = function() {
    return this.getToken(VenbraceNoCodeParser.DIV, 0);
};

RemainderContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

RemainderContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

RemainderContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterRemainder(this);
	}
};

RemainderContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitRemainder(this);
	}
};

RemainderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitRemainder(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.RemainderContext = RemainderContext;

VenbraceNoCodeParser.prototype.remainder = function() {

    var localctx = new RemainderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, VenbraceNoCodeParser.RULE_remainder);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 419;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 420;
        this.match(VenbraceNoCodeParser.REMAINDER);
        this.state = 421;
        this.match(VenbraceNoCodeParser.OF);
        this.state = 422;
        localctx.a = this.expr_block();
        this.state = 423;
        this.match(VenbraceNoCodeParser.DIV);
        this.state = 424;
        localctx.b = this.expr_block();
        this.state = 425;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QuotientContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_quotient;
    this.a = null; // Expr_blockContext
    this.b = null; // Expr_blockContext
    return this;
}

QuotientContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotientContext.prototype.constructor = QuotientContext;

QuotientContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

QuotientContext.prototype.QUOTIENT = function() {
    return this.getToken(VenbraceNoCodeParser.QUOTIENT, 0);
};

QuotientContext.prototype.OF = function() {
    return this.getToken(VenbraceNoCodeParser.OF, 0);
};

QuotientContext.prototype.DIV = function() {
    return this.getToken(VenbraceNoCodeParser.DIV, 0);
};

QuotientContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

QuotientContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

QuotientContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterQuotient(this);
	}
};

QuotientContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitQuotient(this);
	}
};

QuotientContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitQuotient(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.QuotientContext = QuotientContext;

VenbraceNoCodeParser.prototype.quotient = function() {

    var localctx = new QuotientContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, VenbraceNoCodeParser.RULE_quotient);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 428;
        this.match(VenbraceNoCodeParser.QUOTIENT);
        this.state = 429;
        this.match(VenbraceNoCodeParser.OF);
        this.state = 430;
        localctx.a = this.expr_block();
        this.state = 431;
        this.match(VenbraceNoCodeParser.DIV);
        this.state = 432;
        localctx.b = this.expr_block();
        this.state = 433;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TrigContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_trig;
    return this;
}

TrigContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrigContext.prototype.constructor = TrigContext;

TrigContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

TrigContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

TrigContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

TrigContext.prototype.SIN = function() {
    return this.getToken(VenbraceNoCodeParser.SIN, 0);
};

TrigContext.prototype.COS = function() {
    return this.getToken(VenbraceNoCodeParser.COS, 0);
};

TrigContext.prototype.TAN = function() {
    return this.getToken(VenbraceNoCodeParser.TAN, 0);
};

TrigContext.prototype.ASIN = function() {
    return this.getToken(VenbraceNoCodeParser.ASIN, 0);
};

TrigContext.prototype.ACOS = function() {
    return this.getToken(VenbraceNoCodeParser.ACOS, 0);
};

TrigContext.prototype.ATAN = function() {
    return this.getToken(VenbraceNoCodeParser.ATAN, 0);
};

TrigContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterTrig(this);
	}
};

TrigContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitTrig(this);
	}
};

TrigContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitTrig(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.TrigContext = TrigContext;

VenbraceNoCodeParser.prototype.trig = function() {

    var localctx = new TrigContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, VenbraceNoCodeParser.RULE_trig);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 436;
        _la = this._input.LA(1);
        if(!(((((_la - 87)) & ~0x1f) == 0 && ((1 << (_la - 87)) & ((1 << (VenbraceNoCodeParser.SIN - 87)) | (1 << (VenbraceNoCodeParser.COS - 87)) | (1 << (VenbraceNoCodeParser.TAN - 87)) | (1 << (VenbraceNoCodeParser.ASIN - 87)) | (1 << (VenbraceNoCodeParser.ACOS - 87)) | (1 << (VenbraceNoCodeParser.ATAN - 87)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 437;
        this.expr_block();
        this.state = 438;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Atan2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_atan2;
    this.y_expr = null; // Expr_blockContext
    this.x_expr = null; // Expr_blockContext
    return this;
}

Atan2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Atan2Context.prototype.constructor = Atan2Context;

Atan2Context.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Atan2Context.prototype.ATAN2 = function() {
    return this.getToken(VenbraceNoCodeParser.ATAN2, 0);
};

Atan2Context.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Atan2Context.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Atan2Context.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterAtan2(this);
	}
};

Atan2Context.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitAtan2(this);
	}
};

Atan2Context.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitAtan2(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Atan2Context = Atan2Context;

VenbraceNoCodeParser.prototype.atan2 = function() {

    var localctx = new Atan2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 76, VenbraceNoCodeParser.RULE_atan2);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 440;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 441;
        this.match(VenbraceNoCodeParser.ATAN2);
        this.state = 442;
        localctx.y_expr = this.expr_block();
        this.state = 443;
        localctx.x_expr = this.expr_block();
        this.state = 444;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_str_expr;
    return this;
}

Str_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_exprContext.prototype.constructor = Str_exprContext;

Str_exprContext.prototype.str_join = function() {
    return this.getTypedRuleContext(Str_joinContext,0);
};

Str_exprContext.prototype.str_length = function() {
    return this.getTypedRuleContext(Str_lengthContext,0);
};

Str_exprContext.prototype.str_reverse = function() {
    return this.getTypedRuleContext(Str_reverseContext,0);
};

Str_exprContext.prototype.str_split_at_spaces = function() {
    return this.getTypedRuleContext(Str_split_at_spacesContext,0);
};

Str_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterStr_expr(this);
	}
};

Str_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitStr_expr(this);
	}
};

Str_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitStr_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Str_exprContext = Str_exprContext;

VenbraceNoCodeParser.prototype.str_expr = function() {

    var localctx = new Str_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, VenbraceNoCodeParser.RULE_str_expr);
    try {
        this.state = 450;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 446;
            this.str_join();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 447;
            this.str_length();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 448;
            this.str_reverse();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 449;
            this.str_split_at_spaces();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_lengthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_str_length;
    return this;
}

Str_lengthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_lengthContext.prototype.constructor = Str_lengthContext;

Str_lengthContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Str_lengthContext.prototype.LENGTH = function() {
    return this.getToken(VenbraceNoCodeParser.LENGTH, 0);
};

Str_lengthContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Str_lengthContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Str_lengthContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterStr_length(this);
	}
};

Str_lengthContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitStr_length(this);
	}
};

Str_lengthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitStr_length(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Str_lengthContext = Str_lengthContext;

VenbraceNoCodeParser.prototype.str_length = function() {

    var localctx = new Str_lengthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, VenbraceNoCodeParser.RULE_str_length);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 452;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 453;
        this.match(VenbraceNoCodeParser.LENGTH);
        this.state = 454;
        this.expr_block();
        this.state = 455;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_joinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_str_join;
    return this;
}

Str_joinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_joinContext.prototype.constructor = Str_joinContext;

Str_joinContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Str_joinContext.prototype.JOIN = function() {
    return this.getToken(VenbraceNoCodeParser.JOIN, 0);
};

Str_joinContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Str_joinContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Str_joinContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterStr_join(this);
	}
};

Str_joinContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitStr_join(this);
	}
};

Str_joinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitStr_join(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Str_joinContext = Str_joinContext;

VenbraceNoCodeParser.prototype.str_join = function() {

    var localctx = new Str_joinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, VenbraceNoCodeParser.RULE_str_join);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 457;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 458;
        this.match(VenbraceNoCodeParser.JOIN);
        this.state = 462;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceNoCodeParser.LPAREN) | (1 << VenbraceNoCodeParser.TRUE) | (1 << VenbraceNoCodeParser.FALSE))) !== 0) || ((((_la - 119)) & ~0x1f) == 0 && ((1 << (_la - 119)) & ((1 << (VenbraceNoCodeParser.NUMBER - 119)) | (1 << (VenbraceNoCodeParser.NEG_NUM - 119)) | (1 << (VenbraceNoCodeParser.COMPONENT_PROPERTY - 119)) | (1 << (VenbraceNoCodeParser.ID - 119)) | (1 << (VenbraceNoCodeParser.STRING - 119)))) !== 0)) {
            this.state = 459;
            this.expr_block();
            this.state = 464;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 465;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_reverseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_str_reverse;
    return this;
}

Str_reverseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_reverseContext.prototype.constructor = Str_reverseContext;

Str_reverseContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Str_reverseContext.prototype.REVERSE = function() {
    return this.getToken(VenbraceNoCodeParser.REVERSE, 0);
};

Str_reverseContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Str_reverseContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Str_reverseContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterStr_reverse(this);
	}
};

Str_reverseContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitStr_reverse(this);
	}
};

Str_reverseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitStr_reverse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Str_reverseContext = Str_reverseContext;

VenbraceNoCodeParser.prototype.str_reverse = function() {

    var localctx = new Str_reverseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, VenbraceNoCodeParser.RULE_str_reverse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 467;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 468;
        this.match(VenbraceNoCodeParser.REVERSE);
        this.state = 469;
        this.expr_block();
        this.state = 470;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Str_split_at_spacesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_str_split_at_spaces;
    return this;
}

Str_split_at_spacesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Str_split_at_spacesContext.prototype.constructor = Str_split_at_spacesContext;

Str_split_at_spacesContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Str_split_at_spacesContext.prototype.SPLIT_AT_SPACES = function() {
    return this.getToken(VenbraceNoCodeParser.SPLIT_AT_SPACES, 0);
};

Str_split_at_spacesContext.prototype.expr_block = function() {
    return this.getTypedRuleContext(Expr_blockContext,0);
};

Str_split_at_spacesContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Str_split_at_spacesContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterStr_split_at_spaces(this);
	}
};

Str_split_at_spacesContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitStr_split_at_spaces(this);
	}
};

Str_split_at_spacesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitStr_split_at_spaces(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Str_split_at_spacesContext = Str_split_at_spacesContext;

VenbraceNoCodeParser.prototype.str_split_at_spaces = function() {

    var localctx = new Str_split_at_spacesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, VenbraceNoCodeParser.RULE_str_split_at_spaces);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 472;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 473;
        this.match(VenbraceNoCodeParser.SPLIT_AT_SPACES);
        this.state = 474;
        this.expr_block();
        this.state = 475;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_getter;
    return this;
}

GetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetterContext.prototype.constructor = GetterContext;

GetterContext.prototype.ID = function() {
    return this.getToken(VenbraceNoCodeParser.ID, 0);
};

GetterContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

GetterContext.prototype.GET = function() {
    return this.getToken(VenbraceNoCodeParser.GET, 0);
};

GetterContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

GetterContext.prototype.GLOBAL = function() {
    return this.getToken(VenbraceNoCodeParser.GLOBAL, 0);
};

GetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterGetter(this);
	}
};

GetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitGetter(this);
	}
};

GetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitGetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.GetterContext = GetterContext;

VenbraceNoCodeParser.prototype.getter = function() {

    var localctx = new GetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, VenbraceNoCodeParser.RULE_getter);
    var _la = 0; // Token type
    try {
        this.state = 485;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceNoCodeParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 477;
            this.match(VenbraceNoCodeParser.ID);
            break;
        case VenbraceNoCodeParser.LPAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 478;
            this.match(VenbraceNoCodeParser.LPAREN);
            this.state = 479;
            this.match(VenbraceNoCodeParser.GET);
            this.state = 481;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceNoCodeParser.GLOBAL) {
                this.state = 480;
                this.match(VenbraceNoCodeParser.GLOBAL);
            }

            this.state = 483;
            this.match(VenbraceNoCodeParser.ID);
            this.state = 484;
            this.match(VenbraceNoCodeParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Call_procedure_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_call_procedure_expr;
    this.component = null; // Token
    this.method = null; // Token
    this.arg = null; // Expr_blockContext
    return this;
}

Call_procedure_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Call_procedure_exprContext.prototype.constructor = Call_procedure_exprContext;

Call_procedure_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Call_procedure_exprContext.prototype.CALL = function() {
    return this.getToken(VenbraceNoCodeParser.CALL, 0);
};

Call_procedure_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Call_procedure_exprContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.ID);
    } else {
        return this.getToken(VenbraceNoCodeParser.ID, i);
    }
};


Call_procedure_exprContext.prototype.DOT = function() {
    return this.getToken(VenbraceNoCodeParser.DOT, 0);
};

Call_procedure_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Call_procedure_exprContext.prototype.label = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LabelContext);
    } else {
        return this.getTypedRuleContext(LabelContext,i);
    }
};

Call_procedure_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterCall_procedure_expr(this);
	}
};

Call_procedure_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitCall_procedure_expr(this);
	}
};

Call_procedure_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitCall_procedure_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Call_procedure_exprContext = Call_procedure_exprContext;

VenbraceNoCodeParser.prototype.call_procedure_expr = function() {

    var localctx = new Call_procedure_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, VenbraceNoCodeParser.RULE_call_procedure_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 487;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 488;
        this.match(VenbraceNoCodeParser.CALL);
        this.state = 493;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            this.state = 489;
            this.match(VenbraceNoCodeParser.ID);
            break;

        case 2:
            this.state = 490;
            localctx.component = this.match(VenbraceNoCodeParser.ID);
            this.state = 491;
            this.match(VenbraceNoCodeParser.DOT);
            this.state = 492;
            localctx.method = this.match(VenbraceNoCodeParser.ID);
            break;

        }
        this.state = 501;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VenbraceNoCodeParser.LPAREN) | (1 << VenbraceNoCodeParser.TRUE) | (1 << VenbraceNoCodeParser.FALSE))) !== 0) || ((((_la - 119)) & ~0x1f) == 0 && ((1 << (_la - 119)) & ((1 << (VenbraceNoCodeParser.NUMBER - 119)) | (1 << (VenbraceNoCodeParser.NEG_NUM - 119)) | (1 << (VenbraceNoCodeParser.COMPONENT_PROPERTY - 119)) | (1 << (VenbraceNoCodeParser.ID - 119)) | (1 << (VenbraceNoCodeParser.STRING - 119)))) !== 0)) {
            this.state = 496;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
            if(la_===1) {
                this.state = 495;
                this.label();

            }
            this.state = 498;
            localctx.arg = this.expr_block();
            this.state = 503;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 504;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Local_var_decl_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_local_var_decl_expr;
    this.init_val = null; // Expr_blockContext
    this.body = null; // Expr_blockContext
    return this;
}

Local_var_decl_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Local_var_decl_exprContext.prototype.constructor = Local_var_decl_exprContext;

Local_var_decl_exprContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

Local_var_decl_exprContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

Local_var_decl_exprContext.prototype.expr_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expr_blockContext);
    } else {
        return this.getTypedRuleContext(Expr_blockContext,i);
    }
};

Local_var_decl_exprContext.prototype.INITIALIZE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.INITIALIZE);
    } else {
        return this.getToken(VenbraceNoCodeParser.INITIALIZE, i);
    }
};


Local_var_decl_exprContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.ID);
    } else {
        return this.getToken(VenbraceNoCodeParser.ID, i);
    }
};


Local_var_decl_exprContext.prototype.IN = function() {
    return this.getToken(VenbraceNoCodeParser.IN, 0);
};

Local_var_decl_exprContext.prototype.LOCAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.LOCAL);
    } else {
        return this.getToken(VenbraceNoCodeParser.LOCAL, i);
    }
};


Local_var_decl_exprContext.prototype.TO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(VenbraceNoCodeParser.TO);
    } else {
        return this.getToken(VenbraceNoCodeParser.TO, i);
    }
};


Local_var_decl_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterLocal_var_decl_expr(this);
	}
};

Local_var_decl_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitLocal_var_decl_expr(this);
	}
};

Local_var_decl_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitLocal_var_decl_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Local_var_decl_exprContext = Local_var_decl_exprContext;

VenbraceNoCodeParser.prototype.local_var_decl_expr = function() {

    var localctx = new Local_var_decl_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, VenbraceNoCodeParser.RULE_local_var_decl_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 506;
        this.match(VenbraceNoCodeParser.LPAREN);
        this.state = 518;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===VenbraceNoCodeParser.INITIALIZE) {
            this.state = 507;
            this.match(VenbraceNoCodeParser.INITIALIZE);
            this.state = 509;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceNoCodeParser.LOCAL) {
                this.state = 508;
                this.match(VenbraceNoCodeParser.LOCAL);
            }

            this.state = 511;
            this.match(VenbraceNoCodeParser.ID);
            this.state = 513;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===VenbraceNoCodeParser.TO) {
                this.state = 512;
                this.match(VenbraceNoCodeParser.TO);
            }

            this.state = 515;
            localctx.init_val = this.expr_block();
            this.state = 520;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 522;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===VenbraceNoCodeParser.IN) {
            this.state = 521;
            this.match(VenbraceNoCodeParser.IN);
        }

        this.state = 524;
        localctx.body = this.expr_block();
        this.state = 525;
        this.match(VenbraceNoCodeParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.atom_elements = function() {
    return this.getTypedRuleContext(Atom_elementsContext,0);
};

AtomContext.prototype.LPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.LPAREN, 0);
};

AtomContext.prototype.RPAREN = function() {
    return this.getToken(VenbraceNoCodeParser.RPAREN, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.AtomContext = AtomContext;

VenbraceNoCodeParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, VenbraceNoCodeParser.RULE_atom);
    try {
        this.state = 532;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VenbraceNoCodeParser.TRUE:
        case VenbraceNoCodeParser.FALSE:
        case VenbraceNoCodeParser.NUMBER:
        case VenbraceNoCodeParser.NEG_NUM:
        case VenbraceNoCodeParser.COMPONENT_PROPERTY:
        case VenbraceNoCodeParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 527;
            this.atom_elements();
            break;
        case VenbraceNoCodeParser.LPAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 528;
            this.match(VenbraceNoCodeParser.LPAREN);
            this.state = 529;
            this.atom_elements();
            this.state = 530;
            this.match(VenbraceNoCodeParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Atom_elementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_atom_elements;
    return this;
}

Atom_elementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Atom_elementsContext.prototype.constructor = Atom_elementsContext;

Atom_elementsContext.prototype.NUMBER = function() {
    return this.getToken(VenbraceNoCodeParser.NUMBER, 0);
};

Atom_elementsContext.prototype.NEG_NUM = function() {
    return this.getToken(VenbraceNoCodeParser.NEG_NUM, 0);
};

Atom_elementsContext.prototype.STRING = function() {
    return this.getToken(VenbraceNoCodeParser.STRING, 0);
};

Atom_elementsContext.prototype.TRUE = function() {
    return this.getToken(VenbraceNoCodeParser.TRUE, 0);
};

Atom_elementsContext.prototype.FALSE = function() {
    return this.getToken(VenbraceNoCodeParser.FALSE, 0);
};

Atom_elementsContext.prototype.COMPONENT_PROPERTY = function() {
    return this.getToken(VenbraceNoCodeParser.COMPONENT_PROPERTY, 0);
};

Atom_elementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterAtom_elements(this);
	}
};

Atom_elementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitAtom_elements(this);
	}
};

Atom_elementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitAtom_elements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.Atom_elementsContext = Atom_elementsContext;

VenbraceNoCodeParser.prototype.atom_elements = function() {

    var localctx = new Atom_elementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, VenbraceNoCodeParser.RULE_atom_elements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 534;
        _la = this._input.LA(1);
        if(!(_la===VenbraceNoCodeParser.TRUE || _la===VenbraceNoCodeParser.FALSE || ((((_la - 119)) & ~0x1f) == 0 && ((1 << (_la - 119)) & ((1 << (VenbraceNoCodeParser.NUMBER - 119)) | (1 << (VenbraceNoCodeParser.NEG_NUM - 119)) | (1 << (VenbraceNoCodeParser.COMPONENT_PROPERTY - 119)) | (1 << (VenbraceNoCodeParser.STRING - 119)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VenbraceNoCodeParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.ID = function() {
    return this.getToken(VenbraceNoCodeParser.ID, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof VenbraceNoCodeListener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof VenbraceNoCodeVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




VenbraceNoCodeParser.LabelContext = LabelContext;

VenbraceNoCodeParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, VenbraceNoCodeParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 536;
        this.match(VenbraceNoCodeParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.VenbraceNoCodeParser = VenbraceNoCodeParser;
