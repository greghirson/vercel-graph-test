
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-05 04:50:00", "b": 439.8}, {"a": "2024-11-05 04:55:00", "b": 455.4}, {"a": "2024-11-05 05:00:00", "b": 465.6}, {"a": "2024-11-05 05:05:00", "b": 440.4}, {"a": "2024-11-05 05:10:00", "b": 423.5}, {"a": "2024-11-05 05:15:00", "b": 417.8}, {"a": "2024-11-05 05:20:00", "b": 410.0}, {"a": "2024-11-05 05:25:00", "b": 407.6666666666667}, {"a": "2024-11-05 05:30:00", "b": 408.6666666666667}, {"a": "2024-11-05 05:35:00", "b": 415.0}, {"a": "2024-11-05 05:40:00", "b": 445.6}, {"a": "2024-11-05 05:45:00", "b": 455.4}, {"a": "2024-11-05 05:50:00", "b": 439.0}, {"a": "2024-11-05 05:55:00", "b": 437.25}, {"a": "2024-11-05 06:00:00", "b": 441.0}, {"a": "2024-11-05 06:05:00", "b": 437.0}, {"a": "2024-11-05 06:10:00", "b": 424.75}, {"a": "2024-11-05 06:15:00", "b": 422.6666666666667}, {"a": "2024-11-05 06:20:00", "b": 444.75}, {"a": "2024-11-05 06:25:00", "b": 472.4}, {"a": "2024-11-05 06:30:00", "b": 452.2}, {"a": "2024-11-05 06:35:00", "b": 450.8}, {"a": "2024-11-05 06:40:00", "b": 478.8}, {"a": "2024-11-05 06:45:00", "b": 463.0}, {"a": "2024-11-05 06:50:00", "b": 432.6}, {"a": "2024-11-05 06:55:00", "b": 424.4}, {"a": "2024-11-05 07:00:00", "b": 448.4}, {"a": "2024-11-05 07:05:00", "b": 463.25}, {"a": "2024-11-05 07:10:00", "b": 465.0}, {"a": "2024-11-05 07:15:00", "b": 458.75}, {"a": "2024-11-05 07:20:00", "b": 468.5}, {"a": "2024-11-05 07:25:00", "b": 477.0}, {"a": "2024-11-05 07:30:00", "b": 468.2}, {"a": "2024-11-05 07:35:00", "b": 470.0}, {"a": "2024-11-05 07:40:00", "b": 459.4}, {"a": "2024-11-05 07:45:00", "b": 452.2}, {"a": "2024-11-05 07:50:00", "b": 465.8}, {"a": "2024-11-05 07:55:00", "b": 468.75}, {"a": "2024-11-05 08:00:00", "b": 483.6}, {"a": "2024-11-05 08:05:00", "b": 519.6}, {"a": "2024-11-05 08:10:00", "b": 534.0}, {"a": "2024-11-05 08:15:00", "b": 544.25}, {"a": "2024-11-05 08:20:00", "b": 550.4}, {"a": "2024-11-05 08:25:00", "b": 545.0}, {"a": "2024-11-05 08:30:00", "b": 559.2}, {"a": "2024-11-05 08:35:00", "b": 541.6}, {"a": "2024-11-05 08:40:00", "b": 526.5}, {"a": "2024-11-05 08:45:00", "b": 526.5}, {"a": "2024-11-05 08:50:00", "b": 558.8}, {"a": "2024-11-05 08:55:00", "b": 562.2}, {"a": "2024-11-05 09:00:00", "b": 580.75}, {"a": "2024-11-05 09:05:00", "b": 621.4}, {"a": "2024-11-05 09:10:00", "b": 637.2}, {"a": "2024-11-05 09:15:00", "b": 666.4}, {"a": "2024-11-05 09:20:00", "b": 641.5}, {"a": "2024-11-05 09:25:00", "b": 632.4}, {"a": "2024-11-05 09:30:00", "b": 625.25}, {"a": "2024-11-05 09:35:00", "b": 613.6}, {"a": "2024-11-05 09:40:00", "b": 640.0}, {"a": "2024-11-05 09:45:00", "b": 643.0}, {"a": "2024-11-05 09:50:00", "b": 612.3333333333334}, {"a": "2024-11-05 09:55:00", "b": 623.4}, {"a": "2024-11-05 10:00:00", "b": 653.6}, {"a": "2024-11-05 10:05:00", "b": 647.0}, {"a": "2024-11-05 10:10:00", "b": 666.8}, {"a": "2024-11-05 10:15:00", "b": 633.4}, {"a": "2024-11-05 10:20:00", "b": 609.2}, {"a": "2024-11-05 10:25:00", "b": 634.6}, {"a": "2024-11-05 10:30:00", "b": 644.4}, {"a": "2024-11-05 10:35:00", "b": 647.6}, {"a": "2024-11-05 10:40:00", "b": 641.8}, {"a": "2024-11-05 10:45:00", "b": 642.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    