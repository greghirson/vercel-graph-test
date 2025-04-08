
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-08 00:00:00", "b": 488.5}, {"a": "2025-04-08 00:05:00", "b": 493.6666666666667}, {"a": "2025-04-08 00:10:00", "b": 493.8}, {"a": "2025-04-08 00:15:00", "b": 504.0}, {"a": "2025-04-08 00:20:00", "b": 494.0}, {"a": "2025-04-08 00:25:00", "b": 496.6}, {"a": "2025-04-08 00:30:00", "b": 490.2}, {"a": "2025-04-08 00:35:00", "b": 482.3333333333333}, {"a": "2025-04-08 00:40:00", "b": 488.0}, {"a": "2025-04-08 00:45:00", "b": 490.2}, {"a": "2025-04-08 00:50:00", "b": 477.5}, {"a": "2025-04-08 00:55:00", "b": 469.6666666666667}, {"a": "2025-04-08 01:00:00", "b": 470.8}, {"a": "2025-04-08 01:05:00", "b": 479.2}, {"a": "2025-04-08 01:10:00", "b": 471.75}, {"a": "2025-04-08 01:15:00", "b": 471.6}, {"a": "2025-04-08 01:20:00", "b": 475.0}, {"a": "2025-04-08 01:25:00", "b": 471.6666666666667}, {"a": "2025-04-08 01:30:00", "b": 460.4}, {"a": "2025-04-08 01:35:00", "b": 464.0}, {"a": "2025-04-08 01:40:00", "b": 466.5}, {"a": "2025-04-08 01:45:00", "b": 463.25}, {"a": "2025-04-08 01:50:00", "b": 463.0}, {"a": "2025-04-08 01:55:00", "b": 459.6}, {"a": "2025-04-08 02:00:00", "b": 463.75}, {"a": "2025-04-08 02:05:00", "b": 456.0}, {"a": "2025-04-08 02:10:00", "b": 461.6666666666667}, {"a": "2025-04-08 02:15:00", "b": 461.6666666666667}, {"a": "2025-04-08 02:20:00", "b": 462.5}, {"a": "2025-04-08 02:25:00", "b": 463.25}, {"a": "2025-04-08 02:30:00", "b": 458.25}, {"a": "2025-04-08 02:35:00", "b": 450.6}, {"a": "2025-04-08 02:40:00", "b": 452.0}, {"a": "2025-04-08 02:45:00", "b": 447.4}, {"a": "2025-04-08 02:50:00", "b": 450.0}, {"a": "2025-04-08 02:55:00", "b": 467.8}, {"a": "2025-04-08 03:00:00", "b": 463.2}, {"a": "2025-04-08 03:05:00", "b": 429.75}, {"a": "2025-04-08 03:10:00", "b": 431.75}, {"a": "2025-04-08 03:15:00", "b": 451.5}, {"a": "2025-04-08 03:20:00", "b": 461.6}, {"a": "2025-04-08 03:25:00", "b": 458.5}, {"a": "2025-04-08 03:30:00", "b": 454.8}, {"a": "2025-04-08 03:35:00", "b": 441.2}, {"a": "2025-04-08 03:40:00", "b": 441.8}, {"a": "2025-04-08 03:45:00", "b": 456.75}, {"a": "2025-04-08 03:50:00", "b": 462.8}, {"a": "2025-04-08 03:55:00", "b": 458.4}, {"a": "2025-04-08 04:00:00", "b": 444.0}, {"a": "2025-04-08 04:05:00", "b": 447.6}, {"a": "2025-04-08 04:10:00", "b": 463.8}, {"a": "2025-04-08 04:15:00", "b": 449.75}, {"a": "2025-04-08 04:20:00", "b": 440.0}, {"a": "2025-04-08 04:25:00", "b": 435.4}, {"a": "2025-04-08 04:30:00", "b": 432.5}, {"a": "2025-04-08 04:35:00", "b": 447.4}, {"a": "2025-04-08 04:40:00", "b": 449.25}, {"a": "2025-04-08 04:45:00", "b": 450.25}, {"a": "2025-04-08 04:50:00", "b": 451.5}, {"a": "2025-04-08 04:55:00", "b": 443.75}, {"a": "2025-04-08 05:00:00", "b": 444.75}, {"a": "2025-04-08 05:05:00", "b": 443.0}, {"a": "2025-04-08 05:10:00", "b": 451.8}, {"a": "2025-04-08 05:15:00", "b": 449.4}, {"a": "2025-04-08 05:20:00", "b": 459.2}, {"a": "2025-04-08 05:25:00", "b": 449.8}, {"a": "2025-04-08 05:30:00", "b": 450.4}, {"a": "2025-04-08 05:35:00", "b": 445.6}, {"a": "2025-04-08 05:40:00", "b": 432.75}, {"a": "2025-04-08 05:45:00", "b": 437.6}, {"a": "2025-04-08 05:50:00", "b": 445.75}, {"a": "2025-04-08 05:55:00", "b": 462.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    