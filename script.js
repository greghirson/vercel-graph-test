
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-04 09:00:00", "b": 511.6}, {"a": "2025-03-04 09:05:00", "b": 508.0}, {"a": "2025-03-04 09:10:00", "b": 494.75}, {"a": "2025-03-04 09:15:00", "b": 491.2}, {"a": "2025-03-04 09:20:00", "b": 503.5}, {"a": "2025-03-04 09:25:00", "b": 491.5}, {"a": "2025-03-04 09:30:00", "b": 476.6}, {"a": "2025-03-04 09:35:00", "b": 487.0}, {"a": "2025-03-04 09:40:00", "b": 487.25}, {"a": "2025-03-04 09:45:00", "b": 491.8}, {"a": "2025-03-04 09:50:00", "b": 482.6}, {"a": "2025-03-04 09:55:00", "b": 475.5}, {"a": "2025-03-04 10:00:00", "b": 479.5}, {"a": "2025-03-04 10:05:00", "b": 464.2}, {"a": "2025-03-04 10:10:00", "b": 471.0}, {"a": "2025-03-04 10:15:00", "b": 469.25}, {"a": "2025-03-04 10:20:00", "b": 466.0}, {"a": "2025-03-04 10:25:00", "b": 471.6666666666667}, {"a": "2025-03-04 10:30:00", "b": 460.6}, {"a": "2025-03-04 10:35:00", "b": 447.6}, {"a": "2025-03-04 10:40:00", "b": 458.4}, {"a": "2025-03-04 10:45:00", "b": 453.4}, {"a": "2025-03-04 10:50:00", "b": 450.2}, {"a": "2025-03-04 10:55:00", "b": 447.3333333333333}, {"a": "2025-03-04 11:00:00", "b": 445.0}, {"a": "2025-03-04 11:05:00", "b": 438.5}, {"a": "2025-03-04 11:10:00", "b": 442.0}, {"a": "2025-03-04 11:15:00", "b": 446.25}, {"a": "2025-03-04 11:20:00", "b": 449.0}, {"a": "2025-03-04 11:25:00", "b": 452.0}, {"a": "2025-03-04 11:30:00", "b": 449.6}, {"a": "2025-03-04 11:35:00", "b": 441.0}, {"a": "2025-03-04 11:40:00", "b": 433.8}, {"a": "2025-03-04 11:45:00", "b": 430.75}, {"a": "2025-03-04 11:50:00", "b": 432.8}, {"a": "2025-03-04 11:55:00", "b": 436.2}, {"a": "2025-03-04 12:00:00", "b": 434.0}, {"a": "2025-03-04 12:05:00", "b": 437.6}, {"a": "2025-03-04 12:10:00", "b": 429.8}, {"a": "2025-03-04 12:15:00", "b": 429.0}, {"a": "2025-03-04 12:20:00", "b": 430.6}, {"a": "2025-03-04 12:25:00", "b": 421.5}, {"a": "2025-03-04 12:30:00", "b": 426.4}, {"a": "2025-03-04 12:35:00", "b": 433.5}, {"a": "2025-03-04 12:40:00", "b": 425.6}, {"a": "2025-03-04 12:45:00", "b": 425.0}, {"a": "2025-03-04 12:50:00", "b": 424.0}, {"a": "2025-03-04 12:55:00", "b": 436.25}, {"a": "2025-03-04 13:00:00", "b": 422.5}, {"a": "2025-03-04 13:05:00", "b": 419.6}, {"a": "2025-03-04 13:10:00", "b": 427.25}, {"a": "2025-03-04 13:15:00", "b": 421.3333333333333}, {"a": "2025-03-04 13:20:00", "b": 418.25}, {"a": "2025-03-04 13:25:00", "b": 417.6}, {"a": "2025-03-04 13:30:00", "b": 423.2}, {"a": "2025-03-04 13:35:00", "b": 418.0}, {"a": "2025-03-04 13:40:00", "b": 408.5}, {"a": "2025-03-04 13:45:00", "b": 411.6}, {"a": "2025-03-04 13:50:00", "b": 410.25}, {"a": "2025-03-04 13:55:00", "b": 406.0}, {"a": "2025-03-04 14:00:00", "b": 407.0}, {"a": "2025-03-04 14:05:00", "b": 405.5}, {"a": "2025-03-04 14:10:00", "b": 408.8}, {"a": "2025-03-04 14:15:00", "b": 406.5}, {"a": "2025-03-04 14:20:00", "b": 406.3333333333333}, {"a": "2025-03-04 14:25:00", "b": 407.3333333333333}, {"a": "2025-03-04 14:30:00", "b": 407.5}, {"a": "2025-03-04 14:35:00", "b": 407.5}, {"a": "2025-03-04 14:40:00", "b": 405.5}, {"a": "2025-03-04 14:45:00", "b": 404.3333333333333}, {"a": "2025-03-04 14:50:00", "b": 405.5}, {"a": "2025-03-04 14:55:00", "b": 407.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    