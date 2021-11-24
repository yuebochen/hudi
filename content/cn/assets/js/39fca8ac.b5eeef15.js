"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[1429],{3905:function(_,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function a(_,e,t){return e in _?Object.defineProperty(_,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):_[e]=t,_}function i(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(_);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),t.push.apply(t,n)}return t}function o(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(_,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))}))}return _}function l(_,e){if(null==_)return{};var t,n,a=function(_,e){if(null==_)return{};var t,n,a={},i=Object.keys(_);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(a[t]=_[t]);return a}(_,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(_);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(_,t)&&(a[t]=_[t])}return a}var r=n.createContext({}),s=function(_){var e=n.useContext(r),t=e;return _&&(t="function"==typeof _?_(e):o(o({},e),_)),t},c=function(_){var e=s(_.components);return n.createElement(r.Provider,{value:e},_.children)},d={inlineCode:"code",wrapper:function(_){var e=_.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(_,e){var t=_.components,a=_.mdxType,i=_.originalType,r=_.parentName,c=l(_,["components","mdxType","originalType","parentName"]),p=s(t),m=a,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return t?n.createElement(u,o(o({ref:e},c),{},{components:t})):n.createElement(u,o({ref:e},c))}));function m(_,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof _||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=_,l.mdxType="string"==typeof _?_:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},21793:function(_,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"CLI",keywords:["hudi","cli"],last_modified_at:new Date("2021-08-18T19:59:57.000Z")},r=void 0,s={unversionedId:"cli",id:"version-0.9.0/cli",isDocsHomePage:!1,title:"CLI",description:"Once hudi has been built, the shell can be fired by via  cd hudi-cli && ./hudi-cli.sh. A hudi table resides on DFS, in a location referred to as the basePath and",source:"@site/versioned_docs/version-0.9.0/cli.md",sourceDirName:".",slug:"/cli",permalink:"/cn/docs/cli",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/versioned_docs/version-0.9.0/cli.md",version:"0.9.0",frontMatter:{title:"CLI",keywords:["hudi","cli"],last_modified_at:"2021-08-18T19:59:57.000Z"}},c=[{value:"Inspecting Commits",id:"inspecting-commits",children:[]},{value:"Drilling Down to a specific Commit",id:"drilling-down-to-a-specific-commit",children:[]},{value:"FileSystem View",id:"filesystem-view",children:[]},{value:"Statistics",id:"statistics",children:[]},{value:"Archived Commits",id:"archived-commits",children:[]},{value:"Compactions",id:"compactions",children:[]},{value:"Validate Compaction",id:"validate-compaction",children:[]},{value:"Unscheduling Compaction",id:"unscheduling-compaction",children:[]},{value:"Repair Compaction",id:"repair-compaction",children:[]}],d={toc:c};function p(_){var e=_.components,t=(0,a.Z)(_,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once hudi has been built, the shell can be fired by via  ",(0,i.kt)("inlineCode",{parentName:"p"},"cd hudi-cli && ./hudi-cli.sh"),". A hudi table resides on DFS, in a location referred to as the ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," and\nwe would need this location in order to connect to a Hudi table. Hudi library effectively manages this table internally, using ",(0,i.kt)("inlineCode",{parentName:"p"},".hoodie")," subfolder to track all metadata."),(0,i.kt)("p",null,"To initialize a hudi table, use the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"===================================================================\n*         ___                          ___                        *\n*        /\\__\\          ___           /\\  \\           ___         *\n*       / /  /         /\\__\\         /  \\  \\         /\\  \\        *\n*      / /__/         / /  /        / /\\ \\  \\        \\ \\  \\       *\n*     /  \\  \\ ___    / /  /        / /  \\ \\__\\       /  \\__\\      *\n*    / /\\ \\  /\\__\\  / /__/  ___   / /__/ \\ |__|     / /\\/__/      *\n*    \\/  \\ \\/ /  /  \\ \\  \\ /\\__\\  \\ \\  \\ / /  /  /\\/ /  /         *\n*         \\  /  /    \\ \\  / /  /   \\ \\  / /  /   \\  /__/          *\n*         / /  /      \\ \\/ /  /     \\ \\/ /  /     \\ \\__\\          *\n*        / /  /        \\  /  /       \\  /  /       \\/__/          *\n*        \\/__/          \\/__/         \\/__/    Apache Hudi CLI    *\n*                                                                 *\n===================================================================\n\nhudi->create --path /user/hive/warehouse/table1 --tableName hoodie_table_1 --tableType COPY_ON_WRITE\n.....\n")),(0,i.kt)("p",null,"To see the description of hudi table, use the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:hoodie_table_1->desc\n18/09/06 15:57:19 INFO timeline.HoodieActiveTimeline: Loaded instants []\n    _________________________________________________________\n    | Property                | Value                        |\n    |========================================================|\n    | basePath                | ...                          |\n    | metaPath                | ...                          |\n    | fileSystem              | hdfs                         |\n    | hoodie.table.name       | hoodie_table_1               |\n    | hoodie.table.type       | COPY_ON_WRITE                |\n    | hoodie.archivelog.folder|                              |\n")),(0,i.kt)("p",null,"Following is a sample command to connect to a Hudi table contains uber trips."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:trips->connect --path /app/uber/trips\n\n16/10/05 23:20:37 INFO model.HoodieTableMetadata: All commits :HoodieCommits{commitList=[20161002045850, 20161002052915, 20161002055918, 20161002065317, 20161002075932, 20161002082904, 20161002085949, 20161002092936, 20161002105903, 20161002112938, 20161002123005, 20161002133002, 20161002155940, 20161002165924, 20161002172907, 20161002175905, 20161002190016, 20161002192954, 20161002195925, 20161002205935, 20161002215928, 20161002222938, 20161002225915, 20161002232906, 20161003003028, 20161003005958, 20161003012936, 20161003022924, 20161003025859, 20161003032854, 20161003042930, 20161003052911, 20161003055907, 20161003062946, 20161003065927, 20161003075924, 20161003082926, 20161003085925, 20161003092909, 20161003100010, 20161003102913, 20161003105850, 20161003112910, 20161003115851, 20161003122929, 20161003132931, 20161003142952, 20161003145856, 20161003152953, 20161003155912, 20161003162922, 20161003165852, 20161003172923, 20161003175923, 20161003195931, 20161003210118, 20161003212919, 20161003215928, 20161003223000, 20161003225858, 20161004003042, 20161004011345, 20161004015235, 20161004022234, 20161004063001, 20161004072402, 20161004074436, 20161004080224, 20161004082928, 20161004085857, 20161004105922, 20161004122927, 20161004142929, 20161004163026, 20161004175925, 20161004194411, 20161004203202, 20161004211210, 20161004214115, 20161004220437, 20161004223020, 20161004225321, 20161004231431, 20161004233643, 20161005010227, 20161005015927, 20161005022911, 20161005032958, 20161005035939, 20161005052904, 20161005070028, 20161005074429, 20161005081318, 20161005083455, 20161005085921, 20161005092901, 20161005095936, 20161005120158, 20161005123418, 20161005125911, 20161005133107, 20161005155908, 20161005163517, 20161005165855, 20161005180127, 20161005184226, 20161005191051, 20161005193234, 20161005203112, 20161005205920, 20161005212949, 20161005223034, 20161005225920]}\nMetadata for table trips loaded\n")),(0,i.kt)("p",null,"Once connected to the table, a lot of other commands become available. The shell has contextual autocomplete help (press TAB) and below is a list of all commands, few of which are reviewed in this section\nare reviewed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:trips->help\n* ! - Allows execution of operating system (OS) commands\n* // - Inline comment markers (start of line only)\n* ; - Inline comment markers (start of line only)\n* addpartitionmeta - Add partition metadata to a table, if not present\n* clear - Clears the console\n* cls - Clears the console\n* commit rollback - Rollback a commit\n* commits compare - Compare commits with another Hoodie table\n* commit showfiles - Show file level details of a commit\n* commit showpartitions - Show partition level details of a commit\n* commits refresh - Refresh the commits\n* commits show - Show the commits\n* commits sync - Compare commits with another Hoodie table\n* connect - Connect to a hoodie table\n* date - Displays the local date and time\n* exit - Exits the shell\n* help - List all commands usage\n* quit - Exits the shell\n* records deduplicate - De-duplicate a partition path contains duplicates & produce repaired files to replace with\n* script - Parses the specified resource file and executes its commands\n* stats filesizes - File Sizes. Display summary stats on sizes of files\n* stats wa - Write Amplification. Ratio of how many records were upserted to how many records were actually written\n* sync validate - Validate the sync by counting the number of records\n* system properties - Shows the shell's properties\n* utils loadClass - Load a class\n* version - Displays shell version\n\nhudi:trips->\n")),(0,i.kt)("h3",{id:"inspecting-commits"},"Inspecting Commits"),(0,i.kt)("p",null,"The task of upserting or inserting a batch of incoming records is known as a ",(0,i.kt)("strong",{parentName:"p"},"commit")," in Hudi. A commit provides basic atomicity guarantees such that only committed data is available for querying.\nEach commit has a monotonically increasing string/number called the ",(0,i.kt)("strong",{parentName:"p"},"commit number"),". Typically, this is the time at which we started the commit."),(0,i.kt)("p",null,"To view some basic information about the last 10 commits,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'hudi:trips->commits show --sortBy "Total Bytes Written" --desc true --limit 10\n    ________________________________________________________________________________________________________________________________________________________________________\n    | CommitTime    | Total Bytes Written| Total Files Added| Total Files Updated| Total Partitions Written| Total Records Written| Total Update Records Written| Total Errors|\n    |=======================================================================================================================================================================|\n    ....\n    ....\n    ....\n')),(0,i.kt)("p",null,"At the start of each write, Hudi also writes a .inflight commit to the .hoodie folder. You can use the timestamp there to estimate how long the commit has been inflight"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ hdfs dfs -ls /app/uber/trips/.hoodie/*.inflight\n-rw-r--r--   3 vinoth supergroup     321984 2016-10-05 23:18 /app/uber/trips/.hoodie/20161005225920.inflight\n")),(0,i.kt)("h3",{id:"drilling-down-to-a-specific-commit"},"Drilling Down to a specific Commit"),(0,i.kt)("p",null,"To understand how the writes spread across specific partiions,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'hudi:trips->commit showpartitions --commit 20161005165855 --sortBy "Total Bytes Written" --desc true --limit 10\n    __________________________________________________________________________________________________________________________________________\n    | Partition Path| Total Files Added| Total Files Updated| Total Records Inserted| Total Records Updated| Total Bytes Written| Total Errors|\n    |=========================================================================================================================================|\n     ....\n     ....\n')),(0,i.kt)("p",null,"If you need file level granularity , we can do the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'hudi:trips->commit showfiles --commit 20161005165855 --sortBy "Partition Path"\n    ________________________________________________________________________________________________________________________________________________________\n    | Partition Path| File ID                             | Previous Commit| Total Records Updated| Total Records Written| Total Bytes Written| Total Errors|\n    |=======================================================================================================================================================|\n    ....\n    ....\n')),(0,i.kt)("h3",{id:"filesystem-view"},"FileSystem View"),(0,i.kt)("p",null,"Hudi views each partition as a collection of file-groups with each file-group containing a list of file-slices in commit order (See concepts).\nThe below commands allow users to view the file-slices for a data-set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'hudi:stock_ticks_mor->show fsview all\n ....\n  _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________\n | Partition | FileId | Base-Instant | Data-File | Data-File Size| Num Delta Files| Total Delta File Size| Delta Files |\n |==============================================================================================================================================================================================================================================================================================================================================================================================================|\n | 2018/08/31| 111415c3-f26d-4639-86c8-f9956f245ac3| 20181002180759| hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/111415c3-f26d-4639-86c8-f9956f245ac3_0_20181002180759.parquet| 432.5 KB | 1 | 20.8 KB | [HoodieLogFile {hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/.111415c3-f26d-4639-86c8-f9956f245ac3_20181002180759.log.1}]|\n\n\n\nhudi:stock_ticks_mor->show fsview latest --partitionPath "2018/08/31"\n ......\n __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________\n | Partition | FileId | Base-Instant | Data-File | Data-File Size| Num Delta Files| Total Delta Size| Delta Size - compaction scheduled| Delta Size - compaction unscheduled| Delta To Base Ratio - compaction scheduled| Delta To Base Ratio - compaction unscheduled| Delta Files - compaction scheduled | Delta Files - compaction unscheduled|\n |=================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================|\n | 2018/08/31| 111415c3-f26d-4639-86c8-f9956f245ac3| 20181002180759| hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/111415c3-f26d-4639-86c8-f9956f245ac3_0_20181002180759.parquet| 432.5 KB | 1 | 20.8 KB | 20.8 KB | 0.0 B | 0.0 B | 0.0 B | [HoodieLogFile {hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/.111415c3-f26d-4639-86c8-f9956f245ac3_20181002180759.log.1}]| [] |\n\n')),(0,i.kt)("h3",{id:"statistics"},"Statistics"),(0,i.kt)("p",null,"Since Hudi directly manages file sizes for DFS table, it might be good to get an overall picture"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'hudi:trips->stats filesizes --partitionPath 2016/09/01 --sortBy "95th" --desc true --limit 10\n    ________________________________________________________________________________________________\n    | CommitTime    | Min     | 10th    | 50th    | avg     | 95th    | Max     | NumFiles| StdDev  |\n    |===============================================================================================|\n    | <COMMIT_ID>   | 93.9 MB | 93.9 MB | 93.9 MB | 93.9 MB | 93.9 MB | 93.9 MB | 2       | 2.3 KB  |\n    ....\n    ....\n')),(0,i.kt)("p",null,"In case of Hudi write taking much longer, it might be good to see the write amplification for any sudden increases"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:trips->stats wa\n    __________________________________________________________________________\n    | CommitTime    | Total Upserted| Total Written| Write Amplifiation Factor|\n    |=========================================================================|\n    ....\n    ....\n")),(0,i.kt)("h3",{id:"archived-commits"},"Archived Commits"),(0,i.kt)("p",null,"In order to limit the amount of growth of .commit files on DFS, Hudi archives older .commit files (with due respect to the cleaner policy) into a commits.archived file.\nThis is a sequence file that contains a mapping from commitNumber => json with raw information about the commit (same that is nicely rolled up above)."),(0,i.kt)("h3",{id:"compactions"},"Compactions"),(0,i.kt)("p",null,"To get an idea of the lag between compaction and writer applications, use the below command to list down all\npending compactions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:trips->compactions show all\n     ___________________________________________________________________\n    | Compaction Instant Time| State    | Total FileIds to be Compacted|\n    |==================================================================|\n    | <INSTANT_1>            | REQUESTED| 35                           |\n    | <INSTANT_2>            | INFLIGHT | 27                           |\n")),(0,i.kt)("p",null,"To inspect a specific compaction plan, use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:trips->compaction show --instant <INSTANT_1>\n    _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________\n    | Partition Path| File Id | Base Instant  | Data File Path                                    | Total Delta Files| getMetrics                                                                                                                    |\n    |================================================================================================================================================================================================================================================\n    | 2018/07/17    | <UUID>  | <INSTANT_1>   | viewfs://ns-default/.../../UUID_<INSTANT>.parquet | 1                | {TOTAL_LOG_FILES=1.0, TOTAL_IO_READ_MB=1230.0, TOTAL_LOG_FILES_SIZE=2.51255751E8, TOTAL_IO_WRITE_MB=991.0, TOTAL_IO_MB=2221.0}|\n\n")),(0,i.kt)("p",null,"To manually schedule or run a compaction, use the below command. This command uses spark launcher to perform compaction\noperations."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Make sure no other application is scheduling compaction for this table concurrently\n{: .notice--info}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:trips->help compaction schedule\nKeyword:                   compaction schedule\nDescription:               Schedule Compaction\n Keyword:                  sparkMemory\n   Help:                   Spark executor memory\n   Mandatory:              false\n   Default if specified:   '__NULL__'\n   Default if unspecified: '1G'\n\n* compaction schedule - Schedule Compaction\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:trips->help compaction run\nKeyword:                   compaction run\nDescription:               Run Compaction for given instant time\n Keyword:                  tableName\n   Help:                   Table name\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  parallelism\n   Help:                   Parallelism for hoodie compaction\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  schemaFilePath\n   Help:                   Path for Avro schema file\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  sparkMemory\n   Help:                   Spark executor memory\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  retry\n   Help:                   Number of retries\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  compactionInstant\n   Help:                   Base path for the target hoodie table\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n* compaction run - Run Compaction for given instant time\n")),(0,i.kt)("h3",{id:"validate-compaction"},"Validate Compaction"),(0,i.kt)("p",null,"Validating a compaction plan : Check if all the files necessary for compactions are present and are valid"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:stock_ticks_mor->compaction validate --instant 20181005222611\n...\n\n   COMPACTION PLAN VALID\n\n    ___________________________________________________________________________________________________________________________________________________________________________________________________________________________\n    | File Id                             | Base Instant Time| Base Data File                                                                                                                   | Num Delta Files| Valid| Error|\n    |==========================================================================================================================================================================================================================|\n    | 05320e98-9a57-4c38-b809-a6beaaeb36bd| 20181005222445   | hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/05320e98-9a57-4c38-b809-a6beaaeb36bd_0_20181005222445.parquet| 1              | true |      |\n\n\n\nhudi:stock_ticks_mor->compaction validate --instant 20181005222601\n\n   COMPACTION PLAN INVALID\n\n    _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________\n    | File Id                             | Base Instant Time| Base Data File                                                                                                                   | Num Delta Files| Valid| Error                                                                           |\n    |=====================================================================================================================================================================================================================================================================================================|\n    | 05320e98-9a57-4c38-b809-a6beaaeb36bd| 20181005222445   | hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/05320e98-9a57-4c38-b809-a6beaaeb36bd_0_20181005222445.parquet| 1              | false| All log files specified in compaction operation is not present. Missing ....    |\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," The following commands must be executed without any other writer/ingestion application running.\n{: .notice--warning}"),(0,i.kt)("p",null,"Sometimes, it becomes necessary to remove a fileId from a compaction-plan inorder to speed-up or unblock compaction\noperation. Any new log-files that happened on this file after the compaction got scheduled will be safely renamed\nso that are preserved. Hudi provides the following CLI to support it"),(0,i.kt)("h3",{id:"unscheduling-compaction"},"Unscheduling Compaction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:trips->compaction unscheduleFileId --fileId <FileUUID>\n....\nNo File renames needed to unschedule file from pending compaction. Operation successful.\n")),(0,i.kt)("p",null,"In other cases, an entire compaction plan needs to be reverted. This is supported by the following CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:trips->compaction unschedule --compactionInstant <compactionInstant>\n.....\nNo File renames needed to unschedule pending compaction. Operation successful.\n")),(0,i.kt)("h3",{id:"repair-compaction"},"Repair Compaction"),(0,i.kt)("p",null,"The above compaction unscheduling operations could sometimes fail partially (e:g -> DFS temporarily unavailable). With\npartial failures, the compaction operation could become inconsistent with the state of file-slices. When you run\n",(0,i.kt)("inlineCode",{parentName:"p"},"compaction validate"),", you can notice invalid compaction operations if there is one.  In these cases, the repair\ncommand comes to the rescue, it will rearrange the file-slices so that there is no loss and the file-slices are\nconsistent with the compaction plan"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"hudi:stock_ticks_mor->compaction repair --instant 20181005222611\n......\nCompaction successfully repaired\n.....\n")))}p.isMDXComponent=!0}}]);