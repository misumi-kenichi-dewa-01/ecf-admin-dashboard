import { k as createAstro, l as createComponent, m as renderTemplate, p as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_DbSP0ska.mjs';
import 'kleur/colors';
import { createShikiHighlighter } from '@astrojs/markdown-remark';

const bundledLanguagesInfo = [
  {
    "id": "abap",
    "name": "ABAP",
    "import": () => import('./abap_PfGvLjtO.mjs')
  },
  {
    "id": "actionscript-3",
    "name": "ActionScript",
    "import": () => import('./actionscript-3_B5SPWWQA.mjs')
  },
  {
    "id": "ada",
    "name": "Ada",
    "import": () => import('./ada_CjZNw5Pr.mjs')
  },
  {
    "id": "angular-html",
    "name": "Angular HTML",
    "import": () => import('./angular-html_mmdXksyL.mjs').then(n => n.e)
  },
  {
    "id": "angular-ts",
    "name": "Angular TypeScript",
    "import": () => import('./angular-ts_CvDNN9WD.mjs')
  },
  {
    "id": "apache",
    "name": "Apache Conf",
    "import": () => import('./apache_US6q4No-.mjs')
  },
  {
    "id": "apex",
    "name": "Apex",
    "import": () => import('./apex_C1njo6Pa.mjs')
  },
  {
    "id": "apl",
    "name": "APL",
    "import": () => import('./apl_Cdvys3yR.mjs')
  },
  {
    "id": "applescript",
    "name": "AppleScript",
    "import": () => import('./applescript_CnaU4fBc.mjs')
  },
  {
    "id": "ara",
    "name": "Ara",
    "import": () => import('./ara_DJeuA4UL.mjs')
  },
  {
    "id": "asciidoc",
    "name": "AsciiDoc",
    "aliases": [
      "adoc"
    ],
    "import": () => import('./asciidoc_CZWMETwT.mjs')
  },
  {
    "id": "asm",
    "name": "Assembly",
    "import": () => import('./asm_Ckd3WCx6.mjs')
  },
  {
    "id": "astro",
    "name": "Astro",
    "import": () => import('./astro_hxmbhYzX.mjs')
  },
  {
    "id": "awk",
    "name": "AWK",
    "import": () => import('./awk_Bp3NCCJk.mjs')
  },
  {
    "id": "ballerina",
    "name": "Ballerina",
    "import": () => import('./ballerina_HV56tcmn.mjs')
  },
  {
    "id": "bat",
    "name": "Batch File",
    "aliases": [
      "batch"
    ],
    "import": () => import('./bat_DH3piprL.mjs')
  },
  {
    "id": "beancount",
    "name": "Beancount",
    "import": () => import('./beancount_QTJZpiNr.mjs')
  },
  {
    "id": "berry",
    "name": "Berry",
    "aliases": [
      "be"
    ],
    "import": () => import('./berry_fg7zcndx.mjs')
  },
  {
    "id": "bibtex",
    "name": "BibTeX",
    "import": () => import('./bibtex__nVQ7ksi.mjs')
  },
  {
    "id": "bicep",
    "name": "Bicep",
    "import": () => import('./bicep_5SOfe24I.mjs')
  },
  {
    "id": "blade",
    "name": "Blade",
    "import": () => import('./blade_Bp1duIZT.mjs')
  },
  {
    "id": "c",
    "name": "C",
    "import": () => import('./c_RparLEUA.mjs')
  },
  {
    "id": "cadence",
    "name": "Cadence",
    "aliases": [
      "cdc"
    ],
    "import": () => import('./cadence_y7JF8AVn.mjs')
  },
  {
    "id": "clarity",
    "name": "Clarity",
    "import": () => import('./clarity_Cnus002V.mjs')
  },
  {
    "id": "clojure",
    "name": "Clojure",
    "aliases": [
      "clj"
    ],
    "import": () => import('./clojure_DUldyaQj.mjs')
  },
  {
    "id": "cmake",
    "name": "CMake",
    "import": () => import('./cmake_a-8EfZAH.mjs')
  },
  {
    "id": "cobol",
    "name": "COBOL",
    "import": () => import('./cobol_DkGiojz3.mjs')
  },
  {
    "id": "codeowners",
    "name": "CODEOWNERS",
    "import": () => import('./codeowners_Cn8XxHOJ.mjs')
  },
  {
    "id": "codeql",
    "name": "CodeQL",
    "aliases": [
      "ql"
    ],
    "import": () => import('./codeql_DSqC2RW9.mjs')
  },
  {
    "id": "coffee",
    "name": "CoffeeScript",
    "aliases": [
      "coffeescript"
    ],
    "import": () => import('./coffee_CP1eCvJE.mjs')
  },
  {
    "id": "common-lisp",
    "name": "Common Lisp",
    "aliases": [
      "lisp"
    ],
    "import": () => import('./common-lisp_C5mZjXQi.mjs')
  },
  {
    "id": "cpp",
    "name": "C++",
    "aliases": [
      "c++"
    ],
    "import": () => import('./cpp_C8nPrZcv.mjs')
  },
  {
    "id": "crystal",
    "name": "Crystal",
    "import": () => import('./crystal_BQMpkZFJ.mjs')
  },
  {
    "id": "csharp",
    "name": "C#",
    "aliases": [
      "c#",
      "cs"
    ],
    "import": () => import('./csharp_DhI_1ny9.mjs')
  },
  {
    "id": "css",
    "name": "CSS",
    "import": () => import('./css_DoNn9y_q.mjs')
  },
  {
    "id": "csv",
    "name": "CSV",
    "import": () => import('./csv_SV4Sx2_F.mjs')
  },
  {
    "id": "cue",
    "name": "CUE",
    "import": () => import('./cue_CLkJwmoA.mjs')
  },
  {
    "id": "cypher",
    "name": "Cypher",
    "aliases": [
      "cql"
    ],
    "import": () => import('./cypher_MPgrTNlt.mjs')
  },
  {
    "id": "d",
    "name": "D",
    "import": () => import('./d_CQFbVqSj.mjs')
  },
  {
    "id": "dart",
    "name": "Dart",
    "import": () => import('./dart_DFZ6KCMX.mjs')
  },
  {
    "id": "dax",
    "name": "DAX",
    "import": () => import('./dax_DT96b3ev.mjs')
  },
  {
    "id": "desktop",
    "name": "Desktop",
    "import": () => import('./desktop_CgQIgD52.mjs')
  },
  {
    "id": "diff",
    "name": "Diff",
    "import": () => import('./diff_VMUPACBq.mjs')
  },
  {
    "id": "docker",
    "name": "Dockerfile",
    "aliases": [
      "dockerfile"
    ],
    "import": () => import('./docker_t1MdAjrc.mjs')
  },
  {
    "id": "dream-maker",
    "name": "Dream Maker",
    "import": () => import('./dream-maker_CTzOhkuS.mjs')
  },
  {
    "id": "elixir",
    "name": "Elixir",
    "import": () => import('./elixir_aqbmNQp4.mjs')
  },
  {
    "id": "elm",
    "name": "Elm",
    "import": () => import('./elm_BO2IPv87.mjs')
  },
  {
    "id": "emacs-lisp",
    "name": "Emacs Lisp",
    "aliases": [
      "elisp"
    ],
    "import": () => import('./emacs-lisp_B9JeC_yr.mjs')
  },
  {
    "id": "erb",
    "name": "ERB",
    "import": () => import('./erb_DFoKONhR.mjs')
  },
  {
    "id": "erlang",
    "name": "Erlang",
    "aliases": [
      "erl"
    ],
    "import": () => import('./erlang_C0ORVSrU.mjs')
  },
  {
    "id": "fennel",
    "name": "Fennel",
    "import": () => import('./fennel_BDlLDsUs.mjs')
  },
  {
    "id": "fish",
    "name": "Fish",
    "import": () => import('./fish_Mo8MO8cG.mjs')
  },
  {
    "id": "fluent",
    "name": "Fluent",
    "aliases": [
      "ftl"
    ],
    "import": () => import('./fluent_OTCBTsog.mjs')
  },
  {
    "id": "fortran-fixed-form",
    "name": "Fortran (Fixed Form)",
    "aliases": [
      "f",
      "for",
      "f77"
    ],
    "import": () => import('./fortran-fixed-form_CWBK-qys.mjs')
  },
  {
    "id": "fortran-free-form",
    "name": "Fortran (Free Form)",
    "aliases": [
      "f90",
      "f95",
      "f03",
      "f08",
      "f18"
    ],
    "import": () => import('./fortran-free-form_BoQi57qK.mjs')
  },
  {
    "id": "fsharp",
    "name": "F#",
    "aliases": [
      "f#",
      "fs"
    ],
    "import": () => import('./fsharp_DQMPQ3It.mjs')
  },
  {
    "id": "gdresource",
    "name": "GDResource",
    "import": () => import('./gdresource_Dgfp_Ouv.mjs')
  },
  {
    "id": "gdscript",
    "name": "GDScript",
    "import": () => import('./gdscript_CccYvLzp.mjs')
  },
  {
    "id": "gdshader",
    "name": "GDShader",
    "import": () => import('./gdshader_BO43XYMV.mjs')
  },
  {
    "id": "genie",
    "name": "Genie",
    "import": () => import('./genie_COTUmeg_.mjs')
  },
  {
    "id": "gherkin",
    "name": "Gherkin",
    "import": () => import('./gherkin_YXIT6vWv.mjs')
  },
  {
    "id": "git-commit",
    "name": "Git Commit Message",
    "import": () => import('./git-commit_LLtp05c2.mjs')
  },
  {
    "id": "git-rebase",
    "name": "Git Rebase Message",
    "import": () => import('./git-rebase_6s6EDEEd.mjs')
  },
  {
    "id": "gleam",
    "name": "Gleam",
    "import": () => import('./gleam_4kE90dvb.mjs')
  },
  {
    "id": "glimmer-js",
    "name": "Glimmer JS",
    "aliases": [
      "gjs"
    ],
    "import": () => import('./glimmer-js_B0q9w_cj.mjs')
  },
  {
    "id": "glimmer-ts",
    "name": "Glimmer TS",
    "aliases": [
      "gts"
    ],
    "import": () => import('./glimmer-ts_CVhB-uhM.mjs')
  },
  {
    "id": "glsl",
    "name": "GLSL",
    "import": () => import('./glsl_DA8_-UfD.mjs')
  },
  {
    "id": "gnuplot",
    "name": "Gnuplot",
    "import": () => import('./gnuplot_TLobhHSn.mjs')
  },
  {
    "id": "go",
    "name": "Go",
    "import": () => import('./go_MrpicUGM.mjs')
  },
  {
    "id": "graphql",
    "name": "GraphQL",
    "aliases": [
      "gql"
    ],
    "import": () => import('./graphql_CqgSZOub.mjs')
  },
  {
    "id": "groovy",
    "name": "Groovy",
    "import": () => import('./groovy_xt9ETOUK.mjs')
  },
  {
    "id": "hack",
    "name": "Hack",
    "import": () => import('./hack_Bw9vxlRh.mjs')
  },
  {
    "id": "haml",
    "name": "Ruby Haml",
    "import": () => import('./haml_DjoEJQKO.mjs')
  },
  {
    "id": "handlebars",
    "name": "Handlebars",
    "aliases": [
      "hbs"
    ],
    "import": () => import('./handlebars_D-TVjG9K.mjs')
  },
  {
    "id": "haskell",
    "name": "Haskell",
    "aliases": [
      "hs"
    ],
    "import": () => import('./haskell_UXfZSk_5.mjs')
  },
  {
    "id": "haxe",
    "name": "Haxe",
    "import": () => import('./haxe_uPj594z5.mjs')
  },
  {
    "id": "hcl",
    "name": "HashiCorp HCL",
    "import": () => import('./hcl_i6gSlZqY.mjs')
  },
  {
    "id": "hjson",
    "name": "Hjson",
    "import": () => import('./hjson_Da_qJv9S.mjs')
  },
  {
    "id": "hlsl",
    "name": "HLSL",
    "import": () => import('./hlsl_DxdRzscs.mjs')
  },
  {
    "id": "html",
    "name": "HTML",
    "import": () => import('./html_CJlzQNvm.mjs')
  },
  {
    "id": "html-derivative",
    "name": "HTML (Derivative)",
    "import": () => import('./html-derivative_DaijfY-M.mjs')
  },
  {
    "id": "http",
    "name": "HTTP",
    "import": () => import('./http_u_cs1IGh.mjs')
  },
  {
    "id": "hxml",
    "name": "HXML",
    "import": () => import('./hxml_mE15G8lX.mjs')
  },
  {
    "id": "hy",
    "name": "Hy",
    "import": () => import('./hy_BnFtj81t.mjs')
  },
  {
    "id": "imba",
    "name": "Imba",
    "import": () => import('./imba_DD6KTJhZ.mjs')
  },
  {
    "id": "ini",
    "name": "INI",
    "aliases": [
      "properties"
    ],
    "import": () => import('./ini_UFCqVqOy.mjs')
  },
  {
    "id": "java",
    "name": "Java",
    "import": () => import('./java_D1WhEMP8.mjs')
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "aliases": [
      "js"
    ],
    "import": () => import('./javascript_C67l1L3o.mjs')
  },
  {
    "id": "jinja",
    "name": "Jinja",
    "import": () => import('./jinja_D8vsH_bH.mjs')
  },
  {
    "id": "jison",
    "name": "Jison",
    "import": () => import('./jison_D85eAX5k.mjs')
  },
  {
    "id": "json",
    "name": "JSON",
    "import": () => import('./json_B3_XiHYH.mjs')
  },
  {
    "id": "json5",
    "name": "JSON5",
    "import": () => import('./json5_D9-7wPSE.mjs')
  },
  {
    "id": "jsonc",
    "name": "JSON with Comments",
    "import": () => import('./jsonc_hcRuV5XG.mjs')
  },
  {
    "id": "jsonl",
    "name": "JSON Lines",
    "import": () => import('./jsonl_rweqJBk5.mjs')
  },
  {
    "id": "jsonnet",
    "name": "Jsonnet",
    "import": () => import('./jsonnet_gOCFe-ye.mjs')
  },
  {
    "id": "jssm",
    "name": "JSSM",
    "aliases": [
      "fsl"
    ],
    "import": () => import('./jssm_D7LXcue7.mjs')
  },
  {
    "id": "jsx",
    "name": "JSX",
    "import": () => import('./jsx_Dhek_lNz.mjs')
  },
  {
    "id": "julia",
    "name": "Julia",
    "aliases": [
      "jl"
    ],
    "import": () => import('./julia_tRrJpQ0H.mjs')
  },
  {
    "id": "kotlin",
    "name": "Kotlin",
    "aliases": [
      "kt",
      "kts"
    ],
    "import": () => import('./kotlin_CWqfBwk5.mjs')
  },
  {
    "id": "kusto",
    "name": "Kusto",
    "aliases": [
      "kql"
    ],
    "import": () => import('./kusto_CMHlI5_o.mjs')
  },
  {
    "id": "latex",
    "name": "LaTeX",
    "import": () => import('./latex_B-Na8EHh.mjs')
  },
  {
    "id": "less",
    "name": "Less",
    "import": () => import('./less_DL22pY4I.mjs')
  },
  {
    "id": "liquid",
    "name": "Liquid",
    "import": () => import('./liquid_kd8WRiHH.mjs')
  },
  {
    "id": "log",
    "name": "Log file",
    "import": () => import('./log_DErWLWEo.mjs')
  },
  {
    "id": "logo",
    "name": "Logo",
    "import": () => import('./logo_Ck7ZNctf.mjs')
  },
  {
    "id": "lua",
    "name": "Lua",
    "import": () => import('./lua_DKHRlyN0.mjs')
  },
  {
    "id": "make",
    "name": "Makefile",
    "aliases": [
      "makefile"
    ],
    "import": () => import('./make_CH8ivb4o.mjs')
  },
  {
    "id": "markdown",
    "name": "Markdown",
    "aliases": [
      "md"
    ],
    "import": () => import('./markdown_CsacJmnW.mjs')
  },
  {
    "id": "marko",
    "name": "Marko",
    "import": () => import('./marko_C-rRm8By.mjs')
  },
  {
    "id": "matlab",
    "name": "MATLAB",
    "import": () => import('./matlab_DQ1RowLR.mjs')
  },
  {
    "id": "mdc",
    "name": "MDC",
    "import": () => import('./mdc_B-_BlBol.mjs')
  },
  {
    "id": "mdx",
    "name": "MDX",
    "import": () => import('./mdx_Di-XYxHU.mjs')
  },
  {
    "id": "mermaid",
    "name": "Mermaid",
    "import": () => import('./mermaid_BASv6wFz.mjs')
  },
  {
    "id": "mojo",
    "name": "Mojo",
    "import": () => import('./mojo_D33nq73j.mjs')
  },
  {
    "id": "move",
    "name": "Move",
    "import": () => import('./move_BL5Qbtt3.mjs')
  },
  {
    "id": "narrat",
    "name": "Narrat Language",
    "aliases": [
      "nar"
    ],
    "import": () => import('./narrat_BCS3F2yp.mjs')
  },
  {
    "id": "nextflow",
    "name": "Nextflow",
    "aliases": [
      "nf"
    ],
    "import": () => import('./nextflow_CR3STrlG.mjs')
  },
  {
    "id": "nginx",
    "name": "Nginx",
    "import": () => import('./nginx_hM0L1xF0.mjs')
  },
  {
    "id": "nim",
    "name": "Nim",
    "import": () => import('./nim_DnXe0SFu.mjs')
  },
  {
    "id": "nix",
    "name": "Nix",
    "import": () => import('./nix_B256vN7E.mjs')
  },
  {
    "id": "nushell",
    "name": "nushell",
    "aliases": [
      "nu"
    ],
    "import": () => import('./nushell_BBODmBJi.mjs')
  },
  {
    "id": "objective-c",
    "name": "Objective-C",
    "aliases": [
      "objc"
    ],
    "import": () => import('./objective-c_DOS22jA9.mjs')
  },
  {
    "id": "objective-cpp",
    "name": "Objective-C++",
    "import": () => import('./objective-cpp_TRdlEk2g.mjs')
  },
  {
    "id": "ocaml",
    "name": "OCaml",
    "import": () => import('./ocaml_qBzckQCJ.mjs')
  },
  {
    "id": "pascal",
    "name": "Pascal",
    "import": () => import('./pascal_3HTpnwpp.mjs')
  },
  {
    "id": "perl",
    "name": "Perl",
    "import": () => import('./perl_CBuN4XnR.mjs')
  },
  {
    "id": "php",
    "name": "PHP",
    "import": () => import('./php_Axi3QakR.mjs')
  },
  {
    "id": "plsql",
    "name": "PL/SQL",
    "import": () => import('./plsql_C0fyqsO0.mjs')
  },
  {
    "id": "po",
    "name": "Gettext PO",
    "aliases": [
      "pot",
      "potx"
    ],
    "import": () => import('./po_CcCGIg8G.mjs')
  },
  {
    "id": "postcss",
    "name": "PostCSS",
    "import": () => import('./postcss_wLX4xaF-.mjs')
  },
  {
    "id": "powerquery",
    "name": "PowerQuery",
    "import": () => import('./powerquery_Cu21y3vL.mjs')
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "aliases": [
      "ps",
      "ps1"
    ],
    "import": () => import('./powershell_Ck7-Ofz9.mjs')
  },
  {
    "id": "prisma",
    "name": "Prisma",
    "import": () => import('./prisma_BZ6ds9Dc.mjs')
  },
  {
    "id": "prolog",
    "name": "Prolog",
    "import": () => import('./prolog_-cKXH8mU.mjs')
  },
  {
    "id": "proto",
    "name": "Protocol Buffer 3",
    "import": () => import('./proto_B6XGAlnz.mjs')
  },
  {
    "id": "pug",
    "name": "Pug",
    "aliases": [
      "jade"
    ],
    "import": () => import('./pug_DCa_jXbS.mjs')
  },
  {
    "id": "puppet",
    "name": "Puppet",
    "import": () => import('./puppet_CfutUqpN.mjs')
  },
  {
    "id": "purescript",
    "name": "PureScript",
    "import": () => import('./purescript_BlP6AdMt.mjs')
  },
  {
    "id": "python",
    "name": "Python",
    "aliases": [
      "py"
    ],
    "import": () => import('./python_DdAFQc43.mjs')
  },
  {
    "id": "qml",
    "name": "QML",
    "import": () => import('./qml_D-6intQQ.mjs')
  },
  {
    "id": "qmldir",
    "name": "QML Directory",
    "import": () => import('./qmldir_CAUG0jcA.mjs')
  },
  {
    "id": "qss",
    "name": "Qt Style Sheets",
    "import": () => import('./qss_D0sDDoJ-.mjs')
  },
  {
    "id": "r",
    "name": "R",
    "import": () => import('./r_VExt3r4_.mjs')
  },
  {
    "id": "racket",
    "name": "Racket",
    "import": () => import('./racket_CSvKQcU8.mjs')
  },
  {
    "id": "raku",
    "name": "Raku",
    "aliases": [
      "perl6"
    ],
    "import": () => import('./raku_B5YGNUlb.mjs')
  },
  {
    "id": "razor",
    "name": "ASP.NET Razor",
    "import": () => import('./razor_DxIEV5Qc.mjs')
  },
  {
    "id": "reg",
    "name": "Windows Registry Script",
    "import": () => import('./reg_DnkMdH7P.mjs')
  },
  {
    "id": "regexp",
    "name": "RegExp",
    "aliases": [
      "regex"
    ],
    "import": () => import('./regexp_1N4mqI49.mjs')
  },
  {
    "id": "rel",
    "name": "Rel",
    "import": () => import('./rel_CrB3NqNz.mjs')
  },
  {
    "id": "riscv",
    "name": "RISC-V",
    "import": () => import('./riscv_jcVfKuR4.mjs')
  },
  {
    "id": "rst",
    "name": "reStructuredText",
    "import": () => import('./rst_iJ7mHDg1.mjs')
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "aliases": [
      "rb"
    ],
    "import": () => import('./ruby_DcAWmBV-.mjs')
  },
  {
    "id": "rust",
    "name": "Rust",
    "aliases": [
      "rs"
    ],
    "import": () => import('./rust_COW7ZJIp.mjs')
  },
  {
    "id": "sas",
    "name": "SAS",
    "import": () => import('./sas_OpVN1DWU.mjs')
  },
  {
    "id": "sass",
    "name": "Sass",
    "import": () => import('./sass_oJwsKQdv.mjs')
  },
  {
    "id": "scala",
    "name": "Scala",
    "import": () => import('./scala_DWUNMMxx.mjs')
  },
  {
    "id": "scheme",
    "name": "Scheme",
    "import": () => import('./scheme_DvKkvYn6.mjs')
  },
  {
    "id": "scss",
    "name": "SCSS",
    "import": () => import('./scss_DPNCA2YI.mjs')
  },
  {
    "id": "shaderlab",
    "name": "ShaderLab",
    "aliases": [
      "shader"
    ],
    "import": () => import('./shaderlab_B63Ooj2r.mjs')
  },
  {
    "id": "shellscript",
    "name": "Shell",
    "aliases": [
      "bash",
      "sh",
      "shell",
      "zsh"
    ],
    "import": () => import('./shellscript_bBop2RGH.mjs')
  },
  {
    "id": "shellsession",
    "name": "Shell Session",
    "aliases": [
      "console"
    ],
    "import": () => import('./shellsession_DoI8WClO.mjs')
  },
  {
    "id": "smalltalk",
    "name": "Smalltalk",
    "import": () => import('./smalltalk_CHhY1l2A.mjs')
  },
  {
    "id": "solidity",
    "name": "Solidity",
    "import": () => import('./solidity_BvJD7_HO.mjs')
  },
  {
    "id": "soy",
    "name": "Closure Templates",
    "aliases": [
      "closure-templates"
    ],
    "import": () => import('./soy_B82lAMAa.mjs')
  },
  {
    "id": "sparql",
    "name": "SPARQL",
    "import": () => import('./sparql_BOkflpvH.mjs')
  },
  {
    "id": "splunk",
    "name": "Splunk Query Language",
    "aliases": [
      "spl"
    ],
    "import": () => import('./splunk_Bjyy5GTb.mjs')
  },
  {
    "id": "sql",
    "name": "SQL",
    "import": () => import('./sql_yVRMvi0O.mjs')
  },
  {
    "id": "ssh-config",
    "name": "SSH Config",
    "import": () => import('./ssh-config_Cf9fh-Of.mjs')
  },
  {
    "id": "stata",
    "name": "Stata",
    "import": () => import('./stata_CvrxlcKj.mjs')
  },
  {
    "id": "stylus",
    "name": "Stylus",
    "aliases": [
      "styl"
    ],
    "import": () => import('./stylus_k-WBxfe-.mjs')
  },
  {
    "id": "svelte",
    "name": "Svelte",
    "import": () => import('./svelte_DIseVo_4.mjs')
  },
  {
    "id": "swift",
    "name": "Swift",
    "import": () => import('./swift_CGjhQosP.mjs')
  },
  {
    "id": "system-verilog",
    "name": "SystemVerilog",
    "import": () => import('./system-verilog_CiSd1dc5.mjs')
  },
  {
    "id": "systemd",
    "name": "Systemd Units",
    "import": () => import('./systemd_ymdT5skM.mjs')
  },
  {
    "id": "tasl",
    "name": "Tasl",
    "import": () => import('./tasl_BBPcXWu6.mjs')
  },
  {
    "id": "tcl",
    "name": "Tcl",
    "import": () => import('./tcl_e6HSX4IZ.mjs')
  },
  {
    "id": "terraform",
    "name": "Terraform",
    "aliases": [
      "tf",
      "tfvars"
    ],
    "import": () => import('./terraform_-6Vhp8t1.mjs')
  },
  {
    "id": "tex",
    "name": "TeX",
    "import": () => import('./tex_Cl7_BMzT.mjs')
  },
  {
    "id": "toml",
    "name": "TOML",
    "import": () => import('./toml_DU9_HPOl.mjs')
  },
  {
    "id": "tsv",
    "name": "TSV",
    "import": () => import('./tsv_Cncuw_uP.mjs')
  },
  {
    "id": "tsx",
    "name": "TSX",
    "import": () => import('./tsx_Ds786Is9.mjs')
  },
  {
    "id": "turtle",
    "name": "Turtle",
    "import": () => import('./turtle_B3VrIQpU.mjs')
  },
  {
    "id": "twig",
    "name": "Twig",
    "import": () => import('./twig_CSxR-gX2.mjs')
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "aliases": [
      "ts"
    ],
    "import": () => import('./typescript_CYliDbTU.mjs')
  },
  {
    "id": "typespec",
    "name": "TypeSpec",
    "aliases": [
      "tsp"
    ],
    "import": () => import('./typespec_Dyh4sTk3.mjs')
  },
  {
    "id": "typst",
    "name": "Typst",
    "aliases": [
      "typ"
    ],
    "import": () => import('./typst_BWa1TV7J.mjs')
  },
  {
    "id": "v",
    "name": "V",
    "import": () => import('./v_s2YH5juv.mjs')
  },
  {
    "id": "vala",
    "name": "Vala",
    "import": () => import('./vala_DT3-eqQ9.mjs')
  },
  {
    "id": "vb",
    "name": "Visual Basic",
    "aliases": [
      "cmd"
    ],
    "import": () => import('./vb_Awm61LJT.mjs')
  },
  {
    "id": "verilog",
    "name": "Verilog",
    "import": () => import('./verilog_BTySLpX1.mjs')
  },
  {
    "id": "vhdl",
    "name": "VHDL",
    "import": () => import('./vhdl_BL0e3dLh.mjs')
  },
  {
    "id": "viml",
    "name": "Vim Script",
    "aliases": [
      "vim",
      "vimscript"
    ],
    "import": () => import('./viml_C5CdLap9.mjs')
  },
  {
    "id": "vue",
    "name": "Vue",
    "import": () => import('./vue_Bprs3t4S.mjs')
  },
  {
    "id": "vue-html",
    "name": "Vue HTML",
    "import": () => import('./vue-html_D934gMME.mjs')
  },
  {
    "id": "vyper",
    "name": "Vyper",
    "aliases": [
      "vy"
    ],
    "import": () => import('./vyper_wFny-JOj.mjs')
  },
  {
    "id": "wasm",
    "name": "WebAssembly",
    "import": () => import('./wasm_DILJjEZQ.mjs')
  },
  {
    "id": "wenyan",
    "name": "Wenyan",
    "aliases": [
      "\u6587\u8A00"
    ],
    "import": () => import('./wenyan_eANXBf90.mjs')
  },
  {
    "id": "wgsl",
    "name": "WGSL",
    "import": () => import('./wgsl_q491FsLB.mjs')
  },
  {
    "id": "wikitext",
    "name": "Wikitext",
    "aliases": [
      "mediawiki",
      "wiki"
    ],
    "import": () => import('./wikitext_BDa_c_7V.mjs')
  },
  {
    "id": "wolfram",
    "name": "Wolfram",
    "aliases": [
      "wl"
    ],
    "import": () => import('./wolfram_V2PbioLU.mjs')
  },
  {
    "id": "xml",
    "name": "XML",
    "import": () => import('./xml_B-_C6NrB.mjs')
  },
  {
    "id": "xsl",
    "name": "XSL",
    "import": () => import('./xsl_CgMDsoc8.mjs')
  },
  {
    "id": "yaml",
    "name": "YAML",
    "aliases": [
      "yml"
    ],
    "import": () => import('./yaml_CdzeB0Js.mjs')
  },
  {
    "id": "zenscript",
    "name": "ZenScript",
    "import": () => import('./zenscript_BnNVz2gQ.mjs')
  },
  {
    "id": "zig",
    "name": "Zig",
    "import": () => import('./zig_CusByvIE.mjs')
  }
];
const bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i) => [i.id, i.import]));
const bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i) => i.aliases?.map((a) => [a, i.import]) || []));
const bundledLanguages = {
  ...bundledLanguagesBase,
  ...bundledLanguagesAlias
};

