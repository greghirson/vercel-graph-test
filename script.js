
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-21 10:00:00", "b": 498.2}, {"a": "2025-03-21 10:05:00", "b": 487.6}, {"a": "2025-03-21 10:10:00", "b": 482.75}, {"a": "2025-03-21 10:15:00", "b": 486.0}, {"a": "2025-03-21 10:20:00", "b": 484.5}, {"a": "2025-03-21 10:25:00", "b": 479.2}, {"a": "2025-03-21 10:30:00", "b": 471.8}, {"a": "2025-03-21 10:35:00", "b": 483.4}, {"a": "2025-03-21 10:40:00", "b": 490.4}, {"a": "2025-03-21 10:45:00", "b": 501.0}, {"a": "2025-03-21 10:50:00", "b": 504.0}, {"a": "2025-03-21 10:55:00", "b": 510.4}, {"a": "2025-03-21 11:00:00", "b": 496.4}, {"a": "2025-03-21 11:05:00", "b": 486.2}, {"a": "2025-03-21 11:10:00", "b": 479.4}, {"a": "2025-03-21 11:15:00", "b": 472.8}, {"a": "2025-03-21 11:20:00", "b": 477.2}, {"a": "2025-03-21 11:25:00", "b": 482.5}, {"a": "2025-03-21 11:30:00", "b": 488.0}, {"a": "2025-03-21 11:35:00", "b": 495.75}, {"a": "2025-03-21 11:40:00", "b": 502.0}, {"a": "2025-03-21 11:45:00", "b": 492.2}, {"a": "2025-03-21 11:50:00", "b": 492.25}, {"a": "2025-03-21 11:55:00", "b": 484.2}, {"a": "2025-03-21 12:00:00", "b": 482.2}, {"a": "2025-03-21 12:05:00", "b": 476.4}, {"a": "2025-03-21 12:10:00", "b": 477.2}, {"a": "2025-03-21 12:15:00", "b": 443.6}, {"a": "2025-03-21 12:20:00", "b": 456.6}, {"a": "2025-03-21 12:25:00", "b": 465.8}, {"a": "2025-03-21 12:30:00", "b": 476.0}, {"a": "2025-03-21 12:35:00", "b": 475.8}, {"a": "2025-03-21 12:40:00", "b": 473.0}, {"a": "2025-03-21 12:45:00", "b": 460.5}, {"a": "2025-03-21 12:50:00", "b": 452.25}, {"a": "2025-03-21 12:55:00", "b": 462.75}, {"a": "2025-03-21 13:00:00", "b": 471.6}, {"a": "2025-03-21 13:05:00", "b": 458.4}, {"a": "2025-03-21 13:10:00", "b": 466.5}, {"a": "2025-03-21 13:15:00", "b": 468.4}, {"a": "2025-03-21 13:20:00", "b": 469.25}, {"a": "2025-03-21 13:25:00", "b": 461.6}, {"a": "2025-03-21 13:30:00", "b": 434.4}, {"a": "2025-03-21 13:35:00", "b": 426.75}, {"a": "2025-03-21 13:40:00", "b": 422.4}, {"a": "2025-03-21 13:45:00", "b": 438.4}, {"a": "2025-03-21 13:50:00", "b": 454.25}, {"a": "2025-03-21 13:55:00", "b": 441.8}, {"a": "2025-03-21 14:00:00", "b": 443.2}, {"a": "2025-03-21 14:05:00", "b": 447.8}, {"a": "2025-03-21 14:10:00", "b": 447.75}, {"a": "2025-03-21 14:15:00", "b": 444.2}, {"a": "2025-03-21 14:20:00", "b": 435.0}, {"a": "2025-03-21 14:25:00", "b": 442.75}, {"a": "2025-03-21 14:30:00", "b": 449.8}, {"a": "2025-03-21 14:35:00", "b": 435.6}, {"a": "2025-03-21 14:40:00", "b": 424.6}, {"a": "2025-03-21 14:45:00", "b": 425.8}, {"a": "2025-03-21 14:50:00", "b": 434.4}, {"a": "2025-03-21 14:55:00", "b": 442.8}, {"a": "2025-03-21 15:00:00", "b": 437.0}, {"a": "2025-03-21 15:05:00", "b": 434.0}, {"a": "2025-03-21 15:10:00", "b": 432.4}, {"a": "2025-03-21 15:15:00", "b": 442.0}, {"a": "2025-03-21 15:20:00", "b": 444.0}, {"a": "2025-03-21 15:25:00", "b": 439.8}, {"a": "2025-03-21 15:30:00", "b": 439.4}, {"a": "2025-03-21 15:35:00", "b": 435.6}, {"a": "2025-03-21 15:40:00", "b": 427.0}, {"a": "2025-03-21 15:45:00", "b": 433.2}, {"a": "2025-03-21 15:50:00", "b": 428.6}, {"a": "2025-03-21 15:55:00", "b": 414.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    