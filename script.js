
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-18 00:00:00", "b": 488.2}, {"a": "2025-03-18 00:05:00", "b": 480.25}, {"a": "2025-03-18 00:10:00", "b": 476.5}, {"a": "2025-03-18 00:15:00", "b": 487.5}, {"a": "2025-03-18 00:20:00", "b": 483.0}, {"a": "2025-03-18 00:25:00", "b": 479.0}, {"a": "2025-03-18 00:30:00", "b": 474.0}, {"a": "2025-03-18 00:35:00", "b": 475.0}, {"a": "2025-03-18 00:40:00", "b": 481.25}, {"a": "2025-03-18 00:45:00", "b": 477.0}, {"a": "2025-03-18 00:50:00", "b": 475.6}, {"a": "2025-03-18 00:55:00", "b": 472.0}, {"a": "2025-03-18 01:00:00", "b": 464.2}, {"a": "2025-03-18 01:05:00", "b": 462.0}, {"a": "2025-03-18 01:10:00", "b": 454.5}, {"a": "2025-03-18 01:15:00", "b": 434.4}, {"a": "2025-03-18 01:20:00", "b": 430.5}, {"a": "2025-03-18 01:25:00", "b": 440.2}, {"a": "2025-03-18 01:30:00", "b": 457.4}, {"a": "2025-03-18 01:35:00", "b": 455.0}, {"a": "2025-03-18 01:40:00", "b": 457.6}, {"a": "2025-03-18 01:45:00", "b": 468.75}, {"a": "2025-03-18 01:50:00", "b": 464.0}, {"a": "2025-03-18 01:55:00", "b": 474.8}, {"a": "2025-03-18 02:00:00", "b": 464.8}, {"a": "2025-03-18 02:05:00", "b": 459.2}, {"a": "2025-03-18 02:10:00", "b": 460.5}, {"a": "2025-03-18 02:15:00", "b": 463.5}, {"a": "2025-03-18 02:20:00", "b": 458.0}, {"a": "2025-03-18 02:25:00", "b": 460.8}, {"a": "2025-03-18 02:30:00", "b": 434.0}, {"a": "2025-03-18 02:35:00", "b": 417.0}, {"a": "2025-03-18 02:40:00", "b": 424.0}, {"a": "2025-03-18 02:45:00", "b": 440.8}, {"a": "2025-03-18 02:50:00", "b": 436.0}, {"a": "2025-03-18 02:55:00", "b": 431.2}, {"a": "2025-03-18 03:00:00", "b": 432.4}, {"a": "2025-03-18 03:05:00", "b": 438.75}, {"a": "2025-03-18 03:10:00", "b": 425.2}, {"a": "2025-03-18 03:15:00", "b": 419.0}, {"a": "2025-03-18 03:20:00", "b": 426.2}, {"a": "2025-03-18 03:25:00", "b": 425.0}, {"a": "2025-03-18 03:30:00", "b": 415.2}, {"a": "2025-03-18 03:35:00", "b": 428.0}, {"a": "2025-03-18 03:40:00", "b": 418.75}, {"a": "2025-03-18 03:45:00", "b": 420.0}, {"a": "2025-03-18 03:50:00", "b": 411.0}, {"a": "2025-03-18 03:55:00", "b": 405.25}, {"a": "2025-03-18 04:00:00", "b": 409.0}, {"a": "2025-03-18 04:05:00", "b": 420.4}, {"a": "2025-03-18 04:10:00", "b": 500.8}, {"a": "2025-03-18 04:15:00", "b": 476.6}, {"a": "2025-03-18 04:20:00", "b": 469.4}, {"a": "2025-03-18 04:25:00", "b": 466.8}, {"a": "2025-03-18 04:30:00", "b": 466.6}, {"a": "2025-03-18 04:35:00", "b": 465.0}, {"a": "2025-03-18 04:40:00", "b": 453.6}, {"a": "2025-03-18 04:45:00", "b": 449.6666666666667}, {"a": "2025-03-18 04:50:00", "b": 448.6}, {"a": "2025-03-18 04:55:00", "b": 449.25}, {"a": "2025-03-18 05:00:00", "b": 455.6}, {"a": "2025-03-18 05:05:00", "b": 439.2}, {"a": "2025-03-18 05:10:00", "b": 416.2}, {"a": "2025-03-18 05:15:00", "b": 409.75}, {"a": "2025-03-18 05:20:00", "b": 444.2}, {"a": "2025-03-18 05:25:00", "b": 461.6}, {"a": "2025-03-18 05:30:00", "b": 437.75}, {"a": "2025-03-18 05:35:00", "b": 438.5}, {"a": "2025-03-18 05:40:00", "b": 436.8}, {"a": "2025-03-18 05:45:00", "b": 431.0}, {"a": "2025-03-18 05:50:00", "b": 433.6}, {"a": "2025-03-18 05:55:00", "b": 438.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    