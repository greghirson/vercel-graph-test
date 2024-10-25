
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-25 00:10:00", "b": 503.25}, {"a": "2024-10-25 00:15:00", "b": 503.2}, {"a": "2024-10-25 00:20:00", "b": 514.0}, {"a": "2024-10-25 00:25:00", "b": 510.4}, {"a": "2024-10-25 00:30:00", "b": 508.8}, {"a": "2024-10-25 00:35:00", "b": 511.2}, {"a": "2024-10-25 00:40:00", "b": 508.8}, {"a": "2024-10-25 00:45:00", "b": 511.2}, {"a": "2024-10-25 00:50:00", "b": 516.0}, {"a": "2024-10-25 00:55:00", "b": 513.75}, {"a": "2024-10-25 01:00:00", "b": 516.6}, {"a": "2024-10-25 01:05:00", "b": 520.0}, {"a": "2024-10-25 01:10:00", "b": 520.6}, {"a": "2024-10-25 01:15:00", "b": 512.8}, {"a": "2024-10-25 01:20:00", "b": 509.4}, {"a": "2024-10-25 01:25:00", "b": 516.25}, {"a": "2024-10-25 01:30:00", "b": 522.0}, {"a": "2024-10-25 01:35:00", "b": 515.25}, {"a": "2024-10-25 01:40:00", "b": 521.6666666666666}, {"a": "2024-10-25 01:45:00", "b": 526.2}, {"a": "2024-10-25 01:50:00", "b": 520.0}, {"a": "2024-10-25 01:55:00", "b": 519.4}, {"a": "2024-10-25 02:00:00", "b": 518.5}, {"a": "2024-10-25 02:05:00", "b": 516.75}, {"a": "2024-10-25 02:10:00", "b": 525.8}, {"a": "2024-10-25 02:15:00", "b": 515.4}, {"a": "2024-10-25 02:20:00", "b": 505.25}, {"a": "2024-10-25 02:25:00", "b": 519.2}, {"a": "2024-10-25 02:30:00", "b": 521.5}, {"a": "2024-10-25 02:35:00", "b": 523.0}, {"a": "2024-10-25 02:40:00", "b": 516.2}, {"a": "2024-10-25 02:45:00", "b": 513.0}, {"a": "2024-10-25 02:50:00", "b": 523.6}, {"a": "2024-10-25 02:55:00", "b": 521.6}, {"a": "2024-10-25 03:00:00", "b": 527.0}, {"a": "2024-10-25 03:05:00", "b": 530.6666666666666}, {"a": "2024-10-25 03:10:00", "b": 532.0}, {"a": "2024-10-25 03:15:00", "b": 533.4}, {"a": "2024-10-25 03:20:00", "b": 520.6}, {"a": "2024-10-25 03:25:00", "b": 518.8}, {"a": "2024-10-25 03:30:00", "b": 533.2}, {"a": "2024-10-25 03:35:00", "b": 534.6}, {"a": "2024-10-25 03:40:00", "b": 522.0}, {"a": "2024-10-25 03:45:00", "b": 528.3333333333334}, {"a": "2024-10-25 03:50:00", "b": 527.25}, {"a": "2024-10-25 03:55:00", "b": 516.4}, {"a": "2024-10-25 04:00:00", "b": 508.4}, {"a": "2024-10-25 04:05:00", "b": 523.8}, {"a": "2024-10-25 04:10:00", "b": 531.4}, {"a": "2024-10-25 04:15:00", "b": 527.5}, {"a": "2024-10-25 04:20:00", "b": 533.0}, {"a": "2024-10-25 04:25:00", "b": 537.6}, {"a": "2024-10-25 04:30:00", "b": 533.0}, {"a": "2024-10-25 04:35:00", "b": 529.5}, {"a": "2024-10-25 04:40:00", "b": 538.75}, {"a": "2024-10-25 04:45:00", "b": 536.75}, {"a": "2024-10-25 04:50:00", "b": 537.25}, {"a": "2024-10-25 04:55:00", "b": 535.8}, {"a": "2024-10-25 05:00:00", "b": 532.0}, {"a": "2024-10-25 05:05:00", "b": 532.0}, {"a": "2024-10-25 05:10:00", "b": 528.0}, {"a": "2024-10-25 05:15:00", "b": 527.6}, {"a": "2024-10-25 05:20:00", "b": 524.4}, {"a": "2024-10-25 05:25:00", "b": 528.8}, {"a": "2024-10-25 05:30:00", "b": 530.0}, {"a": "2024-10-25 05:35:00", "b": 529.8}, {"a": "2024-10-25 05:40:00", "b": 527.6}, {"a": "2024-10-25 05:45:00", "b": 526.75}, {"a": "2024-10-25 05:50:00", "b": 531.25}, {"a": "2024-10-25 05:55:00", "b": 529.0}, {"a": "2024-10-25 06:00:00", "b": 530.0}, {"a": "2024-10-25 06:05:00", "b": 535.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    