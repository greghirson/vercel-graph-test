
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-03 03:00:00", "b": 526.6}, {"a": "2024-11-03 03:05:00", "b": 524.2}, {"a": "2024-11-03 03:10:00", "b": 519.2}, {"a": "2024-11-03 03:15:00", "b": 522.5}, {"a": "2024-11-03 03:20:00", "b": 514.6}, {"a": "2024-11-03 03:25:00", "b": 512.2}, {"a": "2024-11-03 03:30:00", "b": 525.2}, {"a": "2024-11-03 03:35:00", "b": 531.8}, {"a": "2024-11-03 03:40:00", "b": 519.8}, {"a": "2024-11-03 03:45:00", "b": 528.75}, {"a": "2024-11-03 03:50:00", "b": 535.25}, {"a": "2024-11-03 03:55:00", "b": 519.0}, {"a": "2024-11-03 04:00:00", "b": 513.2}, {"a": "2024-11-03 04:05:00", "b": 526.6666666666666}, {"a": "2024-11-03 04:10:00", "b": 540.75}, {"a": "2024-11-03 04:15:00", "b": 528.4}, {"a": "2024-11-03 04:20:00", "b": 523.0}, {"a": "2024-11-03 04:25:00", "b": 527.0}, {"a": "2024-11-03 04:30:00", "b": 532.4}, {"a": "2024-11-03 04:35:00", "b": 515.4}, {"a": "2024-11-03 04:40:00", "b": 523.8}, {"a": "2024-11-03 04:45:00", "b": 524.8}, {"a": "2024-11-03 04:50:00", "b": 517.4}, {"a": "2024-11-03 04:55:00", "b": 531.2}, {"a": "2024-11-03 05:00:00", "b": 530.0}, {"a": "2024-11-03 05:05:00", "b": 538.5}, {"a": "2024-11-03 05:10:00", "b": 533.8}, {"a": "2024-11-03 05:15:00", "b": 534.4}, {"a": "2024-11-03 05:20:00", "b": 543.8}, {"a": "2024-11-03 05:25:00", "b": 536.4}, {"a": "2024-11-03 05:30:00", "b": 525.5}, {"a": "2024-11-03 05:35:00", "b": 529.2}, {"a": "2024-11-03 05:40:00", "b": 537.3333333333334}, {"a": "2024-11-03 05:45:00", "b": 521.2}, {"a": "2024-11-03 05:50:00", "b": 514.6}, {"a": "2024-11-03 05:55:00", "b": 530.0}, {"a": "2024-11-03 06:00:00", "b": 530.4}, {"a": "2024-11-03 06:05:00", "b": 521.6}, {"a": "2024-11-03 06:10:00", "b": 509.8}, {"a": "2024-11-03 06:15:00", "b": 532.6}, {"a": "2024-11-03 06:20:00", "b": 537.0}, {"a": "2024-11-03 06:25:00", "b": 528.2}, {"a": "2024-11-03 06:30:00", "b": 520.75}, {"a": "2024-11-03 06:35:00", "b": 522.6666666666666}, {"a": "2024-11-03 06:40:00", "b": 519.75}, {"a": "2024-11-03 06:45:00", "b": 512.2}, {"a": "2024-11-03 06:50:00", "b": 516.8}, {"a": "2024-11-03 06:55:00", "b": 530.8}, {"a": "2024-11-03 07:00:00", "b": 532.4}, {"a": "2024-11-03 07:05:00", "b": 536.6}, {"a": "2024-11-03 07:10:00", "b": 520.2}, {"a": "2024-11-03 07:15:00", "b": 527.4}, {"a": "2024-11-03 07:20:00", "b": 523.25}, {"a": "2024-11-03 07:25:00", "b": 520.75}, {"a": "2024-11-03 07:30:00", "b": 514.3333333333334}, {"a": "2024-11-03 07:35:00", "b": 529.8}, {"a": "2024-11-03 07:40:00", "b": 522.5}, {"a": "2024-11-03 07:45:00", "b": 508.5}, {"a": "2024-11-03 07:50:00", "b": 506.5}, {"a": "2024-11-03 07:55:00", "b": 513.6}, {"a": "2024-11-03 08:00:00", "b": 525.2}, {"a": "2024-11-03 08:05:00", "b": 518.5}, {"a": "2024-11-03 08:10:00", "b": 496.2}, {"a": "2024-11-03 08:15:00", "b": 502.25}, {"a": "2024-11-03 08:20:00", "b": 509.0}, {"a": "2024-11-03 08:25:00", "b": 512.3333333333334}, {"a": "2024-11-03 08:30:00", "b": 505.75}, {"a": "2024-11-03 08:35:00", "b": 505.25}, {"a": "2024-11-03 08:40:00", "b": 498.8}, {"a": "2024-11-03 08:45:00", "b": 494.6}, {"a": "2024-11-03 08:50:00", "b": 505.2}, {"a": "2024-11-03 08:55:00", "b": 513.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    