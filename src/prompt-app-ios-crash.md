### User Input
Al ejecutar la aplicacion en iOS abre y se cierra y al hacer click en detalle me tira todo esto como log, como podria solucionarlo?

-------------------------------------
Translated Report (Full Report Below)
-------------------------------------
Process:             MediaFeedChallenge [77097]
Path:                /Users/USER/Library/Developer/CoreSimulator/Devices/4E5E3186-EDAC-40CC-95DF-F36ED408D0D0/data/Containers/Bundle/Application/E990C421-83E9-49D9-9A75-11F7E86705E4/MediaFeedChallenge.app/MediaFeedChallenge
Identifier:          org.reactjs.native.example.MediaFeedChallenge
Version:             1.0 (1)
Code Type:           ARM-64 (Native)
Role:                Foreground
Parent Process:      launchd_sim [76007]
Coalition:           com.apple.CoreSimulator.SimDevice.4E5E3186-EDAC-40CC-95DF-F36ED408D0D0 [97351]
Responsible Process: SimulatorTrampoline [68924]
User ID:             501

Date/Time:           2026-03-03 23:37:06.9393 -0300
Launch Time:         2026-03-03 23:37:06.6861 -0300
Hardware Model:      Mac16,8
OS Version:          macOS 26.3 (25D125)
Release Type:        User

Crash Reporter Key:  16C8C20A-1728-48B8-C7DA-38933C140632
Incident Identifier: 82532A31-4B93-4976-B4D0-33012149559D

Sleep/Wake UUID:       E9F5A662-EE69-4090-AFF3-4A19CE071525

Time Awake Since Boot: 480000 seconds
Time Since Wake:       349987 seconds

System Integrity Protection: enabled

Triggered by Thread: 0, Dispatch Queue: com.apple.main-thread

Exception Type:    EXC_CRASH (SIGABRT)
Exception Codes:   0x0000000000000000, 0x0000000000000000

Termination Reason:  Namespace SIGNAL, Code 6, Abort trap: 6
Terminating Process: MediaFeedChallenge [77097]


Last Exception Backtrace:
0   CoreFoundation                	       0x1804f71c4 __exceptionPreprocess + 160
1   libobjc.A.dylib               	       0x18009c094 objc_exception_throw + 72
2   CoreFoundation                	       0x1804f70e0 -[NSException initWithCoder:] + 0
3   MediaFeedChallenge.debug.dylib	       0x105237bc4 -[RCTAppDelegate bundleURL] + 52 (RCTAppDelegate.mm:178)
4   MediaFeedChallenge.debug.dylib	       0x105238360 __42-[RCTAppDelegate createRCTRootViewFactory]_block_invoke + 44 (RCTAppDelegate.mm:244)
5   MediaFeedChallenge.debug.dylib	       0x10523f81c -[RCTRootViewFactory bundleURL] + 56 (RCTRootViewFactory.mm:273)
6   MediaFeedChallenge.debug.dylib	       0x10523f78c -[RCTRootViewFactory sourceURLForBridge:] + 52 (RCTRootViewFactory.mm:268)
7   MediaFeedChallenge.debug.dylib	       0x104e50cc0 -[RCTBridge setUp] + 980 (RCTBridge.mm:446)
8   MediaFeedChallenge.debug.dylib	       0x104e4f75c -[RCTBridge initWithDelegate:bundleURL:moduleProvider:launchOptions:] + 376 (RCTBridge.mm:265)
9   MediaFeedChallenge.debug.dylib	       0x104e4f40c -[RCTBridge initWithDelegate:launchOptions:] + 100 (RCTBridge.mm:242)
10  MediaFeedChallenge.debug.dylib	       0x105237558 -[RCTAppDelegate createBridgeWithDelegate:launchOptions:] + 100 (RCTAppDelegate.mm:93)
11  MediaFeedChallenge.debug.dylib	       0x105238538 __42-[RCTAppDelegate createRCTRootViewFactory]_block_invoke.24 + 88 (RCTAppDelegate.mm:260)
12  MediaFeedChallenge.debug.dylib	       0x10523edbc -[RCTRootViewFactory createBridgeIfNeeded:] + 248 (RCTRootViewFactory.mm:212)
13  MediaFeedChallenge.debug.dylib	       0x10523de60 -[RCTRootViewFactory viewWithModuleName:initialProperties:launchOptions:] + 740 (RCTRootViewFactory.mm:154)
14  MediaFeedChallenge.debug.dylib	       0x105236ec4 -[RCTAppDelegate application:didFinishLaunchingWithOptions:] + 360 (RCTAppDelegate.mm:60)
15  MediaFeedChallenge.debug.dylib	       0x104d563fc -[AppDelegate application:didFinishLaunchingWithOptions:] + 156 (AppDelegate.mm:14)
16  UIKitCore                     	       0x186344c2c -[UIApplication _handleDelegateCallbacksWithOptions:isSuspended:restoreState:] + 332
17  UIKitCore                     	       0x186346168 -[UIApplication _callInitializationDelegatesWithActions:forScene:payload:fromOriginatingProcess:] + 3036
18  UIKitCore                     	       0x18634b584 -[UIApplication _runWithMainScene:transitionContext:completion:] + 800
19  UIKitCore                     	       0x1858c909c -[_UISceneLifecycleMultiplexer completeApplicationLaunchWithFBSScene:transitionContext:] + 88
20  UIKitCore                     	       0x185e94cd0 _UIScenePerformActionsWithLifecycleActionMask + 96
21  UIKitCore                     	       0x1858c9978 __101-[_UISceneLifecycleMultiplexer _evalTransitionToSettings:fromSettings:forceExit:withTransitionStore:]_block_invoke + 224
22  UIKitCore                     	       0x1858c94d4 -[_UISceneLifecycleMultiplexer _performBlock:withApplicationOfDeactivationReasons:fromReasons:] + 204
23  UIKitCore                     	       0x1858c97ac -[_UISceneLifecycleMultiplexer _evalTransitionToSettings:fromSettings:forceExit:withTransitionStore:] + 576
24  UIKitCore                     	       0x1858c91c4 -[_UISceneLifecycleMultiplexer uiScene:transitionedFromState:withTransitionContext:] + 240
25  UIKitCore                     	       0x1858d51c0 __186-[_UIWindowSceneFBSSceneTransitionContextDrivenLifecycleSettingsDiffAction _performActionsForUIScene:withUpdatedFBSScene:settingsDiff:fromSettings:transitionContext:lifecycleActionType:]_block_invoke + 140
26  UIKitCore                     	       0x185d7e4a4 +[BSAnimationSettings(UIKit) tryAnimatingWithSettings:fromCurrentState:actions:completion:] + 656
27  UIKitCore                     	       0x185ead178 _UISceneSettingsDiffActionPerformChangesWithTransitionContextAndCompletion + 196
28  UIKitCore                     	       0x1858d4ecc -[_UIWindowSceneFBSSceneTransitionContextDrivenLifecycleSettingsDiffAction _performActionsForUIScene:withUpdatedFBSScene:settingsDiff:fromSettings:transitionContext:lifecycleActionType:] + 288
29  UIKitCore                     	       0x1856f64f0 __64-[UIScene scene:didUpdateWithDiff:transitionContext:completion:]_block_invoke.190 + 612
30  UIKitCore                     	       0x1856f5290 -[UIScene _emitSceneSettingsUpdateResponseForCompletion:afterSceneUpdateWork:] + 200
31  UIKitCore                     	       0x1856f6170 -[UIScene scene:didUpdateWithDiff:transitionContext:completion:] + 220
32  UIKitCore                     	       0x18634a2f0 -[UIApplication workspace:didCreateScene:withTransitionContext:completion:] + 452
33  UIKitCore                     	       0x185da98b0 -[UIApplicationSceneClientAgent scene:didInitializeWithEvent:completion:] + 260
34  FrontBoardServices            	       0x1886011d8 __95-[FBSScene _callOutQueue_didCreateWithTransitionContext:alternativeCreationCallout:completion:]_block_invoke + 304
35  FrontBoardServices            	       0x188601644 -[FBSScene _callOutQueue_maybeCoalesceClientSettingsUpdates:] + 116
36  FrontBoardServices            	       0x18860102c -[FBSScene _callOutQueue_didCreateWithTransitionContext:alternativeCreationCallout:completion:] + 408
37  FrontBoardServices            	       0x18866cfc4 __93-[FBSWorkspaceScenesClient _callOutQueue_sendDidCreateForScene:transitionContext:completion:]_block_invoke.274 + 232
38  FrontBoardServices            	       0x18860e874 -[FBSWorkspace _calloutQueue_executeCalloutFromSource:withBlock:] + 160
39  FrontBoardServices            	       0x18862ce44 -[FBSWorkspaceScenesClient _callOutQueue_sendDidCreateForScene:transitionContext:completion:] + 392
40  FrontBoardServices            	       0x18862e518 __92-[FBSWorkspaceScenesClient createSceneWithIdentity:parameters:transitionContext:completion:]_block_invoke_2 + 204
41  FrontBoardServices            	       0x18860e874 -[FBSWorkspace _calloutQueue_executeCalloutFromSource:withBlock:] + 160
42  libdispatch.dylib             	       0x1801db4b0 _dispatch_client_callout + 12
43  libdispatch.dylib             	       0x1801c5b0c _dispatch_block_invoke_direct + 376
44  BoardServices                 	       0x18807873c __BSSERVICEMAINRUNLOOPQUEUE_IS_CALLING_OUT_TO_A_BLOCK__ + 44
45  BoardServices                 	       0x18807776c BSServiceMainRunLoopSourceHandler + 180
46  CoreFoundation                	       0x1804563a4 __CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__ + 24
47  CoreFoundation                	       0x1804562ec __CFRunLoopDoSource0 + 168
48  CoreFoundation                	       0x180455a78 __CFRunLoopDoSources0 + 220
49  CoreFoundation                	       0x180454c4c __CFRunLoopRun + 760
50  CoreFoundation                	       0x18044fcec _CFRunLoopRunSpecificWithOptions + 496
51  GraphicsServices              	       0x192a669bc GSEventRunModal + 116
52  UIKitCore                     	       0x186348574 -[UIApplication _run] + 772
53  UIKitCore                     	       0x18634c79c UIApplicationMain + 124
54  MediaFeedChallenge.debug.dylib	       0x104d565bc __debug_main_executable_dylib_entry_point + 100 (main.m:8)
55  ???                           	       0x1029793d0 ???
56  dyld                          	       0x102b48d54 start + 7184

