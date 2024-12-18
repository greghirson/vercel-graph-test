
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-18 00:00:00", "b": 669.6}, {"a": "2024-12-18 00:05:00", "b": 663.25}, {"a": "2024-12-18 00:10:00", "b": 646.4}, {"a": "2024-12-18 00:15:00", "b": 643.0}, {"a": "2024-12-18 00:20:00", "b": 623.25}, {"a": "2024-12-18 00:25:00", "b": 626.0}, {"a": "2024-12-18 00:30:00", "b": 620.75}, {"a": "2024-12-18 00:35:00", "b": 610.75}, {"a": "2024-12-18 00:40:00", "b": 594.4}, {"a": "2024-12-18 00:45:00", "b": 582.4}, {"a": "2024-12-18 00:50:00", "b": 592.25}, {"a": "2024-12-18 00:55:00", "b": 577.25}, {"a": "2024-12-18 01:00:00", "b": 566.0}, {"a": "2024-12-18 01:05:00", "b": 564.0}, {"a": "2024-12-18 01:10:00", "b": 557.3333333333334}, {"a": "2024-12-18 01:15:00", "b": 549.25}, {"a": "2024-12-18 01:20:00", "b": 554.4}, {"a": "2024-12-18 01:25:00", "b": 561.75}, {"a": "2024-12-18 01:30:00", "b": 548.6}, {"a": "2024-12-18 01:35:00", "b": 547.75}, {"a": "2024-12-18 01:40:00", "b": 547.4}, {"a": "2024-12-18 01:45:00", "b": 602.4}, {"a": "2024-12-18 01:50:00", "b": 610.75}, {"a": "2024-12-18 01:55:00", "b": 588.0}, {"a": "2024-12-18 02:00:00", "b": 533.8}, {"a": "2024-12-18 02:05:00", "b": 513.8}, {"a": "2024-12-18 02:10:00", "b": 496.4}, {"a": "2024-12-18 02:15:00", "b": 477.6666666666667}, {"a": "2024-12-18 02:20:00", "b": 467.5}, {"a": "2024-12-18 02:25:00", "b": 458.5}, {"a": "2024-12-18 02:30:00", "b": 455.75}, {"a": "2024-12-18 02:35:00", "b": 448.25}, {"a": "2024-12-18 02:40:00", "b": 459.0}, {"a": "2024-12-18 02:45:00", "b": 461.25}, {"a": "2024-12-18 02:50:00", "b": 463.2}, {"a": "2024-12-18 02:55:00", "b": 465.0}, {"a": "2024-12-18 03:00:00", "b": 451.25}, {"a": "2024-12-18 03:05:00", "b": 443.75}, {"a": "2024-12-18 03:10:00", "b": 446.4}, {"a": "2024-12-18 03:15:00", "b": 445.5}, {"a": "2024-12-18 03:20:00", "b": 440.25}, {"a": "2024-12-18 03:25:00", "b": 433.0}, {"a": "2024-12-18 03:30:00", "b": 433.0}, {"a": "2024-12-18 03:35:00", "b": 437.4}, {"a": "2024-12-18 03:40:00", "b": 440.8}, {"a": "2024-12-18 03:45:00", "b": 437.0}, {"a": "2024-12-18 03:50:00", "b": 422.4}, {"a": "2024-12-18 03:55:00", "b": 451.6}, {"a": "2024-12-18 04:00:00", "b": 519.6}, {"a": "2024-12-18 04:05:00", "b": 514.2}, {"a": "2024-12-18 04:10:00", "b": 506.6}, {"a": "2024-12-18 04:15:00", "b": 477.4}, {"a": "2024-12-18 04:20:00", "b": 454.6}, {"a": "2024-12-18 04:25:00", "b": 433.8}, {"a": "2024-12-18 04:30:00", "b": 417.6}, {"a": "2024-12-18 04:35:00", "b": 412.5}, {"a": "2024-12-18 04:40:00", "b": 417.8}, {"a": "2024-12-18 04:45:00", "b": 420.75}, {"a": "2024-12-18 04:50:00", "b": 408.6666666666667}, {"a": "2024-12-18 04:55:00", "b": 411.5}, {"a": "2024-12-18 05:00:00", "b": 411.8}, {"a": "2024-12-18 05:05:00", "b": 409.0}, {"a": "2024-12-18 05:10:00", "b": 406.5}, {"a": "2024-12-18 05:15:00", "b": 407.0}, {"a": "2024-12-18 05:20:00", "b": 412.6}, {"a": "2024-12-18 05:25:00", "b": 418.75}, {"a": "2024-12-18 05:30:00", "b": 431.25}, {"a": "2024-12-18 05:35:00", "b": 426.2}, {"a": "2024-12-18 05:40:00", "b": 420.0}, {"a": "2024-12-18 05:45:00", "b": 429.25}, {"a": "2024-12-18 05:50:00", "b": 425.2}, {"a": "2024-12-18 05:55:00", "b": 410.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    