
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-01 07:00:00", "b": 2366.4}, {"a": "2024-12-01 07:05:00", "b": 2271.2}, {"a": "2024-12-01 07:10:00", "b": 2306.2}, {"a": "2024-12-01 07:15:00", "b": 2104.4}, {"a": "2024-12-01 07:20:00", "b": 1549.2}, {"a": "2024-12-01 07:25:00", "b": 1799.0}, {"a": "2024-12-01 07:30:00", "b": 1922.2}, {"a": "2024-12-01 07:35:00", "b": 2229.2}, {"a": "2024-12-01 07:40:00", "b": 2209.2}, {"a": "2024-12-01 07:45:00", "b": 2252.8}, {"a": "2024-12-01 07:50:00", "b": 2204.0}, {"a": "2024-12-01 07:55:00", "b": 2274.8}, {"a": "2024-12-01 08:00:00", "b": 2219.0}, {"a": "2024-12-01 08:05:00", "b": 2270.2}, {"a": "2024-12-01 08:10:00", "b": 2202.6}, {"a": "2024-12-01 08:15:00", "b": 2275.2}, {"a": "2024-12-01 08:20:00", "b": 2211.4}, {"a": "2024-12-01 08:25:00", "b": 2193.0}, {"a": "2024-12-01 08:30:00", "b": 2015.25}, {"a": "2024-12-01 08:35:00", "b": 1794.4}, {"a": "2024-12-01 08:40:00", "b": 1940.4}, {"a": "2024-12-01 08:45:00", "b": 1824.8}, {"a": "2024-12-01 08:50:00", "b": 2197.2}, {"a": "2024-12-01 08:55:00", "b": 2461.0}, {"a": "2024-12-01 09:00:00", "b": 2433.2}, {"a": "2024-12-01 09:05:00", "b": 2514.0}, {"a": "2024-12-01 09:10:00", "b": 2358.0}, {"a": "2024-12-01 09:15:00", "b": 2200.8}, {"a": "2024-12-01 09:20:00", "b": 2233.0}, {"a": "2024-12-01 09:25:00", "b": 2396.8}, {"a": "2024-12-01 09:30:00", "b": 2297.0}, {"a": "2024-12-01 09:35:00", "b": 2320.2}, {"a": "2024-12-01 09:40:00", "b": 2328.6}, {"a": "2024-12-01 09:45:00", "b": 2328.6}, {"a": "2024-12-01 09:50:00", "b": 2415.4}, {"a": "2024-12-01 09:55:00", "b": 2323.0}, {"a": "2024-12-01 10:00:00", "b": 2323.2}, {"a": "2024-12-01 10:05:00", "b": 2312.75}, {"a": "2024-12-01 10:10:00", "b": 2329.8}, {"a": "2024-12-01 10:15:00", "b": 2370.6}, {"a": "2024-12-01 10:20:00", "b": 2337.2}, {"a": "2024-12-01 10:25:00", "b": 2341.0}, {"a": "2024-12-01 10:30:00", "b": 2452.0}, {"a": "2024-12-01 10:35:00", "b": 2531.6}, {"a": "2024-12-01 10:40:00", "b": 2497.8}, {"a": "2024-12-01 10:45:00", "b": 2438.6}, {"a": "2024-12-01 10:50:00", "b": 2157.6}, {"a": "2024-12-01 10:55:00", "b": 1581.4}, {"a": "2024-12-01 11:00:00", "b": 2429.4}, {"a": "2024-12-01 11:05:00", "b": 2557.6}, {"a": "2024-12-01 11:10:00", "b": 2555.8}, {"a": "2024-12-01 11:15:00", "b": 2562.2}, {"a": "2024-12-01 11:20:00", "b": 2592.0}, {"a": "2024-12-01 11:25:00", "b": 2490.0}, {"a": "2024-12-01 11:30:00", "b": 2495.0}, {"a": "2024-12-01 11:35:00", "b": 2538.8}, {"a": "2024-12-01 11:40:00", "b": 2584.6}, {"a": "2024-12-01 11:45:00", "b": 2457.2}, {"a": "2024-12-01 11:50:00", "b": 2456.2}, {"a": "2024-12-01 11:55:00", "b": 2586.6}, {"a": "2024-12-01 12:00:00", "b": 2607.6}, {"a": "2024-12-01 12:05:00", "b": 2688.2}, {"a": "2024-12-01 12:10:00", "b": 2648.6}, {"a": "2024-12-01 12:15:00", "b": 2647.6}, {"a": "2024-12-01 12:20:00", "b": 2657.4}, {"a": "2024-12-01 12:25:00", "b": 2555.4}, {"a": "2024-12-01 12:30:00", "b": 2610.8}, {"a": "2024-12-01 12:35:00", "b": 2729.25}, {"a": "2024-12-01 12:40:00", "b": 2893.4}, {"a": "2024-12-01 12:45:00", "b": 2868.6}, {"a": "2024-12-01 12:50:00", "b": 2836.4}, {"a": "2024-12-01 12:55:00", "b": 2900.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    