Thread 0 Crashed::  Dispatch queue: com.apple.main-thread
0   libsystem_kernel.dylib        	       0x1028c885c __pthread_kill + 8
1   libsystem_pthread.dylib       	       0x1028422a8 pthread_kill + 264
2   libsystem_c.dylib             	       0x1801b5994 abort + 100
3   libc++abi.dylib               	       0x18030326c __abort_message + 128
4   libc++abi.dylib               	       0x1802f31a4 demangling_terminate_handler() + 268
5   libobjc.A.dylib               	       0x180077218 _objc_terminate() + 124
6   libc++abi.dylib               	       0x180302758 std::__terminate(void (*)()) + 12
7   libc++abi.dylib               	       0x1803057c0 __cxxabiv1::failed_throw(__cxxabiv1::__cxa_exception*) + 32
8   libc++abi.dylib               	       0x1803057a0 __cxa_throw + 88
9   libobjc.A.dylib               	       0x18009c1cc objc_exception_throw + 384
10  CoreFoundation                	       0x1804f70e0 +[NSException raise:format:] + 124
11  MediaFeedChallenge.debug.dylib	       0x105237bc4 -[RCTAppDelegate bundleURL] + 52 (RCTAppDelegate.mm:176)
12  MediaFeedChallenge.debug.dylib	       0x105238360 __42-[RCTAppDelegate createRCTRootViewFactory]_block_invoke + 44 (RCTAppDelegate.mm:244)
13  MediaFeedChallenge.debug.dylib	       0x10523f81c -[RCTRootViewFactory bundleURL] + 56 (RCTRootViewFactory.mm:273)
14  MediaFeedChallenge.debug.dylib	       0x10523f78c -[RCTRootViewFactory sourceURLForBridge:] + 52 (RCTRootViewFactory.mm:268)
15  MediaFeedChallenge.debug.dylib	       0x104e50cc0 -[RCTBridge setUp] + 980 (RCTBridge.mm:446)
16  MediaFeedChallenge.debug.dylib	       0x104e4f75c -[RCTBridge initWithDelegate:bundleURL:moduleProvider:launchOptions:] + 376 (RCTBridge.mm:265)
17  MediaFeedChallenge.debug.dylib	       0x104e4f40c -[RCTBridge initWithDelegate:launchOptions:] + 100 (RCTBridge.mm:242)
18  MediaFeedChallenge.debug.dylib	       0x105237558 -[RCTAppDelegate createBridgeWithDelegate:launchOptions:] + 100 (RCTAppDelegate.mm:93)
19  MediaFeedChallenge.debug.dylib	       0x105238538 __42-[RCTAppDelegate createRCTRootViewFactory]_block_invoke.24 + 88 (RCTAppDelegate.mm:260)
20  MediaFeedChallenge.debug.dylib	       0x10523edbc -[RCTRootViewFactory createBridgeIfNeeded:] + 248 (RCTRootViewFactory.mm:212)
21  MediaFeedChallenge.debug.dylib	       0x10523de60 -[RCTRootViewFactory viewWithModuleName:initialProperties:launchOptions:] + 740 (RCTRootViewFactory.mm:154)
22  MediaFeedChallenge.debug.dylib	       0x105236ec4 -[RCTAppDelegate application:didFinishLaunchingWithOptions:] + 360 (RCTAppDelegate.mm:60)
23  MediaFeedChallenge.debug.dylib	       0x104d563fc -[AppDelegate application:didFinishLaunchingWithOptions:] + 156 (AppDelegate.mm:14)
24  UIKitCore                     	       0x186344c2c -[UIApplication _handleDelegateCallbacksWithOptions:isSuspended:restoreState:] + 332
25  UIKitCore                     	       0x186346168 -[UIApplication _callInitializationDelegatesWithActions:forScene:payload:fromOriginatingProcess:] + 3036
26  UIKitCore                     	       0x18634b584 -[UIApplication _runWithMainScene:transitionContext:completion:] + 800
27  UIKitCore                     	       0x1858c909c -[_UISceneLifecycleMultiplexer completeApplicationLaunchWithFBSScene:transitionContext:] + 88
28  UIKitCore                     	       0x185e94cd0 _UIScenePerformActionsWithLifecycleActionMask + 96
29  UIKitCore                     	       0x1858c9978 __101-[_UISceneLifecycleMultiplexer _evalTransitionToSettings:fromSettings:forceExit:withTransitionStore:]_block_invoke + 224
30  UIKitCore                     	       0x1858c94d4 -[_UISceneLifecycleMultiplexer _performBlock:withApplicationOfDeactivationReasons:fromReasons:] + 204
31  UIKitCore                     	       0x1858c97ac -[_UISceneLifecycleMultiplexer _evalTransitionToSettings:fromSettings:forceExit:withTransitionStore:] + 576
32  UIKitCore                     	       0x1858c91c4 -[_UISceneLifecycleMultiplexer uiScene:transitionedFromState:withTransitionContext:] + 240
33  UIKitCore                     	       0x1858d51c0 __186-[_UIWindowSceneFBSSceneTransitionContextDrivenLifecycleSettingsDiffAction _performActionsForUIScene:withUpdatedFBSScene:settingsDiff:fromSettings:transitionContext:lifecycleActionType:]_block_invoke + 140
34  UIKitCore                     	       0x185d7e4a4 +[BSAnimationSettings(UIKit) tryAnimatingWithSettings:fromCurrentState:actions:completion:] + 656
35  UIKitCore                     	       0x185ead178 _UISceneSettingsDiffActionPerformChangesWithTransitionContextAndCompletion + 196
36  UIKitCore                     	       0x1858d4ecc -[_UIWindowSceneFBSSceneTransitionContextDrivenLifecycleSettingsDiffAction _performActionsForUIScene:withUpdatedFBSScene:settingsDiff:fromSettings:transitionContext:lifecycleActionType:] + 288
37  UIKitCore                     	       0x1856f64f0 __64-[UIScene scene:didUpdateWithDiff:transitionContext:completion:]_block_invoke.190 + 612
38  UIKitCore                     	       0x1856f5290 -[UIScene _emitSceneSettingsUpdateResponseForCompletion:afterSceneUpdateWork:] + 200
39  UIKitCore                     	       0x1856f6170 -[UIScene scene:didUpdateWithDiff:transitionContext:completion:] + 220
40  UIKitCore                     	       0x18634a2f0 -[UIApplication workspace:didCreateScene:withTransitionContext:completion:] + 452
41  UIKitCore                     	       0x185da98b0 -[UIApplicationSceneClientAgent scene:didInitializeWithEvent:completion:] + 260
42  FrontBoardServices            	       0x1886011d8 __95-[FBSScene _callOutQueue_didCreateWithTransitionContext:alternativeCreationCallout:completion:]_block_invoke + 304
43  FrontBoardServices            	       0x188601644 -[FBSScene _callOutQueue_maybeCoalesceClientSettingsUpdates:] + 116
44  FrontBoardServices            	       0x18860102c -[FBSScene _callOutQueue_didCreateWithTransitionContext:alternativeCreationCallout:completion:] + 408
45  FrontBoardServices            	       0x18866cfc4 __93-[FBSWorkspaceScenesClient _callOutQueue_sendDidCreateForScene:transitionContext:completion:]_block_invoke.274 + 232
46  FrontBoardServices            	       0x18860e874 -[FBSWorkspace _calloutQueue_executeCalloutFromSource:withBlock:] + 160
47  FrontBoardServices            	       0x18862ce44 -[FBSWorkspaceScenesClient _callOutQueue_sendDidCreateForScene:transitionContext:completion:] + 392
48  FrontBoardServices            	       0x18862e518 __92-[FBSWorkspaceScenesClient createSceneWithIdentity:parameters:transitionContext:completion:]_block_invoke_2 + 204
49  FrontBoardServices            	       0x18860e874 -[FBSWorkspace _calloutQueue_executeCalloutFromSource:withBlock:] + 160
50  libdispatch.dylib             	       0x1801db4b0 _dispatch_client_callout + 12
51  libdispatch.dylib             	       0x1801c5b0c _dispatch_block_invoke_direct + 376
52  BoardServices                 	       0x18807873c __BSSERVICEMAINRUNLOOPQUEUE_IS_CALLING_OUT_TO_A_BLOCK__ + 44
53  BoardServices                 	       0x18807776c BSServiceMainRunLoopSourceHandler + 180
54  CoreFoundation                	       0x1804563a4 __CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__ + 24
55  CoreFoundation                	       0x1804562ec __CFRunLoopDoSource0 + 168
56  CoreFoundation                	       0x180455a78 __CFRunLoopDoSources0 + 220
57  CoreFoundation                	       0x180454c4c __CFRunLoopRun + 760
58  CoreFoundation                	       0x18044fcec _CFRunLoopRunSpecificWithOptions + 496
59  GraphicsServices              	       0x192a669bc GSEventRunModal + 116
60  UIKitCore                     	       0x186348574 -[UIApplication _run] + 772
61  UIKitCore                     	       0x18634c79c UIApplicationMain + 124
62  MediaFeedChallenge.debug.dylib	       0x104d565bc __debug_main_executable_dylib_entry_point + 100 (main.m:8)
63  ???                           	       0x1029793d0 ???
64  dyld                          	       0x102b48d54 start + 7184

Thread 1:

Thread 2:

Thread 3:

Thread 4:

