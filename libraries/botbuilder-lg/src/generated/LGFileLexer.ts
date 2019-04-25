// Generated from LGFileLexer.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class LGFileLexer extends Lexer {
	public static readonly COMMENTS = 1;
	public static readonly WS = 2;
	public static readonly NEWLINE = 3;
	public static readonly HASH = 4;
	public static readonly DASH = 5;
	public static readonly INVALID_TOKEN_DEFAULT_MODE = 6;
	public static readonly WS_IN_NAME = 7;
	public static readonly IDENTIFIER = 8;
	public static readonly DOT = 9;
	public static readonly OPEN_PARENTHESIS = 10;
	public static readonly CLOSE_PARENTHESIS = 11;
	public static readonly COMMA = 12;
	public static readonly INVALID_SEPERATE_CHAR = 13;
	public static readonly WS_IN_BODY_IGNORED = 14;
	public static readonly IFELSE = 15;
	public static readonly MULTI_LINE_TEXT = 16;
	public static readonly ESCAPE_CHARACTER = 17;
	public static readonly INVALID_ESCAPE = 18;
	public static readonly EXPRESSION = 19;
	public static readonly TEMPLATE_REF = 20;
	public static readonly TEXT_SEPARATOR = 21;
	public static readonly TEXT = 22;
	public static readonly TEMPLATE_NAME_MODE = 1;
	public static readonly TEMPLATE_BODY_MODE = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "TEMPLATE_NAME_MODE", "TEMPLATE_BODY_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LETTER", "NUMBER", "UNICODE_BOM", "NON_BREAKING_SPACE", "COMMENTS", "WS", 
		"NEWLINE", "HASH", "DASH", "INVALID_TOKEN_DEFAULT_MODE", "WS_IN_NAME", 
		"NEWLINE_IN_NAME", "IDENTIFIER", "DOT", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", 
		"COMMA", "INVALID_SEPERATE_CHAR", "WS_IN_BODY_IGNORED", "WS_IN_BODY", 
		"NEWLINE_IN_BODY", "IFELSE", "MULTI_LINE_TEXT", "ESCAPE_CHARACTER", "INVALID_ESCAPE", 
		"EXPRESSION", "TEMPLATE_REF", "TEXT_SEPARATOR", "TEXT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'#'", undefined, undefined, 
		undefined, undefined, "'.'", "'('", "')'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENTS", "WS", "NEWLINE", "HASH", "DASH", "INVALID_TOKEN_DEFAULT_MODE", 
		"WS_IN_NAME", "IDENTIFIER", "DOT", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", 
		"COMMA", "INVALID_SEPERATE_CHAR", "WS_IN_BODY_IGNORED", "IFELSE", "MULTI_LINE_TEXT", 
		"ESCAPE_CHARACTER", "INVALID_ESCAPE", "EXPRESSION", "TEMPLATE_REF", "TEXT_SEPARATOR", 
		"TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LGFileLexer._LITERAL_NAMES, LGFileLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LGFileLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	  ignoreWS = true;             // usually we ignore whitespace, but inside template, whitespace is significant
	  expectIfElse = false;        // whether we are expecting IF/ELSEIF/ELSE


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(LGFileLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "LGFileLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return LGFileLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return LGFileLexer._serializedATN; }

	// @Override
	public get modeNames(): string[] { return LGFileLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 8:
			this.DASH_action(_localctx, actionIndex);
			break;

		case 20:
			this.NEWLINE_IN_BODY_action(_localctx, actionIndex);
			break;

		case 21:
			this.IFELSE_action(_localctx, actionIndex);
			break;

		case 22:
			this.MULTI_LINE_TEXT_action(_localctx, actionIndex);
			break;

		case 23:
			this.ESCAPE_CHARACTER_action(_localctx, actionIndex);
			break;

		case 25:
			this.EXPRESSION_action(_localctx, actionIndex);
			break;

		case 26:
			this.TEMPLATE_REF_action(_localctx, actionIndex);
			break;

		case 27:
			this.TEXT_SEPARATOR_action(_localctx, actionIndex);
			break;

		case 28:
			this.TEXT_action(_localctx, actionIndex);
			break;
		}
	}
	private DASH_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.expectIfElse = true;
			break;
		}
	}
	private NEWLINE_IN_BODY_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.ignoreWS = true;
			break;
		}
	}
	private IFELSE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			 this.ignoreWS = true;
			break;
		}
	}
	private MULTI_LINE_TEXT_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			 this.ignoreWS = false; this.expectIfElse = false;
			break;
		}
	}
	private ESCAPE_CHARACTER_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			 this.ignoreWS = false; this.expectIfElse = false;
			break;
		}
	}
	private EXPRESSION_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			 this.ignoreWS = false; this.expectIfElse = false;
			break;
		}
	}
	private TEMPLATE_REF_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			 this.ignoreWS = false; this.expectIfElse = false;
			break;
		}
	}
	private TEXT_SEPARATOR_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 7:
			 this.ignoreWS = false; this.expectIfElse = false;
			break;
		}
	}
	private TEXT_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 8:
			 this.ignoreWS = false; this.expectIfElse = false;
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.WS_IN_BODY_IGNORED_sempred(_localctx, predIndex);

		case 21:
			return this.IFELSE_sempred(_localctx, predIndex);
		}
		return true;
	}
	private WS_IN_BODY_IGNORED_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.ignoreWS;
		}
		return true;
	}
	private IFELSE_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.expectIfElse;
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x18\u0110\b\x01" +
		"\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04" +
		"\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f" +
		"\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11" +
		"\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16" +
		"\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B" +
		"\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x06\x06J\n\x06\r" +
		"\x06\x0E\x06K\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x06\x07S\n\x07\r" +
		"\x07\x0E\x07T\x03\x07\x03\x07\x03\b\x05\bZ\n\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x06\fn\n\f\r\f\x0E\fo\x03\f\x03\f\x03\r\x05\ru\n\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x7F\n\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x07\x0E\x84\n\x0E\f\x0E\x0E\x0E\x87\v\x0E\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x06\x14\x96\n\x14\r\x14\x0E\x14\x97\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x06\x15\xA1\n\x15\r\x15\x0E" +
		"\x15\xA2\x03\x15\x03\x15\x03\x16\x05\x16\xA8\n\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xCE\n\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18" +
		"\xD8\n\x18\f\x18\x0E\x18\xDB\v\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\xEC\n\x19\x03\x1A\x03\x1A\x05\x1A\xF0\n\x1A\x03\x1B" +
		"\x03\x1B\x07\x1B\xF4\n\x1B\f\x1B\x0E\x1B\xF7\v\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\xFF\n\x1C\f\x1C\x0E\x1C\u0102\v\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x06\x1E\u010B" +
		"\n\x1E\r\x1E\x0E\x1E\u010C\x03\x1E\x03\x1E\x03\xD9\x02\x02\x1F\x05\x02" +
		"\x02\x07\x02\x02\t\x02\x02\v\x02\x02\r\x02\x03\x0F\x02\x04\x11\x02\x05" +
		"\x13\x02\x06\x15\x02\x07\x17\x02\b\x19\x02\t\x1B\x02\x02\x1D\x02\n\x1F" +
		"\x02\v!\x02\f#\x02\r%\x02\x0E\'\x02\x0F)\x02\x10+\x02\x02-\x02\x02/\x02" +
		"\x111\x02\x123\x02\x135\x02\x147\x02\x159\x02\x16;\x02\x17=\x02\x18\x05" +
		"\x02\x03\x04\r\x04\x02C\\c|\x04\x02&&@@\x04\x02\f\f\x0F\x0F\x04\x02\v" +
		"\v\"\"\x04\x02//aa\x03\x02==\x07\x02__ppttvv\x7F\x7F\x06\x02\f\f\x0F\x0F" +
		"}}\x7F\x7F\x05\x02\f\f\x0F\x0F__\n\x02\v\f\x0F\x0F\"\"*+]]__}}\x7F\x7F" +
		"\t\x02\v\f\x0F\x0F\"\"*+]_}}\x7F\x7F\u012C\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x03\x1B" +
		"\x03\x02\x02\x02\x03\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x03!" +
		"\x03\x02\x02\x02\x03#\x03\x02\x02\x02\x03%\x03\x02\x02\x02\x03\'\x03\x02" +
		"\x02\x02\x04)\x03\x02\x02\x02\x04+\x03\x02\x02\x02\x04-\x03\x02\x02\x02" +
		"\x04/\x03\x02\x02\x02\x041\x03\x02\x02\x02\x043\x03\x02\x02\x02\x045\x03" +
		"\x02\x02\x02\x047\x03\x02\x02\x02\x049\x03\x02\x02\x02\x04;\x03\x02\x02" +
		"\x02\x04=\x03\x02\x02\x02\x05?\x03\x02\x02\x02\x07A\x03\x02\x02\x02\t" +
		"C\x03\x02\x02\x02\vE\x03\x02\x02\x02\rG\x03\x02\x02\x02\x0FR\x03\x02\x02" +
		"\x02\x11Y\x03\x02\x02\x02\x13_\x03\x02\x02\x02\x15c\x03\x02\x02\x02\x17" +
		"h\x03\x02\x02\x02\x19m\x03\x02\x02\x02\x1Bt\x03\x02\x02\x02\x1D~\x03\x02" +
		"\x02\x02\x1F\x88\x03\x02\x02\x02!\x8A\x03\x02\x02\x02#\x8C\x03\x02\x02" +
		"\x02%\x8E\x03\x02\x02\x02\'\x90\x03\x02\x02\x02)\x95\x03\x02\x02\x02+" +
		"\xA0\x03\x02\x02\x02-\xA7\x03\x02\x02\x02/\xCD\x03\x02\x02\x021\xD2\x03" +
		"\x02\x02\x023\xEB\x03\x02\x02\x025\xED\x03\x02\x02\x027\xF1\x03\x02\x02" +
		"\x029\xFB\x03\x02\x02\x02;\u0106\x03\x02\x02\x02=\u010A\x03\x02\x02\x02" +
		"?@\t\x02\x02\x02@\x06\x03\x02\x02\x02AB\x042;\x02B\b\x03\x02\x02\x02C" +
		"D\x07\uFF01\x02\x02D\n\x03\x02\x02\x02EF\x07\xA2\x02\x02F\f\x03\x02\x02" +
		"\x02GI\t\x03\x02\x02HJ\n\x04\x02\x02IH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"KI\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x03\x02\x02\x02MN\b\x06\x02\x02" +
		"N\x0E\x03\x02\x02\x02OS\t\x05\x02\x02PS\x05\v\x05\x02QS\x05\t\x04\x02" +
		"RO\x03\x02\x02\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02ST\x03\x02\x02\x02" +
		"TR\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02VW\b\x07\x02\x02" +
		"W\x10\x03\x02\x02\x02XZ\x07\x0F\x02\x02YX\x03\x02\x02\x02YZ\x03\x02\x02" +
		"\x02Z[\x03\x02\x02\x02[\\\x07\f\x02\x02\\]\x03\x02\x02\x02]^\b\b\x02\x02" +
		"^\x12\x03\x02\x02\x02_`\x07%\x02\x02`a\x03\x02\x02\x02ab\b\t\x03\x02b" +
		"\x14\x03\x02\x02\x02cd\x07/\x02\x02de\b\n\x04\x02ef\x03\x02\x02\x02fg" +
		"\b\n\x05\x02g\x16\x03\x02\x02\x02hi\v\x02\x02\x02i\x18\x03\x02\x02\x02" +
		"jn\t\x05\x02\x02kn\x05\v\x05\x02ln\x05\t\x04\x02mj\x03\x02\x02\x02mk\x03" +
		"\x02\x02\x02ml\x03\x02\x02\x02no\x03\x02\x02\x02om\x03\x02\x02\x02op\x03" +
		"\x02\x02\x02pq\x03\x02\x02\x02qr\b\f\x02\x02r\x1A\x03\x02\x02\x02su\x07" +
		"\x0F\x02\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x07" +
		"\f\x02\x02wx\x03\x02\x02\x02xy\b\r\x06\x02yz\b\r\x07\x02z\x1C\x03\x02" +
		"\x02\x02{\x7F\x05\x05\x02\x02|\x7F\x05\x07\x03\x02}\x7F\x07a\x02\x02~" +
		"{\x03\x02\x02\x02~|\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F\x85\x03\x02" +
		"\x02\x02\x80\x84\x05\x05\x02\x02\x81\x84\x05\x07\x03\x02\x82\x84\t\x06" +
		"\x02\x02\x83\x80\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x82\x03\x02" +
		"\x02\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02" +
		"\x02\x02\x86\x1E\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x89\x070" +
		"\x02\x02\x89 \x03\x02\x02\x02\x8A\x8B\x07*\x02\x02\x8B\"\x03\x02\x02\x02" +
		"\x8C\x8D\x07+\x02\x02\x8D$\x03\x02\x02\x02\x8E\x8F\x07.\x02\x02\x8F&\x03" +
		"\x02\x02\x02\x90\x91\t\x07\x02\x02\x91(\x03\x02\x02\x02\x92\x96\t\x05" +
		"\x02\x02\x93\x96\x05\v\x05\x02\x94\x96\x05\t\x04\x02\x95\x92\x03\x02\x02" +
		"\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02" +
		"\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02" +
		"\x02\x99\x9A\x06\x14\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\b\x14\x02" +
		"\x02\x9C*\x03\x02\x02\x02\x9D\xA1\t\x05\x02\x02\x9E\xA1\x05\v\x05\x02" +
		"\x9F\xA1\x05\t\x04\x02\xA0\x9D\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02" +
		"\xA0\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02" +
		"\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\b\x15\b\x02\xA5" +
		",\x03\x02\x02\x02\xA6\xA8\x07\x0F\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7" +
		"\xA8\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x07\f\x02\x02\xAA" +
		"\xAB\b\x16\t\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\b\x16\x06\x02\xAD\xAE" +
		"\b\x16\x07\x02\xAE.\x03\x02\x02\x02\xAF\xB0\x07k\x02\x02\xB0\xB1\x07h" +
		"\x02\x02\xB1\xCE\x07<\x02\x02\xB2\xB3\x07K\x02\x02\xB3\xB4\x07H\x02\x02" +
		"\xB4\xCE\x07<\x02\x02\xB5\xB6\x07g\x02\x02\xB6\xB7\x07n\x02\x02\xB7\xB8" +
		"\x07u\x02\x02\xB8\xB9\x07g\x02\x02\xB9\xBA\x07k\x02\x02\xBA\xBB\x07h\x02" +
		"\x02\xBB\xCE\x07<\x02\x02\xBC\xBD\x07G\x02\x02\xBD\xBE\x07N\x02\x02\xBE" +
		"\xBF\x07U\x02\x02\xBF\xC0\x07G\x02\x02\xC0\xC1\x07K\x02\x02\xC1\xC2\x07" +
		"H\x02\x02\xC2\xCE\x07<\x02\x02\xC3\xC4\x07g\x02\x02\xC4\xC5\x07n\x02\x02" +
		"\xC5\xC6\x07u\x02\x02\xC6\xC7\x07g\x02\x02\xC7\xCE\x07<\x02\x02\xC8\xC9" +
		"\x07G\x02\x02\xC9\xCA\x07N\x02\x02\xCA\xCB\x07U\x02\x02\xCB\xCC\x07G\x02" +
		"\x02\xCC\xCE\x07<\x02\x02\xCD\xAF\x03\x02\x02\x02\xCD\xB2\x03\x02\x02" +
		"\x02\xCD\xB5\x03\x02\x02\x02\xCD\xBC\x03\x02\x02\x02\xCD\xC3\x03\x02\x02" +
		"\x02\xCD\xC8\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x06\x17\x03" +
		"\x02\xD0\xD1\b\x17\n\x02\xD10\x03\x02\x02\x02\xD2\xD3\x07b\x02\x02\xD3" +
		"\xD4\x07b\x02\x02\xD4\xD5\x07b\x02\x02\xD5\xD9\x03\x02\x02\x02\xD6\xD8" +
		"\v\x02\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xDA" +
		"\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDC\x03\x02\x02\x02\xDB\xD9" +
		"\x03\x02\x02\x02\xDC\xDD\x07b\x02\x02\xDD\xDE\x07b\x02\x02\xDE\xDF\x07" +
		"b\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\b\x18\v\x02\xE12\x03\x02\x02" +
		"\x02\xE2\xE3\x07^\x02\x02\xE3\xEC\x07}\x02\x02\xE4\xE5\x07^\x02\x02\xE5" +
		"\xEC\x07]\x02\x02\xE6\xE7\x07^\x02\x02\xE7\xEC\x07^\x02\x02\xE8\xE9\x07" +
		"^\x02\x02\xE9\xEA\t\b\x02\x02\xEA\xEC\b\x19\f\x02\xEB\xE2\x03\x02\x02" +
		"\x02\xEB\xE4\x03\x02\x02\x02\xEB\xE6\x03\x02\x02\x02\xEB\xE8\x03\x02\x02" +
		"\x02\xEC4\x03\x02\x02\x02\xED\xEF\x07^\x02\x02\xEE\xF0\n\x04\x02\x02\xEF" +
		"\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF06\x03\x02\x02\x02\xF1" +
		"\xF5\x07}\x02\x02\xF2\xF4\n\t\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4\xF7" +
		"\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8" +
		"\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xF9\x07\x7F\x02\x02\xF9\xFA" +
		"\b\x1B\r\x02\xFA8\x03\x02\x02\x02\xFB\u0100\x07]\x02\x02\xFC\xFF\n\n\x02" +
		"\x02\xFD\xFF\x059\x1C\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFD\x03\x02\x02" +
		"\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03" +
		"\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103" +
		"\u0104\x07_\x02\x02\u0104\u0105\b\x1C\x0E\x02\u0105:\x03\x02\x02\x02\u0106" +
		"\u0107\t\v\x02\x02\u0107\u0108\b\x1D\x0F\x02\u0108<\x03\x02\x02\x02\u0109" +
		"\u010B\n\f\x02\x02\u010A\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02" +
		"\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E" +
		"\x03\x02\x02\x02\u010E\u010F\b\x1E\x10\x02\u010F>\x03\x02\x02\x02\x1C" +
		"\x02\x03\x04KRTYmot~\x83\x85\x95\x97\xA0\xA2\xA7\xCD\xD9\xEB\xEF\xF5\xFE" +
		"\u0100\u010C\x11\b\x02\x02\x07\x03\x02\x03\n\x02\x07\x04\x02\t\x05\x02" +
		"\x06\x02\x02\t\x04\x02\x03\x16\x03\x03\x17\x04\x03\x18\x05\x03\x19\x06" +
		"\x03\x1B\x07\x03\x1C\b\x03\x1D\t\x03\x1E\n";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LGFileLexer.__ATN) {
			LGFileLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LGFileLexer._serializedATN));
		}

		return LGFileLexer.__ATN;
	}

}