const cachedHighlighters = /* @__PURE__ */ new Map();
function getCachedHighlighter(opts) {
  const key = JSON.stringify(opts, Object.keys(opts).sort());
  if (cachedHighlighters.has(key)) {
    return cachedHighlighters.get(key);
  }
  const highlighter = createShikiHighlighter(opts);
  cachedHighlighters.set(key, highlighter);
  return highlighter;
}

const $$Astro = createAstro("http://localhost:2121");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Code;
  const {
    code,
    lang = "plaintext",
    theme = "github-dark",
    themes = {},
    wrap = false,
    inline = false,
    transformers = [],
    ...rest
  } = Astro2.props;
  if (typeof lang === "object") {
    if (lang.id) {
      lang.name = lang.id;
    }
    if (lang.grammar) {
      Object.assign(lang, lang.grammar);
    }
  }
  const highlighter = await getCachedHighlighter({
    langs: [
      typeof lang === "string" ? Object.keys(bundledLanguages).includes(lang) ? lang : "plaintext" : lang
    ],
    theme,
    themes,
    wrap,
    transformers
  });
  const html = await highlighter.highlight(code, typeof lang === "string" ? lang : lang.name, {
    inline,
    attributes: rest
  });
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/kenichi_dewa/Documents/git_projects/ecf-admin-dashboard/node_modules/astro/components/Code.astro", void 0);

export { $$Code as $ };