Thread 5:: com.apple.uikit.eventfetch-thread
0   libsystem_kernel.dylib        	       0x1028c0b70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x1028d190c mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x1028c8c10 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x1028c0ee4 mach_msg + 20
4   CoreFoundation                	       0x180455c04 __CFRunLoopServiceMachPort + 156
5   CoreFoundation                	       0x180454dbc __CFRunLoopRun + 1128
6   CoreFoundation                	       0x18044fcec _CFRunLoopRunSpecificWithOptions + 496
7   Foundation                    	       0x18110be48 -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 208
8   Foundation                    	       0x18110c068 -[NSRunLoop(NSRunLoop) runUntilDate:] + 60
9   UIKitCore                     	       0x18609fc50 -[UIEventFetcher threadMain] + 392
10  Foundation                    	       0x181132d14 __NSThread__start__ + 716
11  libsystem_pthread.dylib       	       0x1028425ac _pthread_start + 104
12  libsystem_pthread.dylib       	       0x10283d998 thread_start + 8

Thread 6:

Thread 7:

Thread 8::  Dispatch queue: com.apple.libtrace.state.block-list
0   libsystem_kernel.dylib        	       0x1028c277c __ulock_wait + 8
1   libdispatch.dylib             	       0x1801c25b0 _dlock_wait + 52
2   libdispatch.dylib             	       0x1801c23bc _dispatch_thread_event_wait_slow + 52
3   libdispatch.dylib             	       0x1801d1368 __DISPATCH_WAIT_FOR_QUEUE__ + 392
4   libdispatch.dylib             	       0x1801d0e64 _dispatch_sync_f_slow + 160
5   libsystem_trace.dylib         	       0x1800f309c ___os_state_request_for_self_block_invoke + 340
6   libdispatch.dylib             	       0x1801c07a8 _dispatch_call_block_and_release + 24
7   libdispatch.dylib             	       0x1801db4b0 _dispatch_client_callout + 12
8   libdispatch.dylib             	       0x1801c9c28 _dispatch_lane_serial_drain + 984
9   libdispatch.dylib             	       0x1801ca6e8 _dispatch_lane_invoke + 396
10  libdispatch.dylib             	       0x1801d5534 _dispatch_root_queue_drain_deferred_wlh + 288
11  libdispatch.dylib             	       0x1801d4c74 _dispatch_workloop_worker_thread + 692
12  libsystem_pthread.dylib       	       0x10283eb8c _pthread_wqthread + 288
13  libsystem_pthread.dylib       	       0x10283d98c start_wqthread + 8

Thread 9:

Thread 10:

Thread 11:

Thread 12:

Thread 13::  Dispatch queue: com.apple.UIKit.KeyboardManagement
0   libsystem_kernel.dylib        	       0x1028c277c __ulock_wait + 8
1   libdispatch.dylib             	       0x1801c25b0 _dlock_wait + 52
2   libdispatch.dylib             	       0x1801c23bc _dispatch_thread_event_wait_slow + 52
3   libdispatch.dylib             	       0x1801d1368 __DISPATCH_WAIT_FOR_QUEUE__ + 392
4   libdispatch.dylib             	       0x1801d0e64 _dispatch_sync_f_slow + 160
5   UIKitCore                     	       0x186173aa8 __37-[_UIRemoteKeyboards startConnection]_block_invoke.400 + 116
6   CoreFoundation                	       0x1804fdba0 __invoking___ + 144
7   CoreFoundation                	       0x1804fad44 -[NSInvocation invoke] + 276
8   Foundation                    	       0x1811f038c <deduplicated_symbol> + 12
9   Foundation                    	       0x1811efff8 -[NSXPCConnection _decodeAndInvokeReplyBlockWithEvent:sequence:replyInfo:] + 484
10  Foundation                    	       0x1811f3ee0 __88-[NSXPCConnection _sendInvocation:orArguments:count:methodSignature:selector:withProxy:]_block_invoke_5 + 184
11  libxpc.dylib                  	       0x180116400 _xpc_connection_reply_callout + 60
12  libxpc.dylib                  	       0x180108c60 _xpc_connection_call_reply_async + 92
13  libdispatch.dylib             	       0x1801db4d8 <deduplicated_symbol> + 12
14  libdispatch.dylib             	       0x1801dfc04 _dispatch_mach_msg_async_reply_invoke + 508
15  libdispatch.dylib             	       0x1801c9980 _dispatch_lane_serial_drain + 304
16  libdispatch.dylib             	       0x1801ca6e8 _dispatch_lane_invoke + 396
17  libdispatch.dylib             	       0x1801d5534 _dispatch_root_queue_drain_deferred_wlh + 288
18  libdispatch.dylib             	       0x1801d4c74 _dispatch_workloop_worker_thread + 692
19  libsystem_pthread.dylib       	       0x10283eb8c _pthread_wqthread + 288
20  libsystem_pthread.dylib       	       0x10283d98c start_wqthread + 8

Thread 14:

Thread 15:


Thread 0 crashed with ARM Thread State (64-bit):
    x0: 0x0000000000000000   x1: 0x0000000000000000   x2: 0x0000000000000000   x3: 0x0000000000000000
    x4: 0x0000000180306cab   x5: 0x000000016d5d5c00   x6: 0x000000000000006e   x7: 0x0000000000000000
    x8: 0x0000000102bede40   x9: 0x5e7f15f8bc14f240  x10: 0x0000000000000002  x11: 0x0000010000000000
   x12: 0x00000000fffffffd  x13: 0x0000000000000000  x14: 0x0000000000000000  x15: 0x0000000000000000
   x16: 0x0000000000000148  x17: 0x0000000000000002  x18: 0x0000000000000000  x19: 0x0000000000000006
   x20: 0x0000000000000103  x21: 0x0000000102bedf20  x22: 0x00000001f26c8000  x23: 0x0000000000000000
   x24: 0x0000000000000000  x25: 0x00000001f28d1000  x26: 0x00000001f2888000  x27: 0x000000002b870064
   x28: 0x0000000000000010   fp: 0x000000016d5d5b70   lr: 0x00000001028422a8
    sp: 0x000000016d5d5b50   pc: 0x00000001028c885c cpsr: 0x40000000
   far: 0x0000000000000000  esr: 0x56000080 (Syscall)

