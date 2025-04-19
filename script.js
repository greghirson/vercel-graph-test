
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-18 22:00:00", "b": 534.5}, {"a": "2025-04-18 22:05:00", "b": 533.0}, {"a": "2025-04-18 22:10:00", "b": 534.3333333333334}, {"a": "2025-04-18 22:15:00", "b": 535.5}, {"a": "2025-04-18 22:20:00", "b": 533.0}, {"a": "2025-04-18 22:25:00", "b": 515.3333333333334}, {"a": "2025-04-18 22:30:00", "b": 512.2}, {"a": "2025-04-18 22:35:00", "b": 524.8}, {"a": "2025-04-18 22:40:00", "b": 525.5}, {"a": "2025-04-18 22:45:00", "b": 525.4}, {"a": "2025-04-18 22:50:00", "b": 528.0}, {"a": "2025-04-18 22:55:00", "b": 529.6}, {"a": "2025-04-18 23:00:00", "b": 511.5}, {"a": "2025-04-18 23:05:00", "b": 515.75}, {"a": "2025-04-18 23:10:00", "b": 531.75}, {"a": "2025-04-18 23:15:00", "b": 527.3333333333334}, {"a": "2025-04-18 23:20:00", "b": 511.8}, {"a": "2025-04-18 23:25:00", "b": 518.4}, {"a": "2025-04-18 23:30:00", "b": 503.2}, {"a": "2025-04-18 23:35:00", "b": 507.75}, {"a": "2025-04-18 23:40:00", "b": 507.0}, {"a": "2025-04-18 23:45:00", "b": 498.0}, {"a": "2025-04-18 23:50:00", "b": 501.0}, {"a": "2025-04-18 23:55:00", "b": 494.75}, {"a": "2025-04-19 00:00:00", "b": 496.0}, {"a": "2025-04-19 00:05:00", "b": 510.2}, {"a": "2025-04-19 00:10:00", "b": 504.5}, {"a": "2025-04-19 00:15:00", "b": 499.75}, {"a": "2025-04-19 00:20:00", "b": 511.4}, {"a": "2025-04-19 00:25:00", "b": 507.6}, {"a": "2025-04-19 00:30:00", "b": 503.2}, {"a": "2025-04-19 00:35:00", "b": 501.0}, {"a": "2025-04-19 00:40:00", "b": 497.0}, {"a": "2025-04-19 00:45:00", "b": 490.25}, {"a": "2025-04-19 00:50:00", "b": 488.75}, {"a": "2025-04-19 00:55:00", "b": 488.3333333333333}, {"a": "2025-04-19 01:00:00", "b": 485.6666666666667}, {"a": "2025-04-19 01:05:00", "b": 485.0}, {"a": "2025-04-19 01:10:00", "b": 487.25}, {"a": "2025-04-19 01:15:00", "b": 479.8}, {"a": "2025-04-19 01:20:00", "b": 478.8}, {"a": "2025-04-19 01:25:00", "b": 488.0}, {"a": "2025-04-19 01:30:00", "b": 486.6666666666667}, {"a": "2025-04-19 01:35:00", "b": 475.25}, {"a": "2025-04-19 01:40:00", "b": 460.0}, {"a": "2025-04-19 01:45:00", "b": 457.2}, {"a": "2025-04-19 01:50:00", "b": 476.4}, {"a": "2025-04-19 01:55:00", "b": 476.0}, {"a": "2025-04-19 02:00:00", "b": 464.2}, {"a": "2025-04-19 02:05:00", "b": 479.2}, {"a": "2025-04-19 02:10:00", "b": 477.25}, {"a": "2025-04-19 02:15:00", "b": 471.8}, {"a": "2025-04-19 02:20:00", "b": 464.8}, {"a": "2025-04-19 02:25:00", "b": 468.25}, {"a": "2025-04-19 02:30:00", "b": 477.4}, {"a": "2025-04-19 02:35:00", "b": 462.2}, {"a": "2025-04-19 02:40:00", "b": 458.25}, {"a": "2025-04-19 02:45:00", "b": 464.3333333333333}, {"a": "2025-04-19 02:50:00", "b": 467.8}, {"a": "2025-04-19 02:55:00", "b": 461.8}, {"a": "2025-04-19 03:00:00", "b": 469.25}, {"a": "2025-04-19 03:05:00", "b": 471.5}, {"a": "2025-04-19 03:10:00", "b": 463.0}, {"a": "2025-04-19 03:15:00", "b": 455.3333333333333}, {"a": "2025-04-19 03:20:00", "b": 455.75}, {"a": "2025-04-19 03:25:00", "b": 452.0}, {"a": "2025-04-19 03:30:00", "b": 465.0}, {"a": "2025-04-19 03:35:00", "b": 458.5}, {"a": "2025-04-19 03:40:00", "b": 457.2}, {"a": "2025-04-19 03:45:00", "b": 453.0}, {"a": "2025-04-19 03:50:00", "b": 453.0}, {"a": "2025-04-19 03:55:00", "b": 460.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    