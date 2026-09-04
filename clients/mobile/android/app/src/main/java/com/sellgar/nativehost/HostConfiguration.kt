package com.sellgar.nativehost

import android.content.Context
import android.content.pm.PackageManager

internal object HostConfiguration {
  const val COMPONENT_NAME = "sellgar.react_native.component_name"
  const val MAIN_MODULE_PATH = "sellgar.react_native.main_module_path"

  private var values: Map<String, String>? = null

  @Suppress("DEPRECATION")
  fun initialize(context: Context) {
    val applicationInfo = context.packageManager.getApplicationInfo(
      context.packageName,
      PackageManager.GET_META_DATA,
    )

    values = listOf(COMPONENT_NAME, MAIN_MODULE_PATH).associateWith { key ->
      requireNotNull(applicationInfo.metaData?.getString(key)) {
        "Missing Android host configuration: $key"
      }
    }
  }

  fun require(key: String): String =
    requireNotNull(values) {
      "Android host configuration has not been initialized"
    }[key] ?: error("Missing Android host configuration: $key")
}