Binary Images:
       0x102b40000 -        0x102bdffff dyld (*) <bc4db5f4-1c64-3706-8006-73b78c3e1f1a> /usr/lib/dyld
       0x102824000 -        0x102827fff org.reactjs.native.example.MediaFeedChallenge (1.0) <4f7393cc-6c19-3dad-9d2c-2b219b66befc> /Users/USER/Library/Developer/CoreSimulator/Devices/4E5E3186-EDAC-40CC-95DF-F36ED408D0D0/data/Containers/Bundle/Application/E990C421-83E9-49D9-9A75-11F7E86705E4/MediaFeedChallenge.app/MediaFeedChallenge
       0x104d54000 -        0x105787fff MediaFeedChallenge.debug.dylib (*) <6e4613ac-a229-35ed-9788-9306f119f66c> /Users/USER/Library/Developer/CoreSimulator/Devices/4E5E3186-EDAC-40CC-95DF-F36ED408D0D0/data/Containers/Bundle/Application/E990C421-83E9-49D9-9A75-11F7E86705E4/MediaFeedChallenge.app/MediaFeedChallenge.debug.dylib
       0x103214000 -        0x10351bfff dev.hermesengine.iphonesimulator (0.12.0) <04b8008c-a953-336f-8043-1540012d2df6> /Users/USER/Library/Developer/CoreSimulator/Devices/4E5E3186-EDAC-40CC-95DF-F36ED408D0D0/data/Containers/Bundle/Application/E990C421-83E9-49D9-9A75-11F7E86705E4/MediaFeedChallenge.app/Frameworks/hermes.framework/hermes
       0x1028a0000 -        0x1028a7fff libsystem_platform.dylib (*) <9463fc06-cc7c-38e8-ad3c-1b9f2617df53> /usr/lib/system/libsystem_platform.dylib
       0x1028c0000 -        0x1028fbfff libsystem_kernel.dylib (*) <1a15cc38-efcc-34ea-a261-cfd370f4b557> /usr/lib/system/libsystem_kernel.dylib
       0x10283c000 -        0x10284bfff libsystem_pthread.dylib (*) <b1095734-2a4d-3e8c-839e-b10ae9598d61> /usr/lib/system/libsystem_pthread.dylib
       0x102c74000 -        0x102c7ffff libobjc-trampolines.dylib (*) <997b234d-5c24-3e21-97d6-33b6853818c0> /Volumes/VOLUME/*/libobjc-trampolines.dylib
       0x180141000 -        0x1801be2c3 libsystem_c.dylib (*) <e0197e7b-9d61-356a-90b7-4be1270b82d5> /Volumes/VOLUME/*/libsystem_c.dylib
       0x1802f2000 -        0x18030a56f libc++abi.dylib (*) <0fc14bd2-2110-348c-8278-7a6fb63a7000> /Volumes/VOLUME/*/libc++abi.dylib
       0x180070000 -        0x1800ad297 libobjc.A.dylib (*) <880f8664-cd53-3912-bdd5-5e3159295f7d> /Volumes/VOLUME/*/libobjc.A.dylib
       0x1803c3000 -        0x1807df37f com.apple.CoreFoundation (6.9) <4f6d050d-95ee-3a95-969c-3a98b29df6ff> /Volumes/VOLUME/*/CoreFoundation.framework/CoreFoundation
       0x18519e000 -        0x1873c071f com.apple.UIKitCore (1.0) <196154ff-ba04-33cd-9277-98f9aa0b7499> /Volumes/VOLUME/*/UIKitCore.framework/UIKitCore
       0x1885f2000 -        0x1886bf51f com.apple.FrontBoardServices (1000.1.4) <aca7be62-53b7-3d18-a1e0-982863cf64e9> /Volumes/VOLUME/*/FrontBoardServices.framework/FrontBoardServices
       0x1801bf000 -        0x1802041bf libdispatch.dylib (*) <ec9ecf10-959d-3da1-a055-6de970159b9d> /Volumes/VOLUME/*/libdispatch.dylib
       0x18804d000 -        0x1880cb0bf com.apple.BoardServices (1.0) <c6f1483b-f1e2-37b4-9596-2fcff30f35a3> /Volumes/VOLUME/*/BoardServices.framework/BoardServices
       0x192a64000 -        0x192a6bdbf com.apple.GraphicsServices (1.0) <4e5b0462-6170-3367-9475-4ff8b8dfe4e6> /Volumes/VOLUME/*/GraphicsServices.framework/GraphicsServices
               0x0 - 0xffffffffffffffff ??? (*) <00000000-0000-0000-0000-000000000000> ???
       0x18085f000 -        0x1815d18df com.apple.Foundation (6.9) <c153116f-dd31-3fa9-89bb-04b47c1fa83d> /Volumes/VOLUME/*/Foundation.framework/Foundation
       0x1800da000 -        0x1800f7fff libsystem_trace.dylib (*) <11a939b5-2e77-3a64-84a4-5dc0a1c74bbd> /Volumes/VOLUME/*/libsystem_trace.dylib
       0x1800f8000 -        0x18013d4ff libxpc.dylib (*) <5d3b42dd-89e9-36f1-8e20-f4bbf2b7644e> /Volumes/VOLUME/*/libxpc.dylib

External Modification Summary:
  Calls made by other processes targeting this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by all processes on this machine:
    task_for_pid: 3
    thread_create: 0
    thread_set_state: 1

VM Region Summary:
ReadOnly portion of Libraries: Total=1.4G resident=0K(0%) swapped_out_or_unallocated=1.4G(100%)
Writable regions: Total=640.8M written=1875K(0%) resident=1875K(0%) swapped_out=0K(0%) unallocated=639.0M(100%)

                                VIRTUAL   REGION 
REGION TYPE                        SIZE    COUNT (non-coalesced) 
===========                     =======  ======= 
Activity Tracing                   256K        1 
Foundation                          16K        1 
Kernel Alloc Once                   32K        1 
MALLOC                           622.4M       40 
MALLOC guard page                  128K        8 
STACK GUARD                       56.2M       16 
Stack                             16.0M       16 
VM_ALLOCATE                        160K        2 
__DATA                            26.9M      521 
__DATA_CONST                      73.2M      541 
__DATA_DIRTY                       139K       13 
__FONT_DATA                        2352        1 
__LINKEDIT                       728.8M        9 
__OBJC_RO                         62.5M        1 
__OBJC_RW                         2771K        1 
__TEXT                           678.7M      554 
__TPRO_CONST                       148K        2 
dyld private memory                2.2G       13 
mapped file                       33.3M        9 
page table in kernel              1875K        1 
shared memory                       16K        1 
===========                     =======  ======= 
TOTAL                              4.4G     1752 


-----------
Full Report
-----------

{"app_name":"MediaFeedChallenge","timestamp":"2026-03-03 23:37:08.00 -0300","app_version":"1.0","slice_uuid":"4f7393cc-6c19-3dad-9d2c-2b219b66befc","build_version":"1","platform":7,"bundleID":"org.reactjs.native.example.MediaFeedChallenge","share_with_app_devs":0,"is_first_party":0,"bug_type":"309","os_version":"macOS 26.3 (25D125)","roots_installed":0,"name":"MediaFeedChallenge","incident_id":"82532A31-4B93-4976-B4D0-33012149559D"}
{
  "uptime" : 480000,
  "procRole" : "Foreground",
  "version" : 2,
  "userID" : 501,
  "deployVersion" : 210,
  "modelCode" : "Mac16,8",
  "coalitionID" : 97351,
  "osVersion" : {
    "train" : "macOS 26.3",
    "build" : "25D125",
    "releaseType" : "User"
  },
  "captureTime" : "2026-03-03 23:37:06.9393 -0300",
  "codeSigningMonitor" : 2,
  "incident" : "82532A31-4B93-4976-B4D0-33012149559D",
  "pid" : 77097,
  "translated" : false,
  "cpuType" : "ARM-64",
  "procLaunch" : "2026-03-03 23:37:06.6861 -0300",
  "procStartAbsTime" : 11662477562204,
  "procExitAbsTime" : 11662483627231,
  "procName" : "MediaFeedChallenge",
  "procPath" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/4E5E3186-EDAC-40CC-95DF-F36ED408D0D0\/data\/Containers\/Bundle\/Application\/E990C421-83E9-49D9-9A75-11F7E86705E4\/MediaFeedChallenge.app\/MediaFeedChallenge",
  "bundleInfo" : {"CFBundleShortVersionString":"1.0","CFBundleVersion":"1","CFBundleIdentifier":"org.reactjs.native.example.MediaFeedChallenge"},
  "storeInfo" : {"deviceIdentifierForVendor":"AB659757-571B-5757-8ACD-46FB89248B21","thirdParty":true},
  "parentProc" : "launchd_sim",
  "parentPid" : 76007,
  "coalitionName" : "com.apple.CoreSimulator.SimDevice.4E5E3186-EDAC-40CC-95DF-F36ED408D0D0",
  "crashReporterKey" : "16C8C20A-1728-48B8-C7DA-38933C140632",
  "appleIntelligenceStatus" : {"state":"available"},
  "developerMode" : 1,
  "responsiblePid" : 68924,
  "responsibleProc" : "SimulatorTrampoline",
  "codeSigningID" : "org.reactjs.native.example.MediaFeedChallenge",
  "codeSigningTeamID" : "",
  "codeSigningFlags" : 570425857,
  "codeSigningValidationCategory" : 10,
  "codeSigningTrustLevel" : 4294967295,
  "codeSigningAuxiliaryInfo" : 0,
  "instructionByteStream" : {"beforePC":"4wAAVP17v6n9AwCRKeP\/l78DAJH9e8GowANf1sADX9YQKYDSARAA1A==","atPC":"4wAAVP17v6n9AwCRH+P\/l78DAJH9e8GowANf1sADX9ZwCoDSARAA1A=="},
  "bootSessionUUID" : "89B08AF4-BDBB-49E6-BE7A-479E308EA33A",
  "wakeTime" : 349987,
  "sleepWakeUUID" : "E9F5A662-EE69-4090-AFF3-4A19CE071525",
  "sip" : "enabled",
  "exception" : {"codes":"0x0000000000000000, 0x0000000000000000","rawCodes":[0,0],"type":"EXC_CRASH","signal":"SIGABRT"},
  "termination" : {"flags":0,"code":6,"namespace":"SIGNAL","indicator":"Abort trap: 6","byProc":"MediaFeedChallenge","byPid":77097},
  "extMods" : {"caller":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"system":{"thread_create":0,"thread_set_state":1,"task_for_pid":3},"targeted":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"warnings":0},
  "lastExceptionBacktrace" : [{"imageOffset":1262020,"symbol":"__exceptionPreprocess","symbolLocation":160,"imageIndex":11},{"imageOffset":180372,"symbol":"objc_exception_throw","symbolLocation":72,"imageIndex":10},{"imageOffset":1261792,"symbol":"-[NSException initWithCoder:]","symbolLocation":0,"imageIndex":11},{"imageOffset":5127108,"sourceLine":178,"sourceFile":"RCTAppDelegate.mm","symbol":"-[RCTAppDelegate bundleURL]","imageIndex":2,"symbolLocation":52},{"imageOffset":5129056,"sourceLine":244,"sourceFile":"RCTAppDelegate.mm","symbol":"__42-[RCTAppDelegate createRCTRootViewFactory]_block_invoke","imageIndex":2,"symbolLocation":44},{"imageOffset":5158940,"sourceLine":273,"sourceFile":"RCTRootViewFactory.mm","symbol":"-[RCTRootViewFactory bundleURL]","imageIndex":2,"symbolLocation":56},{"imageOffset":5158796,"sourceLine":268,"sourceFile":"RCTRootViewFactory.mm","symbol":"-[RCTRootViewFactory sourceURLForBridge:]","imageIndex":2,"symbolLocation":52},{"imageOffset":1035456,"sourceLine":446,"sourceFile":"RCTBridge.mm","symbol":"-[RCTBridge setUp]","imageIndex":2,"symbolLocation":980},{"imageOffset":1029980,"sourceLine":265,"sourceFile":"RCTBridge.mm","symbol":"-[RCTBridge initWithDelegate:bundleURL:moduleProvider:launchOptions:]","imageIndex":2,"symbolLocation":376},{"imageOffset":1029132,"sourceLine":242,"sourceFile":"RCTBridge.mm","symbol":"-[RCTBridge initWithDelegate:launchOptions:]","imageIndex":2,"symbolLocation":100},{"imageOffset":5125464,"sourceLine":93,"sourceFile":"RCTAppDelegate.mm","symbol":"-[RCTAppDelegate createBridgeWithDelegate:launchOptions:]","imageIndex":2,"symbolLocation":100},{"imageOffset":5129528,"sourceLine":260,"sourceFile":"RCTAppDelegate.mm","symbol":"__42-[RCTAppDelegate createRCTRootViewFactory]_block_invoke.24","imageIndex":2,"symbolLocation":88},{"imageOffset":5156284,"sourceLine":212,"sourceFile":"RCTRootViewFactory.mm","symbol":"-[RCTRootViewFactory createBridgeIfNeeded:]","imageIndex":2,"symbolLocation":248},{"imageOffset":5152352,"sourceLine":154,"sourceFile":"RCTRootViewFactory.mm","symbol":"-[RCTRootViewFactory viewWithModuleName:initialProperties:launchOptions:]","imageIndex":2,"symbolLocation":740},{"imageOffset":5123780,"sourceLine":60,"sourceFile":"RCTAppDelegate.mm","symbol":"-[RCTAppDelegate application:didFinishLaunchingWithOptions:]","imageIndex":2,"symbolLocation":360},{"imageOffset":9212,"sourceLine":14,"sourceFile":"AppDelegate.mm","symbol":"-[AppDelegate application:didFinishLaunchingWithOptions:]","imageIndex":2,"symbolLocation":156},{"imageOffset":18508844,"symbol":"-[UIApplication _handleDelegateCallbacksWithOptions:isSuspended:restoreState:]","symbolLocation":332,"imageIndex":12},{"imageOffset":18514280,"symbol":"-[UIApplication _callInitializationDelegatesWithActions:forScene:payload:fromOriginatingProcess:]","symbolLocation":3036,"imageIndex":12},{"imageOffset":18535812,"symbol":"-[UIApplication _runWithMainScene:transitionContext:completion:]","symbolLocation":800,"imageIndex":12},{"imageOffset":7516316,"symbol":"-[_UISceneLifecycleMultiplexer completeApplicationLaunchWithFBSScene:transitionContext:]","symbolLocation":88,"imageIndex":12},{"imageOffset":13593808,"symbol":"_UIScenePerformActionsWithLifecycleActionMask","symbolLocation":96,"imageIndex":12},{"imageOffset":7518584,"symbol":"__101-[_UISceneLifecycleMultiplexer _evalTransitionToSettings:fromSettings:forceExit:withTransitionStore:]_block_invoke","symbolLocation":224,"imageIndex":12},{"imageOffset":7517396,"symbol":"-[_UISceneLifecycleMultiplexer _performBlock:withApplicationOfDeactivationReasons:fromReasons:]","symbolLocation":204,"imageIndex":12},{"imageOffset":7518124,"symbol":"-[_UISceneLifecycleMultiplexer _evalTransitionToSettings:fromSettings:forceExit:withTransitionStore:]","symbolLocation":576,"imageIndex":12},{"imageOffset":7516612,"symbol":"-[_UISceneLifecycleMultiplexer uiScene:transitionedFromState:withTransitionContext:]","symbolLocation":240,"imageIndex":12},{"imageOffset":7565760,"symbol":"__186-[_UIWindowSceneFBSSceneTransitionContextDrivenLifecycleSettingsDiffAction _performActionsForUIScene:withUpdatedFBSScene:settingsDiff:fromSettings:transitionContext:lifecycleActionType:]_block_invoke","symbolLocation":140,"imageIndex":12},{"imageOffset":12453028,"symbol":"+[BSAnimationSettings(UIKit) tryAnimatingWithSettings:fromCurrentState:actions:completion:]","symbolLocation":656,"imageIndex":12},{"imageOffset":13693304,"symbol":"_UISceneSettingsDiffActionPerformChangesWithTransitionContextAndCompletion","symbolLocation":196,"imageIndex":12},{"imageOffset":7565004,"symbol":"-[_UIWindowSceneFBSSceneTransitionContextDrivenLifecycleSettingsDiffAction _performActionsForUIScene:withUpdatedFBSScene:settingsDiff:fromSettings:transitionContext:lifecycleActionType:]","symbolLocation":288,"imageIndex":12},{"imageOffset":5604592,"symbol":"__64-[UIScene scene:didUpdateWithDiff:transitionContext:completion:]_block_invoke.190","symbolLocation":612,"imageIndex":12},{"imageOffset":5599888,"symbol":"-[UIScene _emitSceneSettingsUpdateResponseForCompletion:afterSceneUpdateWork:]","symbolLocation":200,"imageIndex":12},{"imageOffset":5603696,"symbol":"-[UIScene scene:didUpdateWithDiff:transitionContext:completion:]","symbolLocation":220,"imageIndex":12},{"imageOffset":18531056,"symbol":"-[UIApplication workspace:didCreateScene:withTransitionContext:completion:]","symbolLocation":452,"imageIndex":12},{"imageOffset":12630192,"symbol":"-[UIApplicationSceneClientAgent scene:didInitializeWithEvent:completion:]","symbolLocation":260,"imageIndex":12},{"imageOffset":61912,"symbol":"__95-[FBSScene _callOutQueue_didCreateWithTransitionContext:alternativeCreationCallout:completion:]_block_invoke","symbolLocation":304,"imageIndex":13},{"imageOffset":63044,"symbol":"-[FBSScene _callOutQueue_maybeCoalesceClientSettingsUpdates:]","symbolLocation":116,"imageIndex":13},{"imageOffset":61484,"symbol":"-[FBSScene _callOutQueue_didCreateWithTransitionContext:alternativeCreationCallout:completion:]","symbolLocation":408,"imageIndex":13},{"imageOffset":503748,"symbol":"__93-[FBSWorkspaceScenesClient _callOutQueue_sendDidCreateForScene:transitionContext:completion:]_block_invoke.274","symbolLocation":232,"imageIndex":13},{"imageOffset":116852,"symbol":"-[FBSWorkspace _calloutQueue_executeCalloutFromSource:withBlock:]","symbolLocation":160,"imageIndex":13},{"imageOffset":241220,"symbol":"-[FBSWorkspaceScenesClient _callOutQueue_sendDidCreateForScene:transitionContext:completion:]","symbolLocation":392,"imageIndex":13},{"imageOffset":247064,"symbol":"__92-[FBSWorkspaceScenesClient createSceneWithIdentity:parameters:transitionContext:completion:]_block_invoke_2","symbolLocation":204,"imageIndex":13},{"imageOffset":116852,"symbol":"-[FBSWorkspace _calloutQueue_executeCalloutFromSource:withBlock:]","symbolLocation":160,"imageIndex":13},{"imageOffset":115888,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":14},{"imageOffset":27404,"symbol":"_dispatch_block_invoke_direct","symbolLocation":376,"imageIndex":14},{"imageOffset":177980,"symbol":"__BSSERVICEMAINRUNLOOPQUEUE_IS_CALLING_OUT_TO_A_BLOCK__","symbolLocation":44,"imageIndex":15},{"imageOffset":173932,"symbol":"BSServiceMainRunLoopSourceHandler","symbolLocation":180,"imageIndex":15},{"imageOffset":603044,"symbol":"__CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__","symbolLocation":24,"imageIndex":11},{"imageOffset":602860,"symbol":"__CFRunLoopDoSource0","symbolLocation":168,"imageIndex":11},{"imageOffset":600696,"symbol":"__CFRunLoopDoSources0","symbolLocation":220,"imageIndex":11},{"imageOffset":597068,"symbol":"__CFRunLoopRun","symbolLocation":760,"imageIndex":11},{"imageOffset":576748,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":10684,"symbol":"GSEventRunModal","symbolLocation":116,"imageIndex":16},{"imageOffset":18523508,"symbol":"-[UIApplication _run]","symbolLocation":772,"imageIndex":12},{"imageOffset":18540444,"symbol":"UIApplicationMain","symbolLocation":124,"imageIndex":12},{"imageOffset":9660,"sourceLine":8,"sourceFile":"main.m","symbol":"__debug_main_executable_dylib_entry_point","imageIndex":2,"symbolLocation":100},{"imageOffset":4338455504,"imageIndex":17},{"imageOffset":36180,"symbol":"start","symbolLocation":7184,"imageIndex":0}],
  "faultingThread" : 0,
  "threads" : [{"triggered":true,"id":13430716,"threadState":{"x":[{"value":0},{"value":0},{"value":0},{"value":0},{"value":6445624491},{"value":6129802240},{"value":110},{"value":0},{"value":4341030464,"symbolLocation":0,"symbol":"_main_thread"},{"value":6809185319659041344},{"value":2},{"value":1099511627776},{"value":4294967293},{"value":0},{"value":0},{"value":0},{"value":328},{"value":2},{"value":0},{"value":6},{"value":259},{"value":4341030688,"symbolLocation":224,"symbol":"_main_thread"},{"value":8362164224,"symbolLocation":0,"symbol":"objc_debug_taggedpointer_classes"},{"value":0},{"value":0},{"value":8364298240,"symbolLocation":32,"symbol":"OBJC_METACLASS_$__UIStatusBarVPNDisconnectView"},{"value":8363999232,"symbolLocation":4,"symbol":"_MergedGlobals"},{"value":730267748},{"value":16}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4337181352},"cpsr":{"value":1073741824},"fp":{"value":6129802096},"sp":{"value":6129802064},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337731676,"matchesCrashFrame":1},"far":{"value":0}},"queue":"com.apple.main-thread","frames":[{"imageOffset":34908,"symbol":"__pthread_kill","symbolLocation":8,"imageIndex":5},{"imageOffset":25256,"symbol":"pthread_kill","symbolLocation":264,"imageIndex":6},{"imageOffset":477588,"symbol":"abort","symbolLocation":100,"imageIndex":8},{"imageOffset":70252,"symbol":"__abort_message","symbolLocation":128,"imageIndex":9},{"imageOffset":4516,"symbol":"demangling_terminate_handler()","symbolLocation":268,"imageIndex":9},{"imageOffset":29208,"symbol":"_objc_terminate()","symbolLocation":124,"imageIndex":10},{"imageOffset":67416,"symbol":"std::__terminate(void (*)())","symbolLocation":12,"imageIndex":9},{"imageOffset":79808,"symbol":"__cxxabiv1::failed_throw(__cxxabiv1::__cxa_exception*)","symbolLocation":32,"imageIndex":9},{"imageOffset":79776,"symbol":"__cxa_throw","symbolLocation":88,"imageIndex":9},{"imageOffset":180684,"symbol":"objc_exception_throw","symbolLocation":384,"imageIndex":10},{"imageOffset":1261792,"symbol":"+[NSException raise:format:]","symbolLocation":124,"imageIndex":11},{"imageOffset":5127108,"sourceLine":176,"sourceFile":"RCTAppDelegate.mm","symbol":"-[RCTAppDelegate bundleURL]","imageIndex":2,"symbolLocation":52},{"imageOffset":5129056,"sourceLine":244,"sourceFile":"RCTAppDelegate.mm","symbol":"__42-[RCTAppDelegate createRCTRootViewFactory]_block_invoke","imageIndex":2,"symbolLocation":44},{"imageOffset":5158940,"sourceLine":273,"sourceFile":"RCTRootViewFactory.mm","symbol":"-[RCTRootViewFactory bundleURL]","imageIndex":2,"symbolLocation":56},{"imageOffset":5158796,"sourceLine":268,"sourceFile":"RCTRootViewFactory.mm","symbol":"-[RCTRootViewFactory sourceURLForBridge:]","imageIndex":2,"symbolLocation":52},{"imageOffset":1035456,"sourceLine":446,"sourceFile":"RCTBridge.mm","symbol":"-[RCTBridge setUp]","imageIndex":2,"symbolLocation":980},{"imageOffset":1029980,"sourceLine":265,"sourceFile":"RCTBridge.mm","symbol":"-[RCTBridge initWithDelegate:bundleURL:moduleProvider:launchOptions:]","imageIndex":2,"symbolLocation":376},{"imageOffset":1029132,"sourceLine":242,"sourceFile":"RCTBridge.mm","symbol":"-[RCTBridge initWithDelegate:launchOptions:]","imageIndex":2,"symbolLocation":100},{"imageOffset":5125464,"sourceLine":93,"sourceFile":"RCTAppDelegate.mm","symbol":"-[RCTAppDelegate createBridgeWithDelegate:launchOptions:]","imageIndex":2,"symbolLocation":100},{"imageOffset":5129528,"sourceLine":260,"sourceFile":"RCTAppDelegate.mm","symbol":"__42-[RCTAppDelegate createRCTRootViewFactory]_block_invoke.24","imageIndex":2,"symbolLocation":88},{"imageOffset":5156284,"sourceLine":212,"sourceFile":"RCTRootViewFactory.mm","symbol":"-[RCTRootViewFactory createBridgeIfNeeded:]","imageIndex":2,"symbolLocation":248},{"imageOffset":5152352,"sourceLine":154,"sourceFile":"RCTRootViewFactory.mm","symbol":"-[RCTRootViewFactory viewWithModuleName:initialProperties:launchOptions:]","imageIndex":2,"symbolLocation":740},{"imageOffset":5123780,"sourceLine":60,"sourceFile":"RCTAppDelegate.mm","symbol":"-[RCTAppDelegate application:didFinishLaunchingWithOptions:]","imageIndex":2,"symbolLocation":360},{"imageOffset":9212,"sourceLine":14,"sourceFile":"AppDelegate.mm","symbol":"-[AppDelegate application:didFinishLaunchingWithOptions:]","imageIndex":2,"symbolLocation":156},{"imageOffset":18508844,"symbol":"-[UIApplication _handleDelegateCallbacksWithOptions:isSuspended:restoreState:]","symbolLocation":332,"imageIndex":12},{"imageOffset":18514280,"symbol":"-[UIApplication _callInitializationDelegatesWithActions:forScene:payload:fromOriginatingProcess:]","symbolLocation":3036,"imageIndex":12},{"imageOffset":18535812,"symbol":"-[UIApplication _runWithMainScene:transitionContext:completion:]","symbolLocation":800,"imageIndex":12},{"imageOffset":7516316,"symbol":"-[_UISceneLifecycleMultiplexer completeApplicationLaunchWithFBSScene:transitionContext:]","symbolLocation":88,"imageIndex":12},{"imageOffset":13593808,"symbol":"_UIScenePerformActionsWithLifecycleActionMask","symbolLocation":96,"imageIndex":12},{"imageOffset":7518584,"symbol":"__101-[_UISceneLifecycleMultiplexer _evalTransitionToSettings:fromSettings:forceExit:withTransitionStore:]_block_invoke","symbolLocation":224,"imageIndex":12},{"imageOffset":7517396,"symbol":"-[_UISceneLifecycleMultiplexer _performBlock:withApplicationOfDeactivationReasons:fromReasons:]","symbolLocation":204,"imageIndex":12},{"imageOffset":7518124,"symbol":"-[_UISceneLifecycleMultiplexer _evalTransitionToSettings:fromSettings:forceExit:withTransitionStore:]","symbolLocation":576,"imageIndex":12},{"imageOffset":7516612,"symbol":"-[_UISceneLifecycleMultiplexer uiScene:transitionedFromState:withTransitionContext:]","symbolLocation":240,"imageIndex":12},{"imageOffset":7565760,"symbol":"__186-[_UIWindowSceneFBSSceneTransitionContextDrivenLifecycleSettingsDiffAction _performActionsForUIScene:withUpdatedFBSScene:settingsDiff:fromSettings:transitionContext:lifecycleActionType:]_block_invoke","symbolLocation":140,"imageIndex":12},{"imageOffset":12453028,"symbol":"+[BSAnimationSettings(UIKit) tryAnimatingWithSettings:fromCurrentState:actions:completion:]","symbolLocation":656,"imageIndex":12},{"imageOffset":13693304,"symbol":"_UISceneSettingsDiffActionPerformChangesWithTransitionContextAndCompletion","symbolLocation":196,"imageIndex":12},{"imageOffset":7565004,"symbol":"-[_UIWindowSceneFBSSceneTransitionContextDrivenLifecycleSettingsDiffAction _performActionsForUIScene:withUpdatedFBSScene:settingsDiff:fromSettings:transitionContext:lifecycleActionType:]","symbolLocation":288,"imageIndex":12},{"imageOffset":5604592,"symbol":"__64-[UIScene scene:didUpdateWithDiff:transitionContext:completion:]_block_invoke.190","symbolLocation":612,"imageIndex":12},{"imageOffset":5599888,"symbol":"-[UIScene _emitSceneSettingsUpdateResponseForCompletion:afterSceneUpdateWork:]","symbolLocation":200,"imageIndex":12},{"imageOffset":5603696,"symbol":"-[UIScene scene:didUpdateWithDiff:transitionContext:completion:]","symbolLocation":220,"imageIndex":12},{"imageOffset":18531056,"symbol":"-[UIApplication workspace:didCreateScene:withTransitionContext:completion:]","symbolLocation":452,"imageIndex":12},{"imageOffset":12630192,"symbol":"-[UIApplicationSceneClientAgent scene:didInitializeWithEvent:completion:]","symbolLocation":260,"imageIndex":12},{"imageOffset":61912,"symbol":"__95-[FBSScene _callOutQueue_didCreateWithTransitionContext:alternativeCreationCallout:completion:]_block_invoke","symbolLocation":304,"imageIndex":13},{"imageOffset":63044,"symbol":"-[FBSScene _callOutQueue_maybeCoalesceClientSettingsUpdates:]","symbolLocation":116,"imageIndex":13},{"imageOffset":61484,"symbol":"-[FBSScene _callOutQueue_didCreateWithTransitionContext:alternativeCreationCallout:completion:]","symbolLocation":408,"imageIndex":13},{"imageOffset":503748,"symbol":"__93-[FBSWorkspaceScenesClient _callOutQueue_sendDidCreateForScene:transitionContext:completion:]_block_invoke.274","symbolLocation":232,"imageIndex":13},{"imageOffset":116852,"symbol":"-[FBSWorkspace _calloutQueue_executeCalloutFromSource:withBlock:]","symbolLocation":160,"imageIndex":13},{"imageOffset":241220,"symbol":"-[FBSWorkspaceScenesClient _callOutQueue_sendDidCreateForScene:transitionContext:completion:]","symbolLocation":392,"imageIndex":13},{"imageOffset":247064,"symbol":"__92-[FBSWorkspaceScenesClient createSceneWithIdentity:parameters:transitionContext:completion:]_block_invoke_2","symbolLocation":204,"imageIndex":13},{"imageOffset":116852,"symbol":"-[FBSWorkspace _calloutQueue_executeCalloutFromSource:withBlock:]","symbolLocation":160,"imageIndex":13},{"imageOffset":115888,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":14},{"imageOffset":27404,"symbol":"_dispatch_block_invoke_direct","symbolLocation":376,"imageIndex":14},{"imageOffset":177980,"symbol":"__BSSERVICEMAINRUNLOOPQUEUE_IS_CALLING_OUT_TO_A_BLOCK__","symbolLocation":44,"imageIndex":15},{"imageOffset":173932,"symbol":"BSServiceMainRunLoopSourceHandler","symbolLocation":180,"imageIndex":15},{"imageOffset":603044,"symbol":"__CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__","symbolLocation":24,"imageIndex":11},{"imageOffset":602860,"symbol":"__CFRunLoopDoSource0","symbolLocation":168,"imageIndex":11},{"imageOffset":600696,"symbol":"__CFRunLoopDoSources0","symbolLocation":220,"imageIndex":11},{"imageOffset":597068,"symbol":"__CFRunLoopRun","symbolLocation":760,"imageIndex":11},{"imageOffset":576748,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":10684,"symbol":"GSEventRunModal","symbolLocation":116,"imageIndex":16},{"imageOffset":18523508,"symbol":"-[UIApplication _run]","symbolLocation":772,"imageIndex":12},{"imageOffset":18540444,"symbol":"UIApplicationMain","symbolLocation":124,"imageIndex":12},{"imageOffset":9660,"sourceLine":8,"sourceFile":"main.m","symbol":"__debug_main_executable_dylib_entry_point","imageIndex":2,"symbolLocation":100},{"imageOffset":4338455504,"imageIndex":17},{"imageOffset":36180,"symbol":"start","symbolLocation":7184,"imageIndex":0}]},{"id":13430718,"frames":[],"threadState":{"x":[{"value":6130380800},{"value":6915},{"value":6129844224},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6130380800},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430719,"frames":[],"threadState":{"x":[{"value":6130954240},{"value":6151},{"value":6130417664},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6130954240},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430720,"frames":[],"threadState":{"x":[{"value":6131527680},{"value":3843},{"value":6130991104},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6131527680},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430721,"frames":[],"threadState":{"x":[{"value":6132101120},{"value":8195},{"value":6131564544},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6132101120},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430722,"name":"com.apple.uikit.eventfetch-thread","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592},{"value":65983582568448},{"value":2162692},{"value":65983582568448},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":15363},{"value":3072},{"value":18446744073709551569},{"value":78},{"value":0},{"value":4294967295},{"value":2},{"value":65983582568448},{"value":2162692},{"value":65983582568448},{"value":6132669832},{"value":8589934592},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4337768716},"cpsr":{"value":0},"fp":{"value":6132669680},"sp":{"value":6132669600},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337699696},"far":{"value":0}},"frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":5},{"imageOffset":71948,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":5},{"imageOffset":35856,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":5},{"imageOffset":3812,"symbol":"mach_msg","symbolLocation":20,"imageIndex":5},{"imageOffset":601092,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":156,"imageIndex":11},{"imageOffset":597436,"symbol":"__CFRunLoopRun","symbolLocation":1128,"imageIndex":11},{"imageOffset":576748,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":9096776,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":208,"imageIndex":18},{"imageOffset":9097320,"symbol":"-[NSRunLoop(NSRunLoop) runUntilDate:]","symbolLocation":60,"imageIndex":18},{"imageOffset":15735888,"symbol":"-[UIEventFetcher threadMain]","symbolLocation":392,"imageIndex":12},{"imageOffset":9256212,"symbol":"__NSThread__start__","symbolLocation":716,"imageIndex":18},{"imageOffset":26028,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":6},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":6}]},{"id":13430723,"frames":[],"threadState":{"x":[{"value":6133248000},{"value":12803},{"value":6132711424},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6133248000},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430724,"frames":[],"threadState":{"x":[{"value":6133821440},{"value":17931},{"value":6133284864},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6133821440},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430726,"threadState":{"x":[{"value":18446744073709551612},{"value":0},{"value":4294967295},{"value":0},{"value":335007449088},{"value":0},{"value":2},{"value":0},{"value":0},{"value":17179869184},{"value":19},{"value":2},{"value":78},{"value":0},{"value":0},{"value":0},{"value":515},{"value":3911272700},{"value":0},{"value":4294967295},{"value":1},{"value":0},{"value":6134392576},{"value":8362154240,"symbolLocation":0,"symbol":"_dispatch_main_q"},{"value":18},{"value":6528032768},{"value":0},{"value":0},{"value":9223372036877662418}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6444295600},"cpsr":{"value":1073741824},"fp":{"value":6134392384},"sp":{"value":6134392352},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337706876},"far":{"value":0}},"queue":"com.apple.libtrace.state.block-list","frames":[{"imageOffset":10108,"symbol":"__ulock_wait","symbolLocation":8,"imageIndex":5},{"imageOffset":13744,"symbol":"_dlock_wait","symbolLocation":52,"imageIndex":14},{"imageOffset":13244,"symbol":"_dispatch_thread_event_wait_slow","symbolLocation":52,"imageIndex":14},{"imageOffset":74600,"symbol":"__DISPATCH_WAIT_FOR_QUEUE__","symbolLocation":392,"imageIndex":14},{"imageOffset":73316,"symbol":"_dispatch_sync_f_slow","symbolLocation":160,"imageIndex":14},{"imageOffset":102556,"symbol":"___os_state_request_for_self_block_invoke","symbolLocation":340,"imageIndex":19},{"imageOffset":6056,"symbol":"_dispatch_call_block_and_release","symbolLocation":24,"imageIndex":14},{"imageOffset":115888,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":14},{"imageOffset":44072,"symbol":"_dispatch_lane_serial_drain","symbolLocation":984,"imageIndex":14},{"imageOffset":46824,"symbol":"_dispatch_lane_invoke","symbolLocation":396,"imageIndex":14},{"imageOffset":91444,"symbol":"_dispatch_root_queue_drain_deferred_wlh","symbolLocation":288,"imageIndex":14},{"imageOffset":89204,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":692,"imageIndex":14},{"imageOffset":11148,"symbol":"_pthread_wqthread","symbolLocation":288,"imageIndex":6},{"imageOffset":6540,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":6}]},{"id":13430727,"frames":[],"threadState":{"x":[{"value":6134968320},{"value":18179},{"value":6134431744},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6134968320},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430728,"frames":[],"threadState":{"x":[{"value":6135541760},{"value":18435},{"value":6135005184},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6135541760},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430729,"frames":[],"threadState":{"x":[{"value":6136115200},{"value":20739},{"value":6135578624},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6136115200},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430730,"frames":[],"threadState":{"x":[{"value":6136688640},{"value":20483},{"value":6136152064},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6136688640},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430731,"threadState":{"x":[{"value":18446744073709551612},{"value":0},{"value":4294967295},{"value":0},{"value":335007449088},{"value":0},{"value":0},{"value":0},{"value":0},{"value":4352},{"value":0},{"value":0},{"value":78},{"value":0},{"value":0},{"value":0},{"value":515},{"value":288230384516264193,"symbolLocation":288230376151711745,"symbol":"OBJC_CLASS_$__UIKeyboardChangedInformation"},{"value":0},{"value":4294967295},{"value":1},{"value":0},{"value":6137257680},{"value":8362154240,"symbolLocation":0,"symbol":"_dispatch_main_q"},{"value":18},{"value":2148468479},{"value":4351},{"value":8447},{"value":105553140414912}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6444295600},"cpsr":{"value":1073741824},"fp":{"value":6137257488},"sp":{"value":6137257456},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337706876},"far":{"value":0}},"queue":"com.apple.UIKit.KeyboardManagement","frames":[{"imageOffset":10108,"symbol":"__ulock_wait","symbolLocation":8,"imageIndex":5},{"imageOffset":13744,"symbol":"_dlock_wait","symbolLocation":52,"imageIndex":14},{"imageOffset":13244,"symbol":"_dispatch_thread_event_wait_slow","symbolLocation":52,"imageIndex":14},{"imageOffset":74600,"symbol":"__DISPATCH_WAIT_FOR_QUEUE__","symbolLocation":392,"imageIndex":14},{"imageOffset":73316,"symbol":"_dispatch_sync_f_slow","symbolLocation":160,"imageIndex":14},{"imageOffset":16603816,"symbol":"__37-[_UIRemoteKeyboards startConnection]_block_invoke.400","symbolLocation":116,"imageIndex":12},{"imageOffset":1289120,"symbol":"__invoking___","symbolLocation":144,"imageIndex":11},{"imageOffset":1277252,"symbol":"-[NSInvocation invoke]","symbolLocation":276,"imageIndex":11},{"imageOffset":10032012,"symbol":"<deduplicated_symbol>","symbolLocation":12,"imageIndex":18},{"imageOffset":10031096,"symbol":"-[NSXPCConnection _decodeAndInvokeReplyBlockWithEvent:sequence:replyInfo:]","symbolLocation":484,"imageIndex":18},{"imageOffset":10047200,"symbol":"__88-[NSXPCConnection _sendInvocation:orArguments:count:methodSignature:selector:withProxy:]_block_invoke_5","symbolLocation":184,"imageIndex":18},{"imageOffset":123904,"symbol":"_xpc_connection_reply_callout","symbolLocation":60,"imageIndex":20},{"imageOffset":68704,"symbol":"_xpc_connection_call_reply_async","symbolLocation":92,"imageIndex":20},{"imageOffset":115928,"symbol":"<deduplicated_symbol>","symbolLocation":12,"imageIndex":14},{"imageOffset":134148,"symbol":"_dispatch_mach_msg_async_reply_invoke","symbolLocation":508,"imageIndex":14},{"imageOffset":43392,"symbol":"_dispatch_lane_serial_drain","symbolLocation":304,"imageIndex":14},{"imageOffset":46824,"symbol":"_dispatch_lane_invoke","symbolLocation":396,"imageIndex":14},{"imageOffset":91444,"symbol":"_dispatch_root_queue_drain_deferred_wlh","symbolLocation":288,"imageIndex":14},{"imageOffset":89204,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":692,"imageIndex":14},{"imageOffset":11148,"symbol":"_pthread_wqthread","symbolLocation":288,"imageIndex":6},{"imageOffset":6540,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":6}]},{"id":13430732,"frames":[],"threadState":{"x":[{"value":6137835520},{"value":19971},{"value":6137298944},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6137835520},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}},{"id":13430733,"frames":[],"threadState":{"x":[{"value":6138408960},{"value":19203},{"value":6137872384},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6138408960},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":4337162628},"far":{"value":0}}}],
  "usedImages" : [
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 4340318208,
    "size" : 655360,
    "uuid" : "bc4db5f4-1c64-3706-8006-73b78c3e1f1a",
    "path" : "\/usr\/lib\/dyld",
    "name" : "dyld"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4337057792,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "org.reactjs.native.example.MediaFeedChallenge",
    "size" : 16384,
    "uuid" : "4f7393cc-6c19-3dad-9d2c-2b219b66befc",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/4E5E3186-EDAC-40CC-95DF-F36ED408D0D0\/data\/Containers\/Bundle\/Application\/E990C421-83E9-49D9-9A75-11F7E86705E4\/MediaFeedChallenge.app\/MediaFeedChallenge",
    "name" : "MediaFeedChallenge",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4376051712,
    "size" : 10698752,
    "uuid" : "6e4613ac-a229-35ed-9788-9306f119f66c",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/4E5E3186-EDAC-40CC-95DF-F36ED408D0D0\/data\/Containers\/Bundle\/Application\/E990C421-83E9-49D9-9A75-11F7E86705E4\/MediaFeedChallenge.app\/MediaFeedChallenge.debug.dylib",
    "name" : "MediaFeedChallenge.debug.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4347478016,
    "CFBundleShortVersionString" : "0.12.0",
    "CFBundleIdentifier" : "dev.hermesengine.iphonesimulator",
    "size" : 3178496,
    "uuid" : "04b8008c-a953-336f-8043-1540012d2df6",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/4E5E3186-EDAC-40CC-95DF-F36ED408D0D0\/data\/Containers\/Bundle\/Application\/E990C421-83E9-49D9-9A75-11F7E86705E4\/MediaFeedChallenge.app\/Frameworks\/hermes.framework\/hermes",
    "name" : "hermes",
    "CFBundleVersion" : "0.12.0"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4337565696,
    "size" : 32768,
    "uuid" : "9463fc06-cc7c-38e8-ad3c-1b9f2617df53",
    "path" : "\/usr\/lib\/system\/libsystem_platform.dylib",
    "name" : "libsystem_platform.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4337696768,
    "size" : 245760,
    "uuid" : "1a15cc38-efcc-34ea-a261-cfd370f4b557",
    "path" : "\/usr\/lib\/system\/libsystem_kernel.dylib",
    "name" : "libsystem_kernel.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4337156096,
    "size" : 65536,
    "uuid" : "b1095734-2a4d-3e8c-839e-b10ae9598d61",
    "path" : "\/usr\/lib\/system\/libsystem_pthread.dylib",
    "name" : "libsystem_pthread.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4341579776,
    "size" : 49152,
    "uuid" : "997b234d-5c24-3e21-97d6-33b6853818c0",
    "path" : "\/Volumes\/VOLUME\/*\/libobjc-trampolines.dylib",
    "name" : "libobjc-trampolines.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6443765760,
    "size" : 512708,
    "uuid" : "e0197e7b-9d61-356a-90b7-4be1270b82d5",
    "path" : "\/Volumes\/VOLUME\/*\/libsystem_c.dylib",
    "name" : "libsystem_c.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6445539328,
    "size" : 99696,
    "uuid" : "0fc14bd2-2110-348c-8278-7a6fb63a7000",
    "path" : "\/Volumes\/VOLUME\/*\/libc++abi.dylib",
    "name" : "libc++abi.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6442909696,
    "size" : 250520,
    "uuid" : "880f8664-cd53-3912-bdd5-5e3159295f7d",
    "path" : "\/Volumes\/VOLUME\/*\/libobjc.A.dylib",
    "name" : "libobjc.A.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6446395392,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.CoreFoundation",
    "size" : 4309888,
    "uuid" : "4f6d050d-95ee-3a95-969c-3a98b29df6ff",
    "path" : "\/Volumes\/VOLUME\/*\/CoreFoundation.framework\/CoreFoundation",
    "name" : "CoreFoundation",
    "CFBundleVersion" : "4201"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6528032768,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.UIKitCore",
    "size" : 35792672,
    "uuid" : "196154ff-ba04-33cd-9277-98f9aa0b7499",
    "path" : "\/Volumes\/VOLUME\/*\/UIKitCore.framework\/UIKitCore",
    "name" : "UIKitCore",
    "CFBundleVersion" : "9126.2.4.1.111"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6582902784,
    "CFBundleShortVersionString" : "1000.1.4",
    "CFBundleIdentifier" : "com.apple.FrontBoardServices",
    "size" : 840992,
    "uuid" : "aca7be62-53b7-3d18-a1e0-982863cf64e9",
    "path" : "\/Volumes\/VOLUME\/*\/FrontBoardServices.framework\/FrontBoardServices",
    "name" : "FrontBoardServices",
    "CFBundleVersion" : "1000.1.4"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6444281856,
    "size" : 283072,
    "uuid" : "ec9ecf10-959d-3da1-a055-6de970159b9d",
    "path" : "\/Volumes\/VOLUME\/*\/libdispatch.dylib",
    "name" : "libdispatch.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6576984064,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.BoardServices",
    "size" : 516288,
    "uuid" : "c6f1483b-f1e2-37b4-9596-2fcff30f35a3",
    "path" : "\/Volumes\/VOLUME\/*\/BoardServices.framework\/BoardServices",
    "name" : "BoardServices",
    "CFBundleVersion" : "732.1.1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6755336192,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.GraphicsServices",
    "size" : 32192,
    "uuid" : "4e5b0462-6170-3367-9475-4ff8b8dfe4e6",
    "path" : "\/Volumes\/VOLUME\/*\/GraphicsServices.framework\/GraphicsServices",
    "name" : "GraphicsServices",
    "CFBundleVersion" : "1.0"
  },
  {
    "size" : 0,
    "source" : "A",
    "base" : 0,
    "uuid" : "00000000-0000-0000-0000-000000000000"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6451228672,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.Foundation",
    "size" : 14100704,
    "uuid" : "c153116f-dd31-3fa9-89bb-04b47c1fa83d",
    "path" : "\/Volumes\/VOLUME\/*\/Foundation.framework\/Foundation",
    "name" : "Foundation",
    "CFBundleVersion" : "4201"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6443343872,
    "size" : 122880,
    "uuid" : "11a939b5-2e77-3a64-84a4-5dc0a1c74bbd",
    "path" : "\/Volumes\/VOLUME\/*\/libsystem_trace.dylib",
    "name" : "libsystem_trace.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6443466752,
    "size" : 283904,
    "uuid" : "5d3b42dd-89e9-36f1-8e20-f4bbf2b7644e",
    "path" : "\/Volumes\/VOLUME\/*\/libxpc.dylib",
    "name" : "libxpc.dylib"
  }
],
  "sharedCache" : {
  "base" : 6442450944,
  "size" : 4230184960,
  "uuid" : "d1693c98-c373-3914-b9b7-6aebb144aeb2"
},
  "vmSummary" : "ReadOnly portion of Libraries: Total=1.4G resident=0K(0%) swapped_out_or_unallocated=1.4G(100%)\nWritable regions: Total=640.8M written=1875K(0%) resident=1875K(0%) swapped_out=0K(0%) unallocated=639.0M(100%)\n\n                                VIRTUAL   REGION \nREGION TYPE                        SIZE    COUNT (non-coalesced) \n===========                     =======  ======= \nActivity Tracing                   256K        1 \nFoundation                          16K        1 \nKernel Alloc Once                   32K        1 \nMALLOC                           622.4M       40 \nMALLOC guard page                  128K        8 \nSTACK GUARD                       56.2M       16 \nStack                             16.0M       16 \nVM_ALLOCATE                        160K        2 \n__DATA                            26.9M      521 \n__DATA_CONST                      73.2M      541 \n__DATA_DIRTY                       139K       13 \n__FONT_DATA                        2352        1 \n__LINKEDIT                       728.8M        9 \n__OBJC_RO                         62.5M        1 \n__OBJC_RW                         2771K        1 \n__TEXT                           678.7M      554 \n__TPRO_CONST                       148K        2 \ndyld private memory                2.2G       13 \nmapped file                       33.3M        9 \npage table in kernel              1875K        1 \nshared memory                       16K        1 \n===========                     =======  ======= \nTOTAL                              4.4G     1752 \n",
  "legacyInfo" : {
  "threadTriggered" : {
    "queue" : "com.apple.main-thread"
  }
},
  "logWritingSignature" : "4aaafcd6b7d3adc00ba0df2d9cadb4a874513864",
  "bug_type" : "309",
  "roots_installed" : 0,
  "trmStatus" : 1,
  "trialInfo" : {
  "rollouts" : [
    {
      "rolloutId" : "6410af69ed1e1e7ab93ed169",
      "factorPackIds" : [

      ],
      "deploymentId" : 240000011
    },
    {
      "rolloutId" : "6297d96be2c9387df974efa4",
      "factorPackIds" : [

      ],
      "deploymentId" : 240000032
    }
  ],
  "experiments" : [

  ]
}
}

Model: Mac16,8, BootROM 13822.81.10, proc 12:8:4 processors, 24 GB, SMC 
Graphics: Apple M4 Pro, Apple M4 Pro, Built-In
Display: Color LCD, 3024 x 1964 Retina, Main, MirrorOff, Online
Memory Module: LPDDR5, Micron
AirPort: spairport_wireless_card_type_wifi (0x14E4, 0x4388), wl0: Dec  6 2025 00:30:14 version 23.41.8.0.41.51.201 FWID 01-990604ea
IO80211_driverkit-1540.16 "IO80211_driverkit-1540.16" Jan 27 2026 21:04:24
AirPort: 
Bluetooth: Version (null), 0 services, 0 devices, 0 incoming serial ports
Network Service: Wi-Fi, AirPort, en0
Thunderbolt Bus: MacBook Pro, Apple Inc.
Thunderbolt Bus: MacBook Pro, Apple Inc.
Thunderbolt Bus: MacBook Pro, Apple Inc. porque puede ser que no me levanta la app en ios?

*Searched filesystem*

*Viewed [AppDelegate.mm](file:///Users/ramirotule/Desktop/react-native-challenge-main/ios/MediaFeedChallenge/AppDelegate.mm) *

*Viewed [AppDelegate.h](file:///Users/ramirotule/Desktop/react-native-challenge-main/ios/MediaFeedChallenge/AppDelegate.h) *

*Listed directory [react-native-challenge-main](file:///Users/ramirotule/Desktop/react-native-challenge-main) *

*Edited relevant file*

### Planner Response

El crash que experimentas en iOS se debe a una inconsistencia entre la versión de React Native que estás usando (**0.74.5**) y la implementación de tu [AppDelegate.mm](cci:7://file:///Users/ramirotule/Desktop/react-native-challenge-main/ios/MediaFeedChallenge/AppDelegate.mm:0:0-0:0).

### Análisis del Error
En el reporte de crash, se observa que la ejecución se detiene aquí:
`-[RCTAppDelegate bundleURL] + 52 (RCTAppDelegate.mm:176)`

En las versiones más recientes de React Native (0.74+), cuando heredas de `RCTAppDelegate` (como lo hace tu [AppDelegate.h](cci:7://file:///Users/ramirotule/Desktop/react-native-challenge-main/ios/MediaFeedChallenge/AppDelegate.h:0:0-0:0)), la clase base espera que implementes un método llamado **`bundleURL`**. Tu código implementaba `sourceURLForBridge:`, que es la forma antigua. 

Como el sistema no encontraba el método `bundleURL` en tu `AppDelegate`, llamaba a la implementación por defecto de la clase padre (`RCTAppDelegate`), la cual lanza una excepción (abort) si no es sobresuelta por la subclase. Esto causa que la app "no levante" y se cierre inmediatamente al iniciar.

### Solución aplicada
He actualizado tu [AppDelegate.mm](file:///Users/ramirotule/Desktop/react-native-challenge-main/ios/MediaFeedChallenge/AppDelegate.mm) para renombrar el método `sourceURLForBridge:` a **`bundleURL`**, que es el nombre correcto que espera la arquitectura actual.

```objective-c
// Antes (no era reconocido por RCTAppDelegate)
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge

// Ahora (corrección aplicada)
- (NSURL *)bundleURL
```

### Próximos pasos
Intenta correr la aplicación nuevamente desde la terminal:

```bash
yarn run start
```

*(O presiona `i` en la terminal de Metro si ya lo tienes corriendo).* Esto debería permitir que la `RCTRootViewFactory` localice correctamente el bundle de JavaScript y la app inicie en el simulador.