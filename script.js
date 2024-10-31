
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-30 13:00:00", "b": 469.4}, {"a": "2024-10-30 13:05:00", "b": 473.2}, {"a": "2024-10-30 13:10:00", "b": 473.75}, {"a": "2024-10-30 13:15:00", "b": 477.8}, {"a": "2024-10-30 13:20:00", "b": 465.8}, {"a": "2024-10-30 13:25:00", "b": 452.4}, {"a": "2024-10-30 13:30:00", "b": 441.0}, {"a": "2024-10-30 13:35:00", "b": 452.8}, {"a": "2024-10-30 13:40:00", "b": 474.2}, {"a": "2024-10-30 13:45:00", "b": 472.2}, {"a": "2024-10-30 13:50:00", "b": 447.0}, {"a": "2024-10-30 13:55:00", "b": 452.0}, {"a": "2024-10-30 14:00:00", "b": 440.75}, {"a": "2024-10-30 14:05:00", "b": 442.0}, {"a": "2024-10-30 14:10:00", "b": 454.0}, {"a": "2024-10-30 14:15:00", "b": 444.25}, {"a": "2024-10-30 14:20:00", "b": 442.0}, {"a": "2024-10-30 14:25:00", "b": 436.2}, {"a": "2024-10-30 14:30:00", "b": 437.5}, {"a": "2024-10-30 14:35:00", "b": 440.5}, {"a": "2024-10-30 14:40:00", "b": 434.0}, {"a": "2024-10-30 14:45:00", "b": 448.4}, {"a": "2024-10-30 14:50:00", "b": 457.75}, {"a": "2024-10-30 14:55:00", "b": 446.5}, {"a": "2024-10-30 15:00:00", "b": 439.25}, {"a": "2024-10-30 15:05:00", "b": 453.2}, {"a": "2024-10-30 15:10:00", "b": 456.75}, {"a": "2024-10-30 15:15:00", "b": 447.6}, {"a": "2024-10-30 15:20:00", "b": 437.0}, {"a": "2024-10-30 15:25:00", "b": 432.5}, {"a": "2024-10-30 15:30:00", "b": 445.6}, {"a": "2024-10-30 15:35:00", "b": 439.0}, {"a": "2024-10-30 15:40:00", "b": 429.0}, {"a": "2024-10-30 15:45:00", "b": 424.6666666666667}, {"a": "2024-10-30 15:50:00", "b": 433.2}, {"a": "2024-10-30 15:55:00", "b": 444.2}, {"a": "2024-10-30 16:00:00", "b": 448.0}, {"a": "2024-10-30 16:05:00", "b": 429.5}, {"a": "2024-10-30 16:10:00", "b": 421.8}, {"a": "2024-10-30 16:15:00", "b": 439.8}, {"a": "2024-10-30 16:20:00", "b": 435.0}, {"a": "2024-10-30 16:25:00", "b": 427.8}, {"a": "2024-10-30 16:30:00", "b": 429.6666666666667}, {"a": "2024-10-30 16:35:00", "b": 433.3333333333333}, {"a": "2024-10-30 16:40:00", "b": 432.8}, {"a": "2024-10-30 16:45:00", "b": 435.75}, {"a": "2024-10-30 16:50:00", "b": 434.4}, {"a": "2024-10-30 16:55:00", "b": 421.4}, {"a": "2024-10-30 17:00:00", "b": 423.6}, {"a": "2024-10-30 17:05:00", "b": 427.6}, {"a": "2024-10-30 17:10:00", "b": 421.8}, {"a": "2024-10-30 17:15:00", "b": 431.8}, {"a": "2024-10-30 17:20:00", "b": 441.6666666666667}, {"a": "2024-10-30 17:25:00", "b": 449.8}, {"a": "2024-10-30 17:30:00", "b": 457.8}, {"a": "2024-10-30 17:35:00", "b": 467.25}, {"a": "2024-10-30 17:40:00", "b": 479.4}, {"a": "2024-10-30 17:45:00", "b": 488.2}, {"a": "2024-10-30 17:50:00", "b": 498.2}, {"a": "2024-10-30 17:55:00", "b": 496.5}, {"a": "2024-10-30 18:00:00", "b": 506.2}, {"a": "2024-10-30 18:05:00", "b": 504.25}, {"a": "2024-10-30 18:10:00", "b": 505.6}, {"a": "2024-10-30 18:15:00", "b": 502.6}, {"a": "2024-10-30 18:20:00", "b": 510.6}, {"a": "2024-10-30 18:25:00", "b": 514.0}, {"a": "2024-10-30 18:30:00", "b": 514.75}, {"a": "2024-10-30 18:35:00", "b": 525.8}, {"a": "2024-10-30 18:40:00", "b": 524.0}, {"a": "2024-10-30 18:45:00", "b": 529.25}, {"a": "2024-10-30 18:50:00", "b": 538.6666666666666}, {"a": "2024-10-30 18:55:00", "b": 542.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    