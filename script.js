
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-08 02:00:00", "b": 632.0}, {"a": "2025-02-08 02:05:00", "b": 598.6}, {"a": "2025-02-08 02:10:00", "b": 551.0}, {"a": "2025-02-08 02:15:00", "b": 543.8}, {"a": "2025-02-08 02:20:00", "b": 549.0}, {"a": "2025-02-08 02:25:00", "b": 528.25}, {"a": "2025-02-08 02:30:00", "b": 533.25}, {"a": "2025-02-08 02:35:00", "b": 543.75}, {"a": "2025-02-08 02:40:00", "b": 539.6}, {"a": "2025-02-08 02:45:00", "b": 580.2}, {"a": "2025-02-08 02:50:00", "b": 591.5}, {"a": "2025-02-08 02:55:00", "b": 551.6}, {"a": "2025-02-08 03:00:00", "b": 500.0}, {"a": "2025-02-08 03:05:00", "b": 495.25}, {"a": "2025-02-08 03:10:00", "b": 508.6}, {"a": "2025-02-08 03:15:00", "b": 514.2}, {"a": "2025-02-08 03:20:00", "b": 517.6}, {"a": "2025-02-08 03:25:00", "b": 514.25}, {"a": "2025-02-08 03:30:00", "b": 509.5}, {"a": "2025-02-08 03:35:00", "b": 510.8}, {"a": "2025-02-08 03:40:00", "b": 513.5}, {"a": "2025-02-08 03:45:00", "b": 511.0}, {"a": "2025-02-08 03:50:00", "b": 498.8}, {"a": "2025-02-08 03:55:00", "b": 504.0}, {"a": "2025-02-08 04:00:00", "b": 488.6}, {"a": "2025-02-08 04:05:00", "b": 506.8}, {"a": "2025-02-08 04:10:00", "b": 530.4}, {"a": "2025-02-08 04:15:00", "b": 524.25}, {"a": "2025-02-08 04:20:00", "b": 487.0}, {"a": "2025-02-08 04:25:00", "b": 448.0}, {"a": "2025-02-08 04:30:00", "b": 458.4}, {"a": "2025-02-08 04:35:00", "b": 468.4}, {"a": "2025-02-08 04:40:00", "b": 459.75}, {"a": "2025-02-08 04:45:00", "b": 441.4}, {"a": "2025-02-08 04:50:00", "b": 431.0}, {"a": "2025-02-08 04:55:00", "b": 440.0}, {"a": "2025-02-08 05:00:00", "b": 450.0}, {"a": "2025-02-08 05:05:00", "b": 444.4}, {"a": "2025-02-08 05:10:00", "b": 434.8}, {"a": "2025-02-08 05:15:00", "b": 433.75}, {"a": "2025-02-08 05:20:00", "b": 420.5}, {"a": "2025-02-08 05:25:00", "b": 431.0}, {"a": "2025-02-08 05:30:00", "b": 427.4}, {"a": "2025-02-08 05:35:00", "b": 432.4}, {"a": "2025-02-08 05:40:00", "b": 442.2}, {"a": "2025-02-08 05:45:00", "b": 443.0}, {"a": "2025-02-08 05:50:00", "b": 439.0}, {"a": "2025-02-08 05:55:00", "b": 435.8}, {"a": "2025-02-08 06:00:00", "b": 441.0}, {"a": "2025-02-08 06:05:00", "b": 447.0}, {"a": "2025-02-08 06:10:00", "b": 435.8}, {"a": "2025-02-08 06:15:00", "b": 443.0}, {"a": "2025-02-08 06:20:00", "b": 453.0}, {"a": "2025-02-08 06:25:00", "b": 444.5}, {"a": "2025-02-08 06:30:00", "b": 440.0}, {"a": "2025-02-08 06:35:00", "b": 442.5}, {"a": "2025-02-08 06:40:00", "b": 440.0}, {"a": "2025-02-08 06:45:00", "b": 436.6}, {"a": "2025-02-08 06:50:00", "b": 440.6}, {"a": "2025-02-08 06:55:00", "b": 429.4}, {"a": "2025-02-08 07:00:00", "b": 422.4}, {"a": "2025-02-08 07:05:00", "b": 437.6}, {"a": "2025-02-08 07:10:00", "b": 438.25}, {"a": "2025-02-08 07:15:00", "b": 428.6}, {"a": "2025-02-08 07:20:00", "b": 437.2}, {"a": "2025-02-08 07:25:00", "b": 437.6}, {"a": "2025-02-08 07:30:00", "b": 432.25}, {"a": "2025-02-08 07:35:00", "b": 434.5}, {"a": "2025-02-08 07:40:00", "b": 429.0}, {"a": "2025-02-08 07:45:00", "b": 426.2}, {"a": "2025-02-08 07:50:00", "b": 454.0}, {"a": "2025-02-08 07:55:00", "b": 466.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    