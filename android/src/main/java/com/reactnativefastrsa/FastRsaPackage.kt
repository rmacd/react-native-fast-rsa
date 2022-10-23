package com.reactnativefastrsa

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager


class FastRsaPackage : ReactPackage {
    @OptIn(ExperimentalUnsignedTypes::class)
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(FastRsaModule(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList()
    }

}
