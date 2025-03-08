
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-08 00:00:00", "b": 522.5}, {"a": "2025-03-08 00:05:00", "b": 511.4}, {"a": "2025-03-08 00:10:00", "b": 512.6}, {"a": "2025-03-08 00:15:00", "b": 512.0}, {"a": "2025-03-08 00:20:00", "b": 511.5}, {"a": "2025-03-08 00:25:00", "b": 505.6}, {"a": "2025-03-08 00:30:00", "b": 509.0}, {"a": "2025-03-08 00:35:00", "b": 493.75}, {"a": "2025-03-08 00:40:00", "b": 501.2}, {"a": "2025-03-08 00:45:00", "b": 505.8}, {"a": "2025-03-08 00:50:00", "b": 498.75}, {"a": "2025-03-08 00:55:00", "b": 495.0}, {"a": "2025-03-08 01:00:00", "b": 495.25}, {"a": "2025-03-08 01:05:00", "b": 488.6666666666667}, {"a": "2025-03-08 01:10:00", "b": 482.0}, {"a": "2025-03-08 01:15:00", "b": 484.75}, {"a": "2025-03-08 01:20:00", "b": 486.75}, {"a": "2025-03-08 01:25:00", "b": 490.2}, {"a": "2025-03-08 01:30:00", "b": 480.2}, {"a": "2025-03-08 01:35:00", "b": 456.5}, {"a": "2025-03-08 01:40:00", "b": 461.2}, {"a": "2025-03-08 01:45:00", "b": 475.25}, {"a": "2025-03-08 01:50:00", "b": 465.8}, {"a": "2025-03-08 01:55:00", "b": 471.2}, {"a": "2025-03-08 02:00:00", "b": 466.25}, {"a": "2025-03-08 02:05:00", "b": 458.75}, {"a": "2025-03-08 02:10:00", "b": 450.5}, {"a": "2025-03-08 02:15:00", "b": 456.2}, {"a": "2025-03-08 02:20:00", "b": 463.2}, {"a": "2025-03-08 02:25:00", "b": 457.6}, {"a": "2025-03-08 02:30:00", "b": 452.6666666666667}, {"a": "2025-03-08 02:35:00", "b": 455.75}, {"a": "2025-03-08 02:40:00", "b": 460.5}, {"a": "2025-03-08 02:45:00", "b": 451.8}, {"a": "2025-03-08 02:50:00", "b": 448.0}, {"a": "2025-03-08 02:55:00", "b": 447.0}, {"a": "2025-03-08 03:00:00", "b": 455.0}, {"a": "2025-03-08 03:05:00", "b": 453.25}, {"a": "2025-03-08 03:10:00", "b": 466.0}, {"a": "2025-03-08 03:15:00", "b": 454.0}, {"a": "2025-03-08 03:20:00", "b": 445.0}, {"a": "2025-03-08 03:25:00", "b": 443.0}, {"a": "2025-03-08 03:30:00", "b": 450.4}, {"a": "2025-03-08 03:35:00", "b": 451.25}, {"a": "2025-03-08 03:40:00", "b": 445.2}, {"a": "2025-03-08 03:45:00", "b": 447.6}, {"a": "2025-03-08 03:50:00", "b": 447.0}, {"a": "2025-03-08 03:55:00", "b": 448.6666666666667}, {"a": "2025-03-08 04:00:00", "b": 447.6666666666667}, {"a": "2025-03-08 04:05:00", "b": 448.5}, {"a": "2025-03-08 04:10:00", "b": 439.8}, {"a": "2025-03-08 04:15:00", "b": 432.6666666666667}, {"a": "2025-03-08 04:20:00", "b": 444.6}, {"a": "2025-03-08 04:25:00", "b": 565.6}, {"a": "2025-03-08 04:30:00", "b": 580.2}, {"a": "2025-03-08 04:35:00", "b": 553.25}, {"a": "2025-03-08 04:40:00", "b": 540.2}, {"a": "2025-03-08 04:45:00", "b": 577.6}, {"a": "2025-03-08 04:50:00", "b": 583.0}, {"a": "2025-03-08 04:55:00", "b": 544.8}, {"a": "2025-03-08 05:00:00", "b": 518.2}, {"a": "2025-03-08 05:05:00", "b": 509.4}, {"a": "2025-03-08 05:10:00", "b": 481.2}, {"a": "2025-03-08 05:15:00", "b": 472.0}, {"a": "2025-03-08 05:20:00", "b": 465.75}, {"a": "2025-03-08 05:25:00", "b": 470.6}, {"a": "2025-03-08 05:30:00", "b": 479.0}, {"a": "2025-03-08 05:35:00", "b": 473.4}, {"a": "2025-03-08 05:40:00", "b": 475.25}, {"a": "2025-03-08 05:45:00", "b": 477.3333333333333}, {"a": "2025-03-08 05:50:00", "b": 491.6}, {"a": "2025-03-08 05:55:00", "b": 478.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    