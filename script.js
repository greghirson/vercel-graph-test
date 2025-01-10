
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-10 04:00:00", "b": 1528.4}, {"a": "2025-01-10 04:05:00", "b": 1155.8}, {"a": "2025-01-10 04:10:00", "b": 1137.8}, {"a": "2025-01-10 04:15:00", "b": 1543.2}, {"a": "2025-01-10 04:20:00", "b": 1785.2}, {"a": "2025-01-10 04:25:00", "b": 1927.6}, {"a": "2025-01-10 04:30:00", "b": 1806.2}, {"a": "2025-01-10 04:35:00", "b": 2345.0}, {"a": "2025-01-10 04:40:00", "b": 3391.4}, {"a": "2025-01-10 04:45:00", "b": 4157.2}, {"a": "2025-01-10 04:50:00", "b": 3432.8}, {"a": "2025-01-10 04:55:00", "b": 2914.0}, {"a": "2025-01-10 05:00:00", "b": 2226.4}, {"a": "2025-01-10 05:05:00", "b": 2103.8}, {"a": "2025-01-10 05:10:00", "b": 2615.6}, {"a": "2025-01-10 05:15:00", "b": 2829.6}, {"a": "2025-01-10 05:20:00", "b": 2491.0}, {"a": "2025-01-10 05:25:00", "b": 1622.8}, {"a": "2025-01-10 05:30:00", "b": 2256.6}, {"a": "2025-01-10 05:35:00", "b": 2487.8}, {"a": "2025-01-10 05:40:00", "b": 2486.2}, {"a": "2025-01-10 05:45:00", "b": 2273.0}, {"a": "2025-01-10 05:50:00", "b": 2001.0}, {"a": "2025-01-10 05:55:00", "b": 1996.0}, {"a": "2025-01-10 06:00:00", "b": 2013.6}, {"a": "2025-01-10 06:05:00", "b": 2259.6}, {"a": "2025-01-10 06:10:00", "b": 1416.4}, {"a": "2025-01-10 06:15:00", "b": 1096.8}, {"a": "2025-01-10 06:20:00", "b": 1345.8}, {"a": "2025-01-10 06:25:00", "b": 2452.0}, {"a": "2025-01-10 06:30:00", "b": 2322.2}, {"a": "2025-01-10 06:35:00", "b": 2306.2}, {"a": "2025-01-10 06:40:00", "b": 2039.6}, {"a": "2025-01-10 06:45:00", "b": 2081.4}, {"a": "2025-01-10 06:50:00", "b": 2477.0}, {"a": "2025-01-10 06:55:00", "b": 2040.6}, {"a": "2025-01-10 07:00:00", "b": 2098.0}, {"a": "2025-01-10 07:05:00", "b": 3233.75}, {"a": "2025-01-10 07:10:00", "b": 2402.4}, {"a": "2025-01-10 07:15:00", "b": 3232.5}, {"a": "2025-01-10 07:20:00", "b": 402.5}, {"a": "2025-01-10 07:25:00", "b": 421.4}, {"a": "2025-01-10 07:30:00", "b": 468.8}, {"a": "2025-01-10 07:35:00", "b": 477.75}, {"a": "2025-01-10 07:40:00", "b": 507.2}, {"a": "2025-01-10 07:45:00", "b": 503.0}, {"a": "2025-01-10 07:50:00", "b": 549.6}, {"a": "2025-01-10 07:55:00", "b": 499.0}, {"a": "2025-01-10 08:00:00", "b": 467.8}, {"a": "2025-01-10 08:05:00", "b": 435.0}, {"a": "2025-01-10 08:10:00", "b": 437.2}, {"a": "2025-01-10 08:15:00", "b": 467.8}, {"a": "2025-01-10 08:20:00", "b": 458.8}, {"a": "2025-01-10 08:25:00", "b": 445.0}, {"a": "2025-01-10 08:30:00", "b": 451.2}, {"a": "2025-01-10 08:35:00", "b": 429.2}, {"a": "2025-01-10 08:40:00", "b": 406.6666666666667}, {"a": "2025-01-10 08:45:00", "b": 405.0}, {"a": "2025-01-10 08:50:00", "b": 401.75}, {"a": "2025-01-10 08:55:00", "b": 401.5}, {"a": "2025-01-10 09:00:00", "b": 402.4}, {"a": "2025-01-10 09:05:00", "b": 402.4}, {"a": "2025-01-10 09:10:00", "b": 402.0}, {"a": "2025-01-10 09:15:00", "b": 401.4}, {"a": "2025-01-10 09:20:00", "b": 402.0}, {"a": "2025-01-10 09:25:00", "b": 402.5}, {"a": "2025-01-10 09:30:00", "b": 402.3333333333333}, {"a": "2025-01-10 09:35:00", "b": 402.3333333333333}, {"a": "2025-01-10 09:40:00", "b": 401.6666666666667}, {"a": "2025-01-10 09:45:00", "b": 401.4}, {"a": "2025-01-10 09:50:00", "b": 402.0}, {"a": "2025-01-10 09:55:00", "b": 401.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    